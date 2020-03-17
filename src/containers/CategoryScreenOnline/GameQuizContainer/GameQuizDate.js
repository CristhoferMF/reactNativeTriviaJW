import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../config/color'
import Icon from 'react-native-vector-icons/Ionicons';


const GameQuizDate = ({date}) => {
    const dateRender = () =>{
        if(date.created_at == date.updated_at) return formatTime(date.created_at);
        if(date.created_at != date.updated_at) return formatTime(date.updated_at);
    }
    const formatTime = (datetime) => {

        const date = new Date(datetime);
        const arrMeses = ["Ene", "Feb","Mar", "Abr", "May", "Jun",
        "Jul", "Ago","Sep", "Oct", "Nov", "Dic"]
        return `${new String("0"+date.getDate()).substr(-2)}/${arrMeses[date.getMonth()]}/${date.getFullYear()} ${date.getUTCHours()}:${date.getMinutes()}`
    }
    return (
        <View>
            <View style={styles.container}>
                <Icon name="md-time" size={16} color={COLOR.FONTGREY} />
                <Text style={styles.date}>{dateRender()}</Text>
            </View>
        </View>
    )
}

export default GameQuizDate

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:2
    },
    date:{
        fontFamily:'CircularStd-Book',
        fontSize:12,
        marginLeft:7,
        color:COLOR.FONTGREY,
        letterSpacing:0.3
    }
})
