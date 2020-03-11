import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameTitle = () => {
    return (
        <Text style={styles.GameTitle}>TRIVIA{"\n"}JW</Text>
    )
}

const styles = StyleSheet.create({
    GameTitle:{
        color:'white',
        fontSize:90,
        lineHeight:60,
        paddingTop:20,
        textAlign:'center',
        fontFamily:'FT-ScandinavianTitan-Black',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 4, height: 3},
        textShadowRadius: 10,
        transform: [{ rotate: '-5deg'}]
    }
})

export default GameTitle


