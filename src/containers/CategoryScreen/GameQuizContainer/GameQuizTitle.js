import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameQuizTitle = () => {
    return (
        <View>
            <Text style={styles.title}>Personajes Biblicos</Text>
        </View>
    )
}

export default GameQuizTitle

const styles = StyleSheet.create({
    title:{
        fontFamily:'CircularStd-Black',
        fontSize:18
    }
})
