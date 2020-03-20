import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLOR from '../../../config/color'
import LinearGradient from 'react-native-linear-gradient';


const GameQuizScore = ({score,style,textStyle,iconSize,isAnimated}) => {
    
    return (
        <LinearGradient colors={[COLOR.GRADIENTLEFT, COLOR.GRADIENTRIGHT]} 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={[styles.ScoreContainer,style]}>
            <Icon name="redeem" color={COLOR.WHITE} size={iconSize}/>
            <Text style={[styles.ScoreText,textStyle]}>{score}</Text>
        </LinearGradient>
    )
}

GameQuizScore.propTypes = {
    score:PropTypes.number.isRequired,
    textStyle:PropTypes.object,
    style:PropTypes.object,
    iconSize:PropTypes.number
}
GameQuizScore.defaultProps = {
    textStyle:{
        fontSize:12,
        marginLeft:7
    },
    style:{
        position:'absolute',
        right:15,
        top:15,
    },
    iconSize:15
}

export default GameQuizScore

const styles = StyleSheet.create({
    ScoreContainer:{
        flexDirection:'row',
        paddingHorizontal:15,
        borderRadius:10,
        paddingVertical:4,
    },
    ScoreText:{
        fontFamily:'CircularStd-Bold',
        color:COLOR.WHITE
    }
})
