import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../config/fonts'
import COLOR from '../../../config/color'
import ICON from 'react-native-vector-icons/MaterialIcons'

const GameQuizCompleted = ({completed,puntuacion}) => {
    return (
        <View style={styles.container}>
            <ICON name={completed?'check':'bookmark'} size={15} color={completed?'#08AC14':COLOR.FONTGREY} style={styles.icon}/>
            <Text style={[styles.completed,{
                color:completed?'#08AC14':COLOR.FONTBLACK
            }]}>{completed?'Completado':(puntuacion+" ptos.")}</Text>
        </View>
    )
}

export default GameQuizCompleted

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    icon:{
        paddingRight:10
    },
    completed:{
        fontFamily:FONTS.CIRCULARSTD.BOOK,
    }
})
