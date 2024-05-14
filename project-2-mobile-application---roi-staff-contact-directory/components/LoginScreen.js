import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TextInput,Button } from 'react-native';
import styles from './Styles.js';
import React, { useState } from 'react';



export default function HomePage( {navigation} ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) =>{
    setPassword(text);
  }

  const handleLogin = (navigation) => {
  // Redirect to HomePage
    
 
}


  const handleSignUp = () => {
    
  }
  
  return (
    
    <ImageBackground source={require('../assets/background.png')} // Replace 'background.jpg' with your image file
      style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Please enter your username and password.
      </Text>
      <View>
            <TextInput
              style={styles.input}
              onChangeText={handleUsernameChange}
              value={username}
              placeholder="Username"
              placeholderTextColor="#888"
            />
           <TextInput
            style={styles.input}
            onChangeText={handlePasswordChange}
            value={password}
            placeholder="Password"
            placeholderTextColor="#888"
          />

          
      </View>
      <View style={styles.buttonsContainer}> 
        <View style={styles.buttonContainer}>
            <Button title="Login" onPress={() => navigation.navigate("HomePage")} color='#fff' />
        </View>
        <View style={styles.buttonContainer}>
            <Button  title="Forgot Password" onPress={() => navigation.navigate("HomePage")} color='#fff' />
        </View>

        <Text style={styles.paragraph}>
         Forgot Username or Password:
      </Text>
        
        <Text style={styles.smallparagraph}>
        
Please Click Forgot Login Details to reset your username and password. If you are unable to do so please contact your sectors IT administrator.
      </Text>
      </View>
    </View>
    </ImageBackground>

    


  );
}



