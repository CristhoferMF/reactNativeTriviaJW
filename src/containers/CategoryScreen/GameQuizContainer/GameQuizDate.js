import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../config/color'
import Icon from 'react-native-vector-icons/MaterialIcons';


const GameQuizDate = () => {
    return (
        <View style={styles.container}>
            <Icon name="timelapse" size={16} color={COLOR.FONTGREY} />
            <Text style={styles.date}>20/Ago/2020 14:10</Text>
        </View>
    )
}

export default GameQuizDate

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    date:{
        fontFamily:'CircularStd-Book',
        fontSize:12,
        marginTop:2,
        marginLeft:7,
        color:COLOR.FONTGREY,
        letterSpacing:0.3
    }
})
