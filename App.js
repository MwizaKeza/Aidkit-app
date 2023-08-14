import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StepGuideScreen from './src/StepGuideScreen';
import StepDetailScreen from './src/StepDetailScreen';
import SignInScreen from './src/SignInScreen';
import UserProfileScreen from './src/UserProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="StepGuide" component={StepGuideScreen} />
        <Stack.Screen name="StepDetail" component={StepDetailScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
