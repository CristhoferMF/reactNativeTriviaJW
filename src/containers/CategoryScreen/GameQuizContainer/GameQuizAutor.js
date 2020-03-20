import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../config/color'
import FONTS from '../../../config/fonts'

const GameQuizAutor = ({autor}) => {
    return (
        <View style={styles.container}>
            <Icon name="person" size={FONTS.SIZE.S} color={COLOR.FONTGREY} />
            <Text style={styles.autor}>{autor}</Text>
        </View>
    )
}
GameQuizAutor.propTypes = {
    autor: PropTypes.string.isRequired
}
export default GameQuizAutor

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:2,
    },
    autor:{
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        fontSize:FONTS.SIZE.XS,
        marginLeft:7,
        letterSpacing:0.2
    }
})
