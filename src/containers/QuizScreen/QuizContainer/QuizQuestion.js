import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../config/fonts'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'

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
        fontFamily:FONTS.CIRCULARSTD.BLACK,
        textAlign:'center',
        fontSize:FONTS.SIZE.XL,
        letterSpacing:-0.3

    },
    container:{
        marginBottom:hp('3%')
    }
})
 