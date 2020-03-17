import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../config/color'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatTime} from '../../../helpers/'

const GameQuizDate = ({date}) => {
    const dateRender = () =>{
        if(date.created_at.getTime() == date.updated_at.getTime()) return formatTime(date.created_at);
        if(date.created_at.getTime() != date.updated_at.getTime()) return formatTime(date.updated_at);
    }
    return (
        <View style={styles.container}>
            <Icon name="timelapse" size={16} color={COLOR.FONTGREY} />
            <Text style={styles.date}>{dateRender()}</Text>
        </View>
    )
}
GameQuizDate.propTypes = {
    date:PropTypes.shape({
        created_at:PropTypes.instanceOf(Date).isRequired,
        updated_at:PropTypes.instanceOf(Date).isRequired
    }).isRequired
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
