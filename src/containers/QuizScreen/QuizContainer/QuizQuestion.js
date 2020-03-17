import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import fonts from '../../../config/fonts'

const QuizQuestion = ({pregunta}) => {
    //console.log("PREGUNTA",pregunta)
    return (
        <View style={styles.container}>
            <Text style={styles.question}>{pregunta}</Text>
        </View>
    )
}
QuizQuestion.propTypes = {
    pregunta:PropTypes.string.isRequired
}
export default QuizQuestion

const styles = StyleSheet.create({
    question:{
        fontFamily:fonts.CIRCULARSTD.BLACK,
        textAlign:'center',
        fontSize:18,
        letterSpacing:-0.3

    },
    container:{
        marginBottom:20
    }
})
 