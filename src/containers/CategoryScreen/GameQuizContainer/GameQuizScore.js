import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLOR from '../../../config/color'
import LinearGradient from 'react-native-linear-gradient';


const GameQuizScore = () => {
    return (
        <LinearGradient colors={[COLOR.GRADIENTLEFT, COLOR.GRADIENTRIGHT]} 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={styles.ScoreContainer}>
            <Icon name="redeem" color={COLOR.WHITE} size={15}/>
            <Text style={styles.ScoreText}>150</Text>
        </LinearGradient>
    )
}

export default GameQuizScore

const styles = StyleSheet.create({
    ScoreContainer:{
        flexDirection:'row',
        position:'absolute',
        right:15,
        top:15,
        paddingHorizontal:15,
        borderRadius:10,
        paddingVertical:4,
        backgroundColor:'green',
    },
    ScoreText:{
        fontFamily:'CircularStd-Bold',
        fontSize:12,
        marginLeft:7,
        color:COLOR.WHITE
    }
})
