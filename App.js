import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InterestPage from './screens/InterestPage';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2596be',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        {/* <Stack.Screen
          name="signupscreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
          }}
        /> */}
        <Stack.Screen
          name="loginscreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="interestpage"
          component={InterestPage}
          options={{
            title: 'Choose your interest',
          }}
        />
        <Stack.Screen name="Sports" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
