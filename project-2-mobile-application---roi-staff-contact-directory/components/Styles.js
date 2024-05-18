import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const defaultFontSize = 16;


export const updateFontSize = async (value) => {
  try {
    // Save the font size to AsyncStorage
    await AsyncStorage.setItem('fontSize', String(value));
    console.log('Font size updated successfully.');
   
  } catch (error) {
    console.error('Error updating font size:', error);
    
  }
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navbarContainer: {
    width: '100%',
   
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  navbarLogo: {
   width: 120, 
   height: 50, 
     // Make the image fill the height of the container
  },
  paragraph: {
    margin: 24,
    marginTop: 20,
    fontSize: defaultFontSize + 5,
    fontFamily:'Trebuchet',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subheading:{
    margin: 10,
    marginTop: 20,
    fontSize: defaultFontSize + 5,
    fontFamily:'Trebuchet',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  paragrapHomeScreen: {
    margin: 24,
    marginTop: 20,
    fontSize: 30,
    fontFamily:'Trebuchet',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  paragrapProfileScreen: {
    margin: 24,
    marginTop: 20,
    fontSize: defaultFontSize + 14,
    fontFamily:'Trebuchet',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  smallparagraph: {
    margin: 24,
    marginTop: 20,
    fontSize: 16,
    fontFamily:'Trebuchet',
    color: '#fff',
    textAlign: 'center',
  },
  smallparagraphSearch:{
    marginLeft: 24,
    marginRight: 24,
    marginTop: 20,
    fontSize: 18,
    fontFamily:'Trebuchet',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    margin: 24,
    marginTop: 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20 
  },
  inputContactDirectory: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 10,
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20 
  },
  buttonsContainer: {
    alignItems: 'center'
  },
  smallButtonsContainer: {
      alignItems: 'center'
  },

  createButtonsContainer:{
      alignItems: 'center',
      marginBottom: 310
  },
  buttonContainer: {
    backgroundColor: '#981a1d',
    width: '86%',
    borderRadius: 10,
    marginBottom: 20,

  },
  searchButton: {
    backgroundColor: '#981a1d',
    borderColor: 'white',
    borderWidth: 2,
    width: '86%',
    textAlign: 'center',
    justifyContent: 'center', 
    height: 65,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  smallButton: {
    backgroundColor: '#981a1d',
    borderColor: 'white',
    borderWidth: 2,
    width: '86%',
    textAlign: 'center',
    justifyContent: 'center', 
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  searchButtonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: defaultFontSize + 14,
    fontFamily: 'Trebuchet',
    color: 'white',
  },
  smallButtonText: {
    alignSelf: "center", 
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Trebuchet',
    color: 'white',
  },
   wideImage: {
    height: 110,
    width: 370,
    backgroundColor: 'white',
    borderRadius: 60,
    margin: 'auto',
    marginBottom: 20, // Add margin between each image
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 2,
 
  },
  homepageContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  
  menuIconConatiner: {
    paddingLeft: 15,
    height: 47,
    width: 47, // Adjust the width to fit your container
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center', // Center the image horizontally

  },

  menuIcon: {
    height: '100%',
    width: '100%' 
  },
  contactDirectoryContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20
  },
  employeeCard: {
    width: '85%',
    justifyContent: 'center',
    margin: "auto", 
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#981a1d',
    paddingBottom: 20
  },
  profileIconContainer: {
    backgroundColor: 'grey', 
    borderRadius: 50,
    padding: 20,
    marginTop: 10
  },
  personalProfileContainer: {
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginRight: 15
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: defaultFontSize + 2,
    fontFamily: 'Trebuchet'
  },
  inputUpdateField: {
    width: '80%',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 10,
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20 
  },
  updateProfileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 220
    
  },
  sliderContainer: {
    alignItems: 'center'
  },
  settingsContainer: {
    backgroundColor: '#981a1d',
    width: '86%',
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5
    
  },
  slider: {
    width: '80%',
    height: 40,
  },
  valueText: {
    color: 'white',
    fontSize: defaultFontSize + 2,
    fontFamily: 'Trebuchet',
    marginBottom: 10
  }
  
});

export default styles;
