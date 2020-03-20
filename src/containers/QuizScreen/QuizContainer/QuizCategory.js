import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../config/fonts'
import color from '../../../config/color'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'

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
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        color:color.FONTGREY,
        fontSize:FONTS.SIZE.XS
    },
    container:{
        alignSelf:'center'
    }
})
