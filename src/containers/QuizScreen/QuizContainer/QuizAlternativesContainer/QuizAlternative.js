import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FONTS from '../../../../config/fonts'
import COLOR from '../../../../config/color'

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
        
            if(!isNextQuestion){
                return (<View style={styles.alternative}>
                            <Text style={styles.alternativeText}>{texto}</Text>
                        </View>)
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
        fontSize:14
    },
    alternative:{
        borderWidth:0.5,
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:15,
        marginBottom:10,
        borderRadius:20,
    }
})
