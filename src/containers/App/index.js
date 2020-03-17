import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen'
import CategoryScreen from '../CategoryScreen'
import CategoryScreenOnline from '../CategoryScreenOnline'
import QuizScreen from '../QuizScreen'
import { Player } from '@react-native-community/audio-toolkit';
import COLOR from '../../config/color'

const Stack = createStackNavigator();

function App() {
  
  const startMusicBackground = () => {
    var p = new Player("bensound_summer.mp3");
      p.looping = true
      p.volume = 0.7
    p.prepare((err) => {
      if (err) console.log("START_MUSIC_ERROR", err);
    })
    p.play()
  }
  startMusicBackground();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR.PRIMARY} barStyle="light-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Category" component={CategoryScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="CategoryOnline" component={CategoryScreenOnline} options={{
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