import React from 'react';
import {View,ImageBackground, StyleSheet} from 'react-native';
import BtnPlay from './BtnPlay'
import BtnHelp from './BtnHelp'
import GameTitle from './GameTitle'
import sound from '../../config/sound'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen = ({navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/img/background.jpg')} 
            style={styles.backgroundImage}>
            <View style={styles.ViewTop}>
                <GameTitle/>
            </View>
            <BtnPlay onPress={()=>{
                navigation.navigate('Category')
                sound.startSoundEffect("button_press.mp3",0.7);
                }}/>
            <BtnHelp/>
        </ImageBackground >
    )
}

const styles= StyleSheet.create({
    backgroundImage:{
        width:'100%',
        height:'100%'
    },
    ViewTop:{
        height:hp('75%'),
        alignItems:'center',
        justifyContent:'center'
    },
    
})
export default HomeScreen;