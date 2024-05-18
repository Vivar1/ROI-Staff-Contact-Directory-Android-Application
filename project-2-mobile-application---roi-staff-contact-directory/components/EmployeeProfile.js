import { Text, View, StyleSheet, ImageBackground, TextInput, ScrollView,Image, TouchableOpacity,Button, Alert } from 'react-native';
import styles from './Styles.js'; // Assuming you have defined your styles in 'Styles.js'
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmployeeProfile({ route }) {
   const navigation = useNavigation();
   const { employeeData } = route.params;
  console.log(employeeData)
 
   // Access the updateFontSize function from the context
 const [fontSize1, setFontSize] = useState(styles.defaultFontSize);

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






  const handleDelete = () => {
    Alert.alert(
        'Delete Profile',
        'Are you sure you want to delete this profile?',
        [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Yes', 
            onPress: handleDeleteComplete },
        ],
        { cancelable: false }
    );
};


const handleDeleteComplete = async () => {
        try {
            // Retrieve the list of employees from AsyncStorage
            const storedEmployees = await AsyncStorage.getItem('employees');
            if (storedEmployees) {
                const employees = JSON.parse(storedEmployees);

                // Filter out the employee to be deleted
                const updatedEmployees = employees.filter(emp => emp.Name !== employeeData.Name);

                // Save the updated list back to AsyncStorage
                await AsyncStorage.setItem('employees', JSON.stringify(updatedEmployees));
                console.log('Employee profile deleted successfully.');

                // Redirect user to contact directory page
                navigation.navigate('Contact Directory');
            }
        } catch (error) {
            console.error('Error deleting profile:', error);
        }
    };

  console.log('Employee Data:', employeeData);

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homepageContent}>
          <Text style={{...styles.paragrapProfileScreen, fontSize: styles.paragrapProfileScreen.fontSize + parseFloat(fontSize1) }}>
            Employee Profile
          </Text>
          <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize1) }}>
            Here are the details of the selected employee:
          </Text>
        </View>
        
        <View style={styles.contactDirectoryContent}>
          <View style={styles.employeeCard}>
            <View style={styles.profileIconContainer}>
              <MaterialIcons name="people" style={{ fontSize: 50 }} color= 'white'  />
            </View>
            <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize1) }}>
              <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize1)}}>Employee Name: </Text> {employeeData.Name}
            </Text>
            <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize1) }}>
              <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize1)}}>Phone: </Text> {employeeData.Phone}
            </Text>
            <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize1) }}>
              <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize1)}}>Department:</Text> {employeeData.Department}
            </Text>
            <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize1) }}>
              <Text style={{...styles.boldText, fontSize: styles.boldText.fontSize + parseFloat(fontSize1)}}>Address: </Text> {employeeData.Address.Street}, {employeeData.Address.City}, {employeeData.Address.State}, {employeeData.Address.ZIP}, {employeeData.Address.Country}
            </Text>
          </View>
          <View style={styles.buttonsContainer}> 

            <View style={styles.smallButton}>
              <TouchableOpacity onPress={() => navigation.navigate("Update Profile", { employeeData: employeeData })}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize1)}}>Update Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.smallButton}>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize1)}}>Delete Profile</Text>
              </TouchableOpacity>
            </View>            
            <View style={styles.smallButton}>
               <TouchableOpacity onPress={() => navigation.navigate("Contact Directory")}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize1)}}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 50 }}></View>
        </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}