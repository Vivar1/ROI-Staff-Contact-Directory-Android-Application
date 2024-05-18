import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TextInput,Button, Image, TouchableOpacity } from 'react-native';
import contactDirectory from '../assets/ContactDirectory.png';
import addContact from '../assets/AddContact.png';
import helpPage from '../assets/helpPage.png';
import styles from './Styles.js';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomePage({navigation}) {
   // Access the updateFontSize function from the context
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


  return (
    
    <ImageBackground source={require('../assets/background.png')} // Replace 'background.jpg' with your image file
      style={styles.container}>
    
    <View style={styles.homepageContent}>
      <Text style={{...styles.paragrapHomeScreen,fontSize: styles.paragrapHomeScreen.fontSize + parseFloat(fontSize) }}>
      Welcome To Red Opal Innovations
      </Text>
     
        <Text style={{...styles.smallparagraph, fontSize: styles.smallparagraph.fontSize + parseFloat(fontSize) }}>
        Below is a list of quick links to key pages within our application. 
      </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Contact Directory")}>
         <Image style={styles.wideImage} source={contactDirectory} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("Add Contact")}>
          <Image style={styles.wideImage} source={addContact} />
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Help Page")}>
           <Image style={styles.wideImage} source={helpPage} />
          </TouchableOpacity>
        
      </View>
     
      
   
    </ImageBackground>


  );
}



