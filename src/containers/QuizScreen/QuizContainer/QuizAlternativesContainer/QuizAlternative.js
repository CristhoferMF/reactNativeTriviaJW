import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FONTS from '../../../../config/fonts'
import COLOR from '../../../../config/color'
import * as Animatable from 'react-native-animatable';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class QuizAlternative extends Component {
    constructor(props){
        super(props)
        this._handleOnPress=this._handleOnPress.bind(this)
        this.state={
        }
    }
    _handleOnPress(){
        const {onPress,index} = this.props
        onPress(index)
    }
    setBackgroundContainer(resultado){
        switch (resultado) {
            case true:
                return {
                    backgroundColor:'#08AC14',
                    borderColor:'#079A12',
                }
            case false:
                return {
                    backgroundColor:'#EF3838',
                    borderColor:'#DD3E3E',
                }
        }
    }
    alternativeComponent(){
        const {alternativa,isNextQuestion} = this.props
        const { alternativa: texto,resultado} = alternativa
        const animations = ["bounceInLeft","bounceInRight"];
        var animation_random = animations[Math.floor(Math.random() * animations.length)]
            if(!isNextQuestion){
                return (<Animatable.View animation={animation_random} style={styles.alternative}>
                            <Text style={styles.alternativeText}>{texto}</Text>
                        </Animatable.View>)
            }
            if(alternativa.isPress){
                return (
                    <View style={[styles.alternative,this.setBackgroundContainer(resultado)]}>
                        <Text style={[styles.alternativeText,{color:COLOR.WHITE}]}>
                            {texto}
                        </Text>
                    </View>)
            }
            return null;

    }
    render(){
        const {isNextQuestion} = this.props

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this._handleOnPress} disabled={isNextQuestion}>
                {this.alternativeComponent()}
            </TouchableOpacity>
        )
    }
}
QuizAlternative.propTypes = {
    alternativa:PropTypes.shape({
        alternativa:PropTypes.string.isRequired,
        resultado:PropTypes.bool.isRequired
    })
}

const styles = StyleSheet.create({
    alternativeText:{
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        letterSpacing:0.3,
        fontSize:FONTS.SIZE.XS
    },
    alternative:{
        borderWidth:0.5,
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:15,
        marginBottom:10,
        borderRadius:20,
        width:'100%',
        maxWidth:400,
        alignSelf:'center'
    }
})
