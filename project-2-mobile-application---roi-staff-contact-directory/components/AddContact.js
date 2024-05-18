import { Text, View, StyleSheet, ImageBackground, TextInput, ScrollView,Image, TouchableOpacity } from 'react-native';
import styles from './Styles.js'; // Assuming you have defined your styles in 'Styles.js'

import React, { useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';




export default function EmployeeProfile ( {navigation} ) {

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
 * Create a vairable to store the entry point of information for 
 * data storage.  
 */
const [formData, setFormData] = useState ({
    //Add the entry component for the staff profile.
    firstName: '',
    lastName: '',
    phone: '',
    department: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    addressCountry: ''

});


/*
 * Make a variable called employees utlise usestate to save the set employees
 * to the employees array. 
 */
 const [employees, setEmployees] = useState([]);

/*
 * useFocusEffect  
 */
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
/*
 * Create a funciton to handle the create profile
 * Includ the new employee object and make sure to add the first/lastname 
 * together white white space in between. 
 */
const handleCreatedProfile = async () => {
    
    
    /*
    * Set up error handling if fields arent entered correctly or arent filled out at all 
    *  
    */
    const requiredFields = ['firstName', 'lastName', 'phone', 'department', 'addressStreet', 'addressCity', 'addressState', 'addressZip', 'addressCountry'];
      const emptyFields = requiredFields.filter(field => !formData[field]);

      // If there are empty fields, show an alert
      if (emptyFields.length > 0) {
        alert(`Please fill in all fields before creating the profile`);
        return; // Exit the function early
      }
      if (formData.phone.length !== 10) {
    alert('Please enter a 10-digit phone number.');
    return; // Exit the function early
  }
  if (formData.addressZip.length !== 4) {
    alert('Please enter a 4-digit zip code.');
    return; // Exit the function early
  }

    const newEmployee = {
      Id: employees.length + 1,
      Name: `${formData.firstName} ${formData.lastName}`,
      Phone: formData.phone,
      Department: formData.department,
      Address: {
      Street: formData.addressStreet,
      City: formData.addressCity,
      State: formData.addressState,
      ZIP: formData.addressZip,
      Country: formData.addressCountry
    }

};

/*
 * Send the Json Data to the json file via newEmployee object 
 */

 try {
      // Add new employee to the state
      const updatedEmployees = [...employees, newEmployee];
      setEmployees(updatedEmployees);

      // Save the updated data back to AsyncStorage
      await AsyncStorage.setItem('employees', JSON.stringify(updatedEmployees));
      console.log('Data saved successfully.');
      console.log(updatedEmployees);

/*
 * Reset the formData to add new staff members if needed.
 */
setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      department: '',
      addressStreet: '',
      addressCity: '',
      addressState: '',
      addressZip: '',
      addressCountry: ''
});

// Show a success alert with the entered profile information
  const profileInfo = `Profile Created Successfully!\n\nName: ${newEmployee.Name}\nPhone: ${newEmployee.Phone}\nDepartment: ${newEmployee.Department}\nAddress: ${newEmployee.Address.Street}, ${newEmployee.Address.City}, ${newEmployee.Address.State}, ${newEmployee.Address.ZIP}, ${newEmployee.Address.Country}`;
  alert(profileInfo);
    
/*
 * Display a message in the console for updated employees details 
 * and errors.  
 */
console.log('Updated JSON data:', employees);
} catch (error) {
        console.error('Error saving data:', error);
    }
};

// Regular expressions for input validation
  const nameRegex = /^[A-Za-z]+$/;
  const numberRegex = /^[0-9]+$/;
  // Regular expression to allow only letters, numbers, and white spaces
  const streetRegex = /^[a-zA-Z0-9\s]*$/;
