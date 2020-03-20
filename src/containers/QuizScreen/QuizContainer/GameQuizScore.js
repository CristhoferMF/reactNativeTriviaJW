import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLOR from '../../../config/color'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

class GameQuizScore extends Component {
    handleTextRef = ref => this.text = ref;

    componentDidUpdate(prevProps){
        if(this.props.score !== prevProps.score){
            this.text.shake()
        }
    }

    render(){
        const {score} = this.props
        return (
            <Animatable.View ref={this.handleTextRef}>
                <LinearGradient colors={[COLOR.GRADIENTLEFT, COLOR.GRADIENTRIGHT]} 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                style={styles.ScoreContainer}>
                    <Icon name="redeem" color={COLOR.WHITE} size={16}/>
                    <Text style={styles.ScoreText}>{score}</Text>
                </LinearGradient>
            </Animatable.View>
        )
    }
}

export default GameQuizScore

const styles = StyleSheet.create({
    ScoreContainer:{
        flexDirection:'row',
        paddingHorizontal:15,
        borderRadius:10,
        paddingVertical:4,
        alignSelf:'center'
    },
    ScoreText:{
        fontFamily:'CircularStd-Bold',
        fontSize:14,
        marginLeft:7,
        color:COLOR.WHITE
    }
})
