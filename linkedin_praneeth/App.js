/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
// import 'react-native-gesture-handler';
import SignUp from './screens/SignUp';
import Main from './screens/Main';
import SignIn from './screens/SignIn';
import Join from './screens/Join';
import FileUpload from './screens/FileUpload';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="FileUpload" component={FileUpload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

