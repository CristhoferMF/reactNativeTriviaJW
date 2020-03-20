import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {StatusBar,AppState} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen'
import CategoryScreen from '../CategoryScreen'
import CategoryScreenOnline from '../CategoryScreenOnline'
import QuizScreen from '../QuizScreen'
import COLOR from '../../config/color'
import Sound from 'react-native-sound'

const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      music : this.startMusicBackground(),
      appState: AppState.currentState
    }
  }
  startMusicBackground = () => {
    const soundBack = new Sound('bensound_summer.mp3',Sound.MAIN_BUNDLE,(error) => {
      if(error) throw new Error(error);

      soundBack.setVolume(0.7)
      soundBack.setNumberOfLoops(-1)
      soundBack.play();
    })
    return soundBack
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.state.music.play()
    }else{
      this.state.music.pause()
    }
    this.setState({appState: nextAppState});
  };
  render(){
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
}

export default App;