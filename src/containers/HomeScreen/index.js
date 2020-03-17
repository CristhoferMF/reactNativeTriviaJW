import React from 'react';
import {View,ImageBackground, StyleSheet} from 'react-native';
import BtnPlay from './BtnPlay'
import BtnHelp from './BtnHelp'
import GameTitle from './GameTitle'

const HomeScreen = ({navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/img/background.jpg')} 
            style={styles.backgroundImage}>
            <View style={styles.ViewTop}>
                <GameTitle/>
            </View>
            <BtnPlay onPress={()=>{navigation.navigate('Category')}}/>
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
        height:'72%',
        alignItems:'center',
        justifyContent:'center'
    },
    
})
export default HomeScreen;