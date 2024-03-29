import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import COLOR from '../../../config/color'
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'


const GameQuizDownload = ({downloaded,toUpdated}) => {
    return (
        <LinearGradient colors={(downloaded) ? ['#08AC14','#08AC14'] : ['red', 'purple'] } 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={styles.ScoreContainer}>
            <Icon name={(downloaded && !toUpdated) ? "md-checkmark" : "md-cloud-download"} color={COLOR.WHITE} size={hp('2.4%')}/> 
        </LinearGradient>
    )
}

export default GameQuizDownload

const styles = StyleSheet.create({
    ScoreContainer:{
        flexDirection:'row',
        position:'absolute',
        right:15,
        top:15,
        paddingHorizontal:15,
        borderRadius:10,
        paddingVertical:4,
        backgroundColor:'green',
    }
})
