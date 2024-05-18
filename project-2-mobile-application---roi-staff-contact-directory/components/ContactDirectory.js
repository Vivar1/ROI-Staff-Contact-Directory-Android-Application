import { Text, View, ImageBackground, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles.js'; // Assuming you have defined your styles in 'Styles.js'
import jsonData from '../assets/data/data.json';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactDirectoryPage({ navigation }) {

const [fontSize, setFontSize] = useState(styles.defaultFontSize);

useFocusEffect(
    React.useCallback(() => {
      const getFontSize = async () => {
        try {
          const value = await AsyncStorage.getItem('fontSize');
          if (value) {
            setFontSize((value));
          }
        } catch (error) {
          console.error('Error loading data:', error);
        }
      };

      getFontSize();
    }, [])
  )



/*
 * This vairable saves the arry of object for the search query 
 */
const [showAll, setShowAll] = useState([])


const [employees, setEmployees] = useState([]);


useFocusEffect(
    React.useCallback(() => {
      const fetchEmployees = async () => {
        try {
          const storedData = await AsyncStorage.getItem('employees');
          if (storedData) {
            setEmployees(JSON.parse(storedData));
          }
        } catch (error) {
          console.error('Error loading data:', error);
        }
      };

      fetchEmployees();
    }, [])
  )

  const [searchCriteria, setSearchCriteria] = useState({
    firstName: '',
    lastName: '',
    department: ''
  });



const showAllEmployees = () => {
     setEmployees(showAll);
     console.log(showAll);
};


const handleSearch = () => {
    setShowAll(employees);
    console.log('Search criteria:', searchCriteria);
    const filteredData = employees.filter(item => {
    const [firstName, lastName] = item.Name.split(' ');
    const fullName = firstName + ' ' + lastName; // Concatenate first name and last name
    const firstNameMatch = searchCriteria.firstName === '' || firstName.toLowerCase().startsWith(searchCriteria.firstName.toLowerCase());
    const lastNameMatch = searchCriteria.lastName === '' || lastName.toLowerCase().startsWith(searchCriteria.lastName.toLowerCase());
    const departmentMatch = searchCriteria.department === '' || item.Department.toLowerCase().startsWith(searchCriteria.department.toLowerCase());
    return (firstNameMatch && lastNameMatch && departmentMatch) ? fullName + ' ' + item.Department : null;
});
    setEmployees(filteredData);
  };


const handleInputChange = (field, value) => {
    setSearchCriteria(prevState => ({ ...prevState, [field]: value }));
  };




  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homepageContent}>
          <Text style={{...styles.paragrapHomeScreen,fontSize: styles.paragrapHomeScreen.fontSize + parseFloat(fontSize) }}>
            Staff Contact Directory
          </Text>
          <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize) }}>
            Please utilize the search field below to search a staff member within our contact directory.
          </Text>
        </View>
        <View>
          
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Employee First Name"
            placeholderTextColor="#888"
            onChangeText={text => handleInputChange('firstName', text)}
          />
          
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Employee Last Name"
            placeholderTextColor="#888"
            onChangeText={text => handleInputChange('lastName', text)}
          />
         
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Department"
            placeholderTextColor="#888"
            onChangeText={text => handleInputChange('department', text)}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.smallButton}>
              <TouchableOpacity onPress={handleSearch}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize)}}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.smallButton}>
              <TouchableOpacity onPress={showAllEmployees}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize)}}>Display All</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.contactDirectoryContent}>
          {employees.map((employee) => (
            <TouchableOpacity key={employee} onPress={() => navigation.navigate("Employee Profile", { employeeData: employee })}>
              <View style={styles.employeeCard}>
                <View style={styles.profileIconContainer}>
                  <MaterialIcons name="people" style={{ fontSize: 50 }} color='white' />
                </View>
                <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize) }}>
                  <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize)}}>Employee Name: </Text> {employee.Name}
                </Text>
                <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize) }}>
                  <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize)}}>Phone: </Text> {employee.Phone}
                </Text>
                <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize) }}>
                  <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize)}}>Department:</Text> {employee.Department}
                </Text>
                <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize) }}>
                  <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize)}}>Address: </Text> {employee.Address.Street}, {employee.Address.City}, {employee.Address.State}, {employee.Address.ZIP}, {employee.Address.Country}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
