import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View, SafeAreaView, TouchableOpacity, TextInput,Text } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView,
  DrawerItemList } from '@react-navigation/drawer';
// Initialise the Login screen as the starting point of the application 
import LoginScreen from './components/LoginScreen';
import styles from './components/Styles';
import HomePage from './components/HomePage';
import Menu from './assets/hamburgerMenu.png';
import AddContact from './components/AddContact';
import EmployeeProfile from './components/EmployeeProfile';
import ForgotPasswordPage from './components/forgotPassword'
import ContactDirectory from './components/ContactDirectory';
import HelpPage from './components/HelpPage';
import Settings from './components/Settings';
import UpdateProfile from './components/UpdateProfile'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';



const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <View style={styles.navbarContainer}>
    <Image
      style={styles.navbarLogo}
      source={require('./assets/Logo.png')}
    />
    </View>
  );
}


function MenuIcon() {
  
 const navigation = useNavigation(); //Call the navigation component to get instead of passing it as a prop

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <View style={styles.menuIconConatiner}>
        <Image
          style={styles.menuIcon}
          resizeMode="contain"
          source={Menu}
        />
      </View>
    </TouchableOpacity>

  )
}

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator 

      screenOptions={() => ({ // Pass navigation prop here
        drawerStyle: {
          backgroundColor: 'grey',          
        },

        headerStyle: {
          backgroundColor: 'black',
          height: 120,
          
        },

        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => ( // No need to destructure navigation here
          <MenuIcon/>
        ),

        headerRight: () => (
          <View style={styles.personalProfileContainer}>
            <MaterialIcons name="person" style={{ fontSize: 35 }} color= 'white' />
          </View>
        )
      })}>

       <Drawer.Screen 
        name="Home Page" 
        component={HomePage} 
        options={{ 
          drawerLabelStyle: { color: 'white', fontSize: 16 }, // Customize the label style for Home Page
          drawerIcon: () => ( // Define a drawer icon
            <MaterialIcons name="home" style={{ fontSize: 30 }} color= 'white' />
          )
        }}/>
      <Drawer.Screen name="Contact Directory" component={ContactDirectory}  options={{ 
          drawerLabelStyle: { color: 'white', fontSize: 16 }, // Customize the label style for Home Page
          drawerIcon: () => ( // Define a drawer icon
            <MaterialIcons name="people" style={{ fontSize: 30 }} color= 'white' />
          )
        }} />
      <Drawer.Screen name="Add Contact" component={AddContact}  options={{ 
          drawerLabelStyle: { color: 'white', fontSize: 16 }, // Customize the label style for Home Page
          drawerIcon: () => ( // Define a drawer icon
            <MaterialIcons name="person-add" style={{ fontSize: 30 }} color= 'white' />
          )
        }} />
        <Drawer.Screen name="Help Page" component={HelpPage}  options={{ 
          drawerLabelStyle: { color: 'white', fontSize: 16 }, // Customize the label style for Home Page
          drawerIcon: () => ( // Define a drawer icon
            <MaterialIcons name="help" style={{ fontSize: 30 }} color= 'white' />
          ),
          
        }} />
         <Drawer.Screen name="Settings" component={Settings}  options={{ 
          drawerLabelStyle: { color: 'white', fontSize: 16 }, // Customize the label style for Home Page
          drawerIcon: () => ( // Define a drawer icon
            <MaterialIcons name="settings" style={{ fontSize: 30 }} color= 'white' />
          ),
          
        }} />
        
        <Drawer.Screen 
            name="Employee Profile" 
            component={EmployeeProfile}  
            options={{ 
              drawerItemStyle: { display: 'none' }, // Hide the drawer item completely
              unmountOnBlur: true, // Prevent the screen from being accessible
          }} 
        />
        <Drawer.Screen 
            name="Update Profile" 
            component={UpdateProfile}  
            options={{ 
              drawerItemStyle: { display: 'none' }, // Hide the drawer item completely
              unmountOnBlur: true, // Prevent the screen from being accessible
          }} 
        />


        
       

       <Drawer.Screen 
        name="Logout" 
        component={LogoutScreen} // Navigate to LogoutScreen
        options={{ 
          drawerLabelStyle: { color: 'white', fontSize: 16 },
          drawerIcon: () => (
              <MaterialIcons name="logout" style={{ fontSize: 30 }} color= 'white' />
          ),drawerItemStyle: {
              marginTop: 450,
              marginBottom: 'auto'// Apply margin bottom to create space
            }
          }} 
        />


    
    </Drawer.Navigator>
  );
}


// Create a LogoutScreen component
function LogoutScreen({ navigation }) {
  React.useEffect(() => {
   
    navigation.replace('LoginPage');
  }, []);

  
  return null;
}

// In App component
<Stack.Screen
  name="LoginPage"
  component={LoginScreen}
  options={{
    headerShown: false 
  }}
/>


export default function App() {
  return (
  
    <NavigationContainer> 
      
      <Stack.Navigator
        screenOptions={{
          
          headerStyle: {
            backgroundColor: 'black',
            height: 120,
          },
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
        }}
      > 
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
              height: 120,
            },
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerLeft: () => null
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordPage}
          options={{
            headerStyle: {
              backgroundColor: 'black',
              height: 120,
            },
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: 'center',
            headerLeft: () => null
          }}
        />
        <Stack.Screen name="HomePage" component={MyDrawer} options={{ headerShown: false }} />  
        

          
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
