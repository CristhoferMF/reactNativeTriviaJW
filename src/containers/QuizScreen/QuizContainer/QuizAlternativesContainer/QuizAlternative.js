import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FONTS from '../../../../config/fonts'
import COLOR from '../../../../config/color'

export default class QuizAlternative extends Component {
    constructor(props){
        super(props)
        this.onCheckAlternative=this.onCheckAlternative.bind(this)
    }
    onCheckAlternative(){
        const {alternativa,OnPressAlternative} = this.props
        OnPressAlternative(alternativa.id);
        if(alternativa.resultado){
            console.warn("Bien")
        }else{
            console.warn("Mal")
        }
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
        const {alternativa,timeout} = this.props
        const { alternativa: texto,resultado} = alternativa
        if(!timeout){
            return (<View style={styles.alternative}>
                        <Text style={styles.alternativeText}>{texto}</Text>
                    </View>)
        }
        return (
        <View style={[styles.alternative,this.setBackgroundContainer(resultado)]}>
            <Text style={[styles.alternativeText,{color:COLOR.WHITE}]}>
                {texto}
            </Text>
        </View>)
    }
    render(){
        const {timeout} = this.props

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.onCheckAlternative} disabled={timeout}>
                {this.alternativeComponent()}
            </TouchableOpacity>
        )
    }
}
QuizAlternative.propTypes = {
    alternativa:PropTypes.shape({
        id:PropTypes.number.isRequired,
        alternativa:PropTypes.string.isRequired,
        resultado:PropTypes.bool.isRequired
    })
}

const styles = StyleSheet.create({
    alternativeText:{
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        letterSpacing:0.3,
        fontSize:12
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
