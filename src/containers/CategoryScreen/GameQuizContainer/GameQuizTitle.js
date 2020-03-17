import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

const GameQuizTitle = ({title}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
GameQuizTitle.propTypes = {
    title:PropTypes.string.isRequired
}
export default GameQuizTitle

const styles = StyleSheet.create({
    title:{
        fontFamily:'CircularStd-Black',
        fontSize:18
    }
})
