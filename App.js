import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InterestPage from './screens/InterestPage';
import Home from './screens/Home';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
    headerStyle:{
          backgroundColor:"#2596be"
        },
        headerTintColor:'white',
        headerTitleAlign:'center',
        
  }}
        >

        
          <Stack.Screen
            name="interestpage"
            component={InterestPage}
            options={{
              title:"Choose your interest"
            }}
           
          />
          <Stack.Screen name="Home" component={Home}  />
          
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

export default App;
