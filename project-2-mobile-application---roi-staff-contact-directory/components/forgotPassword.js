import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TextInput,Button, Alert, TouchableOpacity } from 'react-native';
import styles from './Styles.js';

export default function LoginPage( {navigation} ) {

const handleForgotPassword = () => {
    Alert.alert(
        'A link to reset your password has been sent',
        'to your associated email address.',
        [
            { text: 'Ok', 
            onPress: () => navigation.navigate('LoginPage') },
        ],
        { cancelable: false }
    );
};
  
  return (
    
    <ImageBackground source={require('../assets/background.png')} // Replace 'background.jpg' with your image file
      style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Please enter your username and link will be send with a password reset.
      </Text>
      <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#888"
            />
           
      </View>
      <View style={styles.buttonsContainer}> 
        <View style={styles.smallButton}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.smallButtonText}>Password Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.smallButton}>
               <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                <Text style={styles.smallButtonText}>Back</Text>
              </TouchableOpacity>
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



