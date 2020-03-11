import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import fonts from '../../../config/fonts'
import color from '../../../config/color'

const QuizCategory = ({category}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>{category}</Text>
        </View>
    )
}
QuizCategory.propTypes = {
    category: PropTypes.string.isRequired
}
export default QuizCategory

const styles = StyleSheet.create({
    categoryText:{
        fontFamily:fonts.CIRCULARSTD.BOOK,
        color:color.FONTGREY,
        fontSize:11
    },
    container:{
        alignSelf:'center'
    }
})
