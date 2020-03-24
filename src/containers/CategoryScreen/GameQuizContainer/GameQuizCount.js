import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../config/color'
import FONTS from '../../../config/fonts';

const GameQuizCount = ({nCompleted,nTotal}) => {
    return (
        <View style={styles.container}>
            <Icon name="help" size={FONTS.SIZE.S} color={COLOR.FONTGREY} />
            <Text style={styles.count}>{nCompleted} / {nTotal}</Text>
        </View>
    )
}

export default GameQuizCount

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:2
    },
    count:{
        fontFamily:'CircularStd-Book',
        fontSize:FONTS.SIZE.XS,
        marginLeft:7,
        letterSpacing:0.2
    }
})