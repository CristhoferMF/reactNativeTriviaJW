import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../config/fonts'
import COLOR from '../../../config/color'
import ICON from 'react-native-vector-icons/MaterialIcons'

const GameQuizCount = () => {
    return (
        <View style={styles.container}>
            <ICON name="help" size={15} color={COLOR.FONTGREY} style={styles.icon}/>
            <Text style={styles.count}>4 / 10</Text>
        </View>
    )
}

export default GameQuizCount

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    icon:{
        paddingRight:10
    },
    count:{
        fontFamily:FONTS.CIRCULARSTD.BOOK
    }
})
