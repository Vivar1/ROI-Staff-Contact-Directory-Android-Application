import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Brightness from 'expo-brightness';
import styles from './Styles.js'; // Importing the default export 'styles'
import { updateFontSize } from './Styles.js'; // Importing the named export 'updateFontSize'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsPage() {
  const [sliderValue1, setSliderValue1] = useState();
  const [fontSize, setFontSize] = useState(styles.defaultFontSize);

useEffect(() => {
    // Retrieve font size from AsyncStorage
    const getFontSize = async () => {
      try {
        const value = await AsyncStorage.getItem('fontSize');
        if (value !== null) {
          setFontSize(Number(value));
          updateFontSize(Number(value)); // Update font size immediately
        }
      } catch (error) {
        console.error('Error retrieving font size:', error);
      }
    };

    getFontSize();
}, []);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission not granted to adjust brightness');
        return;
      }
      // Set initial brightness based on slider value
      Brightness.setSystemBrightnessAsync(sliderValue1 / 100);
    })();
  }, []);



  const handleFontSizeChange = (value) => {
    setFontSize(value);
    updateFontSize(value); // Call updateFontSize function to update styles
  };

  const handleBrightnessChange = (value) => {
    setSliderValue1(value);
    Brightness.setSystemBrightnessAsync(value / 100);
  };


  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homepageContent}>
          <Text style={{...styles.paragrapHomeScreen, fontSize: styles.paragrapHomeScreen.fontSize + parseFloat(fontSize) }}>
            Settings
          </Text>
        </View>

        <View style={styles.buttonsContainer}>

          <View style={styles.settingsContainer}>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider}
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue1}
                onValueChange={handleBrightnessChange}
              />
              <Text style={styles.valueText}>Brightness: {sliderValue1}</Text>
            </View>

            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider}
                maximumValue={10}
                minimumValue={0}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={0}
                value={fontSize}
                onValueChange={handleFontSizeChange}
              />
              <Text style={styles.valueText}>Text Size: {Math.round(fontSize * 10)}%</Text>
            </View>
          </View>

          <Text style={{ ...styles.smallparagraph, fontSize: styles.smallparagraph.fontSize + parseFloat(fontSize) }}>
            Please Click Forgot Login Details to reset your username and password. If you are unable to do so please contact your sector's IT administrator.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

