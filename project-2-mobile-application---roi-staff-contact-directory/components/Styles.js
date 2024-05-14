import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    fontSize: 21,
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
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 20 
  },
  buttonsContainer: {
    alignItems: 'center'
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
    marginTop: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchButtonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
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
    height: 50,
    width: 50, // Adjust the width to fit your container
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
  boldText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  
  
  
});

export default styles;
