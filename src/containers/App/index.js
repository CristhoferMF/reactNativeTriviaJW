import 'react-native-gesture-handler';

import * as React from 'react';
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen'
import CategoryScreen from '../CategoryScreen'
import QuizScreen from '../QuizScreen'
import COLOR from '../../config/color'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR.PRIMARY} barStyle="light-content" />
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Category" component={CategoryScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Quiz" component={QuizScreen} options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;