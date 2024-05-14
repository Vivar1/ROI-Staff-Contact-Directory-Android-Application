import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TextInput,Button, Image, TouchableOpacity } from 'react-native';
import styles from './Styles.js';

import contactDirectory from '../assets/ContactDirectory.png';
import addContact from '../assets/AddContact.png';
import helpPage from '../assets/helpPage.png';

export default function AssetExample({navigation}) {
 
  return (
    
    <ImageBackground source={require('../assets/background.png')} // Replace 'background.jpg' with your image file
      style={styles.container}>
    
    <View style={styles.homepageContent}>
      <Text style={styles.paragrapHomeScreen}>
        Welcome To Red Opal Innovations
      </Text>
     
        <Text style={styles.smallparagraph}>
        Below is a list of quick links to key pages within our application. 
      </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Contact Directory")}>
         <Image style={styles.wideImage} source={contactDirectory} />
         </TouchableOpacity>
          <Image style={styles.wideImage} source={addContact} />
           <Image style={styles.wideImage} source={helpPage} />
        
      </View>
     
      
   
    </ImageBackground>


  );
}



