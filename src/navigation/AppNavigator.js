import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import HomeScreen from '../screens/HomeScreen';
// import PlayScreen from '../screens/PlayScreen.js'
// import ViewInviteScreen from '../screens/ViewInviteScreen';
// import TopicOneScreen from '../screens/TopicOneScreen';
// import TopicOnePlayScreen from '../screens/TopicOnePlayScreen';
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        {/* <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Play" component={PlayScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ViewInvite" component={ViewInviteScreen}/>
        <Stack.Screen name="TopicOne" component= {TopicOneScreen}/>
        <Stack.Screen name="TopicOnePlay" component = {TopicOnePlayScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

