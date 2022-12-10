import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InterestPage from './screens/InterestPage';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import linking from "./linking.js";
function App() {
  // Navigation between different screens
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      {/* global styling for all screens */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2596be',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        {/* Initial route or the first screen */}
        <Stack.Screen
          name="loginscreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        {/* navigate to interest page */}
        <Stack.Screen
          name="interestpage"
          component={InterestPage}
          options={{
            title: 'Choose your interest',
          }}
        />
        {/* Navigate to Home page */}
        <Stack.Screen name="Feed" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
