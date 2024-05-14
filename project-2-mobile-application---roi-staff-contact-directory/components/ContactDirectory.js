import { Text, View, StyleSheet, ImageBackground, TextInput, ScrollView,Image, TouchableOpacity } from 'react-native';
import styles from './Styles.js'; // Assuming you have defined your styles in 'Styles.js'
import jsonData from '../assets/data/data.json';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function ContactDirectoryPage() {
  const [data, setData] = useState([]);

 useEffect(() => {
  // Check if jsonData is an array before setting it
  if (Array.isArray(jsonData)) { 
    setData(jsonData);
  } else {
    console.log('jsonData is not an array:', jsonData);
  }
}, []);


  return (
    

    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homepageContent}>
          <Text style={styles.paragrapHomeScreen}>
            Staff Contact Directory
          </Text>
          <Text style={styles.smallparagraphSearch}>
            Please utilize the search field below to search a staff member within our contact directory.
          </Text>
        </View>
        <View>
          <Text style={styles.smallparagraphSearch}>
            Employee First Name
          </Text>
          <TextInput
            style={styles.inputContactDirectory}
            placeholder="Employee First Name "
            placeholderTextColor="#888"
          />
          <Text style={styles.smallparagraphSearch}>
            Employee Last Name
          </Text>
          <TextInput
            style={styles.inputContactDirectory}
            placeholder="Employee Last Name "
            placeholderTextColor="#888"
          />
          <Text style={styles.smallparagraphSearch}>
            Job Title:
          </Text>
          <TextInput
            style={styles.inputContactDirectory}
            placeholder="Job Title  "
            placeholderTextColor="#888"
          />
          <Text style={styles.smallparagraphSearch}>
            Department:
          </Text>
          <TextInput
            style={styles.inputContactDirectory}
            placeholder="Department  "
            placeholderTextColor="#888"
          />
       <View style={styles.buttonsContainer}> 
          <View style={styles.searchButton}>
          <TouchableOpacity onPress={""} >
            <Text style={styles.searchButtonText}>Search </Text>
          </TouchableOpacity>
         </View>
         </View>
        </View >
        
      <View style={styles.contactDirectoryContent}>
        {data.map((item, index) => (
          <View key={index} style={styles.employeeCard}>
            <View style={styles.profileIconContainer}>
                <MaterialIcons name="people" style={{ fontSize: 50 }} color= 'white'  />
             </View>
            <Text style={styles.smallparagraphSearch}>
              <Text style={styles.boldText}>Employee Name: </Text> {item.Name}
            </Text>
            <Text style={styles.smallparagraphSearch}>
              <Text style={styles.boldText}>Phone: </Text> {item.Phone}
            </Text>
            <Text style={styles.smallparagraphSearch}>
              <Text style={styles.boldText}>Department:</Text> {item.Department}
            </Text>
            <Text style={styles.smallparagraphSearch}>
              <Text style={styles.boldText}>Address: </Text> {item.Address.Street}, {item.Address.City}, {item.Address.State}, {item.Address.ZIP}, {item.Address.Country}
            </Text>
          
          </View>
        ))}
        </View >
      </ScrollView>
    </ImageBackground>
  );
}

