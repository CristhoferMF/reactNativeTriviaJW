import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../config/fonts'
import COLOR from '../../../config/color'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Hint = ({indicio}) => {
    return (
        <View style={styles.HintTextContainer}>
            <Text style={styles.titleIndicio}>INDICIO</Text>
            <Text style={styles.Indicio}>{indicio}</Text>
        </View>
    )
}

Hint.propTypes = {
    indicio:PropTypes.string.isRequired
}
export default Hint

const styles = StyleSheet.create({
    HintTextContainer:{
        flex:1,
        paddingLeft:10
    },
    titleIndicio:{
        fontFamily:FONTS.CIRCULARSTD.MEDIUM,
        color:COLOR.WHITE,
        fontSize:FONTS.SIZE.XS,
        letterSpacing:0.3,
        marginBottom:2
    },
    Indicio:{
        color:COLOR.WHITE,
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        fontSize:FONTS.SIZE.XS,
        letterSpacing:0.2
    }
})
