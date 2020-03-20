import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../config/color'
import FONTS from '../../../config/fonts'

const GameQuizCount = ({cantidad}) => {
    return (
        <View style={styles.container}>
            <Icon name="help" size={FONTS.SIZE.S} color={COLOR.FONTGREY} />
            <Text style={styles.count}>{cantidad} Preguntas</Text>
        </View>
    )
}
GameQuizCount.propTypes = {
    cantidad:PropTypes.number.isRequired
}
export default GameQuizCount

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    count:{
        fontFamily:'CircularStd-Book',
        fontSize:FONTS.SIZE.XS,
        marginTop:2,
        marginLeft:7,
        letterSpacing:0.2
    }
})