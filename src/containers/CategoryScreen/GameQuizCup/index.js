import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FONTS from '../../../config/fonts'
import color from '../../../config/color'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

const GameQuizCup = () => {
    return (
        <View style={styles.container}>
            <Animatable.Image 
            animation="pulse" iterationCount="infinite" easing="ease-in" duration={500}
            style={styles.image} resizeMode='contain' source={require('../../../assets/img/cup.png')} />
            <View style={styles.viewText}>
                <Text style={styles.text}>No hay categorías decargadas</Text>
                <Text style={styles.text}>Intenta presionando el botón de abajo</Text>
            </View>
        </View>
    )
}

export default GameQuizCup

const styles = StyleSheet.create({
    text:{
        fontFamily:FONTS.CIRCULARSTD.BOLD,
        letterSpacing:-0.5,
        textAlign:'center',
        color:color.WHITE,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 10,
        fontSize:hp('2.7%')
    },
    image:{
        marginBottom:'3%',
        height:'70%',
        width:wp('100%'),
    },
    viewText:{
        paddingTop:'0.5%',
    },
    container:{
        height:hp('52%'),
        justifyContent:'center'
    }
})
