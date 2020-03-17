import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../config/color'

const GameQuizAutor = ({autor}) => {
    return (
        <View style={styles.container}>
            <Icon name="person" size={16} color={COLOR.FONTGREY} />
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
        flexDirection:'row'
    },
    autor:{
        fontFamily:'CircularStd-Book',
        fontSize:12,
        marginTop:2,
        marginLeft:7,
        letterSpacing:0.2
    }
})
