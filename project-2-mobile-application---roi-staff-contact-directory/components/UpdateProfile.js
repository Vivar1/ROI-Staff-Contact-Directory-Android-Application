import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import styles from './Styles';

export default function UpdateProfile({ route }) {
    const navigation = useNavigation();
    const { employeeData } = route.params;
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




    // State to store the edited employee details
    const [editedEmployeeData, setEditedEmployeeData] = useState(employeeData);

    // Function to handle saving the updated profile
    const handleSaveProfile = async () => {
        try {
            // Retrieve the list of employees from AsyncStorage
            const storedEmployees = await AsyncStorage.getItem('employees');
            if (storedEmployees) {
                const employees = JSON.parse(storedEmployees);

                // Find the index of the employee to be updated
                const index = employees.findIndex(emp => emp.Id === editedEmployeeData.Id);

                // Update the employee data
                if (index !== -1) {
                    employees[index] = editedEmployeeData;
                }

                // Save the updated list back to AsyncStorage
                await AsyncStorage.setItem('employees', JSON.stringify(employees));
                console.log('Employee profile updated successfully.');

                // Redirect user to contact directory page
                navigation.navigate('Contact Directory');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.homepageContent}>
                    <Text style={{...styles.paragrapProfileScreen, fontSize: styles.paragrapProfileScreen.fontSize + parseFloat(fontSize)}}>Update Employee Profile</Text>
                    <Text style={{...styles.smallparagraph, fontSize: styles.smallparagraph.fontSize + parseFloat(fontSize) }}>
                        Change the details that need to be updated. Once you are done, press "Save Profile" to save the updated profile.
                    </Text>
                </View>

                <View style={styles.updateProfileContainer}>
                    <View style={styles.employeeCard}>
                        <View style={styles.profileIconContainer}>
                            <MaterialIcons name="people" style={{ fontSize: 50 }} color="white" />
                        </View>
                        <TextInput 
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Name}
                            onChangeText={name => setEditedEmployeeData({ ...editedEmployeeData, Name: name })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Phone}
                            onChangeText={phone => setEditedEmployeeData({ ...editedEmployeeData, Phone: phone })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Department}
                            onChangeText={department => setEditedEmployeeData({ ...editedEmployeeData, Department: department })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Address.Street}
                            onChangeText={street => setEditedEmployeeData({ ...editedEmployeeData, Address: { ...editedEmployeeData.Address, Street: street } })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Address.City}
                            onChangeText={city => setEditedEmployeeData({ ...editedEmployeeData, Address: { ...editedEmployeeData.Address, City: city } })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Address.State}
                            onChangeText={state => setEditedEmployeeData({ ...editedEmployeeData, Address: { ...editedEmployeeData.Address, State: state } })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Address.ZIP}
                            onChangeText={zip => setEditedEmployeeData({ ...editedEmployeeData, Address: { ...editedEmployeeData.Address, ZIP: zip } })}
                        />
                        <TextInput
                            style={{...styles.inputUpdateField, fontSize: styles.inputUpdateField.fontSize + parseFloat(fontSize)}}
                            value={editedEmployeeData.Address.Country}
                            onChangeText={country => setEditedEmployeeData({ ...editedEmployeeData, Address: { ...editedEmployeeData.Address, Country: country } })}
                        />


                    </View>
                    <View style={styles.buttonsContainer}>

                        <View style={styles.smallButton}>
              <TouchableOpacity onPress={handleSaveProfile}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize)}}>Save Profile</Text>
              </TouchableOpacity>
            </View>            
            <View style={styles.smallButton}>
               <TouchableOpacity onPress={() => navigation.navigate("Contact Directory")}>
                <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize)}}>Back</Text>
              </TouchableOpacity>
            </View>


                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
