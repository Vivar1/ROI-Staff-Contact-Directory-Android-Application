
import { Text, View, StyleSheet, ImageBackground, TextInput, ScrollView,Image, TouchableOpacity } from 'react-native';
import styles from './Styles.js'; // Assuming you have defined your styles in 'Styles.js'
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HelpPage() {

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
    

    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homepageContent}>
          <Text style={{...styles.paragrapHomeScreen, fontSize: styles.paragrapHomeScreen.fontSize + parseFloat(fontSize) }}>
            Help Page
          </Text>
          <Text style={{...styles.smallparagraph, fontSize: styles.smallparagraph.fontSize + parseFloat(fontSize), textAlign: 'left' }}>
            Thank you for using our application! This help page is designed to assist you in navigating the application, troubleshooting common issues, and accessing additional support resources. If you have any questions or need further assistance, please don’t hesitate to reach out to our customer support team.
          </Text>
          <Text style={{...styles.paragrapHomeScreen, fontSize: styles.paragrapHomeScreen.fontSize + parseFloat(fontSize), textAlign: 'left' }}>
            Navigation Instructions
          </Text>

          <Text style={{...styles.smallparagraph, fontSize: styles.smallparagraph.fontSize + parseFloat(fontSize), textAlign: 'left' }}>
              Welcome to ROI Mobile applicatoin! This help page is designed to assist you in navigating through the various features and functionalities of our app. Our goal is to provide you with a seamless and user-friendly experience. If you encounter any issues or need further assistance, our support team is always ready to help.{"\n"}{"\n"}To get started, you can log in using your credentials on the Login Page. If you forget your password, simply visit the Forgot Password Page to reset it. Once logged in, the Home Page offers quick access to important features through three convenient links. You can easily manage your account settings, such as adjusting brightness and text size, on the Settings Page.{"\n"}{"\n"}Creating and managing your profile is simple with our app. The Add Profile Page allows you to quickly set up a new profile, while the Update Profile Page lets you modify your existing information. If needed, you also have the option to delete your profile. Additionally, the Contact Directory Search feature makes it easy to find and connect with other users. For easy navigation, use the Menu to access all the links and pages within the app. Thank you for using our application, and we hope you have a great experience!
          </Text>
        </View>       
        
      </ScrollView>
    </ImageBackground>
  );
}