// Regular expression to allow only letters and white spaces
  const cityRegex = /^[a-zA-Z\s]*$/;

  return (
    

    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homepageContent}>
          <Text style={{...styles.paragrapHomeScreen, fontSize: styles.paragrapHomeScreen.fontSize + parseFloat(fontSize) }}>
            Add Contact To Directory
          </Text>
          <Text style={{...styles.smallparagraphSearch, fontSize: styles.smallparagraphSearch.fontSize + parseFloat(fontSize) }}>
            Please utilise the form below to add a staff member to the contact directory. 
          </Text>
        </View>
        <View>
          <Text style={{...styles.subheading, fontSize: styles.subheading.fontSize + parseFloat(fontSize) }}>
            Details
          </Text>
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Employee First Name "
            placeholderTextColor="#888"
            value={formData.firstName}
             onChangeText={(text) => {
              if (text === '' || nameRegex.test(text)) { // Only allow letters or empty string
                setFormData({ ...formData, firstName: text });
              }
            }}
          />
         
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Employee Last Name "
            placeholderTextColor="#888"
            value={formData.lastName}
            onChangeText={(text) => {
            if (text === '' || nameRegex.test(text)) {
                setFormData({ ...formData, lastName: text });
            }
            }}
            
          />
          
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Phone "
            placeholderTextColor="#888"
            value={formData.phone}
            onChangeText={(text) => {
// Remove non-numeric characters
              const formattedText = text.replace(/\D/g, '');
              // Limit input to 10 characters
              const truncatedText = formattedText.slice(0, 10);
              if (truncatedText.length === 10 && numberRegex.test(truncatedText)) {
                setFormData({ ...formData, phone: truncatedText });
              } else {
                setFormData({ ...formData, phone: formattedText }); // Update the state even if it's not 10 digits yet
              }
            }
            }
            
           
          />
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Department  "
            placeholderTextColor="#888"
            value={formData.department}
            onChangeText={(text) => {
            if(text === '' || numberRegex.test(text)){
                setFormData({ ...formData, department: text })}
            }
            }
            
          />
          
          <Text style={{...styles.subheading, fontSize: styles.subheading.fontSize + parseFloat(fontSize) }}>
             Address
          </Text>

          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Address Street  "
            placeholderTextColor="#888"
            value={formData.addressStreet}
            onChangeText={(text) => {
              

                if (streetRegex.test(text)) {
                  setFormData({ ...formData, addressStreet: text });
                }}}
          />
          
          
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Address City "
            placeholderTextColor="#888"
            value={formData.addressCity}
            onChangeText={(text) => {
              if(cityRegex.test(text)){
                setFormData({ ...formData, addressCity: text })}
              }
            }
            
          />
          
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Address State "
            placeholderTextColor="#888"
            value={formData.addressState}
            onChangeText={(text) => {
              if(text === '' || nameRegex.test(text)){
                setFormData({ ...formData, addressState: text })}
            }
            }
            
          />
          
          <TextInput
            style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Address Zip "
            placeholderTextColor="#888"
            value={formData.addressZip}
            onChangeText={(text) => {
              const formattedText = text.replace(/\D/g, '');
                // Limit input to 10 characters
              const truncatedText = formattedText.slice(0, 4);

              if (truncatedText.length === 4 && numberRegex.test(truncatedText)){
                setFormData({ ...formData, addressZip: truncatedText });
              } else {
                setFormData({ ...formData, addressZip: formattedText });
              }
            }}
            
            
          />
      
          <TextInput
          style={{...styles.inputContactDirectory, fontSize: styles.inputContactDirectory.fontSize + parseFloat(fontSize) }}
            placeholder="Address Country "
            placeholderTextColor="#888"
            value={formData.addressCountry}
            onChangeText={(text) => {
              if(cityRegex.test(text)) {
                setFormData({ ...formData, addressCountry: text })}
              }}
          />
        {/* Utlise the handleCreateProfile functions to add the employe profile to the json data file. */}
       <View style={styles.createButtonsContainer}> 
          <View style={styles.smallButton}>
          <TouchableOpacity onPress={handleCreatedProfile } >
            <Text style={{...styles.smallButtonText, fontSize: styles.smallButtonText.fontSize + parseFloat(fontSize)}}>Create Profile</Text>
          </TouchableOpacity>
         </View>
         </View>
        </View >
        
      
     
      </ScrollView>
    </ImageBackground>
  );
}
