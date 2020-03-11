import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import GameQuizTitle from './GameQuizTitle'
import GameQuizAutor from './GameQuizAutor'
import GameQuizCount from './GameQuizCount'
import GameQuizDate from './GameQuizDate'
import GameQuizScore from './GameQuizScore'
import COLOR from '../../../config/color'

const GameQuizContainer = () => {
    return (
        <TouchableOpacity onPress={()=>{}} activeOpacity={0.9}>
        <View style={styles.container}>
            <GameQuizTitle/>
            <GameQuizAutor/>
            <GameQuizCount/>
            <GameQuizDate/>
            <GameQuizScore/>
        </View>
        </TouchableOpacity>
    )
}

export default GameQuizContainer

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLOR.WHITE,
        marginBottom:10,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        elevation:1
    }
})
