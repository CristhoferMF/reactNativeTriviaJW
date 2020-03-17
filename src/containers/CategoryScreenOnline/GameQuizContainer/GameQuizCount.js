import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../config/color'

const GameQuizCount = ({cantidad}) => {
    return (
        <View style={styles.container}>
            <Icon name="help" size={16} color={COLOR.FONTGREY} />
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
        fontSize:12,
        marginTop:2,
        marginLeft:7,
        letterSpacing:0.2
    }
})