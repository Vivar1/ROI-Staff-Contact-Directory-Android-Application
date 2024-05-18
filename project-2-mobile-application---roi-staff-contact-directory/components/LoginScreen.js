import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TextInput,Button, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import credentialsJson from '../assets/data/usernamePassword.json'


export default function LoginPage( {navigation} ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernamePassword, setUsernamePassword] = useState([]);

  /**
   * Fetch the detials for the credentials for the users 
   */
 

    
  useEffect(() => {
    // Set the credential data when the component mounts
    setUsernamePassword(credentialsJson);

    
  }, []);

/*
 * Check that the data is loaded for the usernames and passwords. 
 */
  console.log(usernamePassword)


  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) =>{
    setPassword(text);
  }

const handleLogin = () => {
  const foundUser = usernamePassword.find(user => user.username === username && user.password === password); 

  if(foundUser) {
    navigation.navigate("HomePage");
  }else{
    Alert.alert("Login Failed", "Incorrect username or password");
  }
};

 
  
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
      /**
      * Update the buttons to ensure styling is both viable for android and iphone useage. 
      */
      <View style={styles.buttonsContainer}> 
        
            <View style={styles.smallButton}>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.smallButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
         
           
            <View style={styles.smallButton}>
              <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={styles.smallButtonText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          
            <View style={styles.smallButton}>
              <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
                <Text style={styles.smallButtonText}>Quick Entry</Text>
              </TouchableOpacity>
            </View>
          


        <Text style={styles.paragraph}>
         Forgot Username or Password:
      </Text>


        <Text style={styles.smallparagraph}>
       
          Please Click Forgot Login Details to reset your username and password. If you are unable to do so please contact your sectors IT administrator.{"\n"}{"\n"} <Text style={styles.boldText}>Login using credentials</Text>{"\n"} USERNAME: <Text style={styles.boldText}> Andrew</Text>{"\n"} PASSWORD: <Text style={styles.boldText}> tafensw </Text> 
      </Text>

    


      </View>
    </View>
    </ImageBackground>

    


  );
}


