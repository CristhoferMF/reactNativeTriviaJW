import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import COLOR from '../../config/color'

const BtnOrder = () => {
    return (
        <TouchableOpacity onPress={()=>{}} activeOpacity={0.8}>
            <View style={styles.BtnOrder}>
                <Text style={styles.BtnOrderText}>Fecha de Actualización</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    BtnOrder:{
        backgroundColor:COLOR.PRIMARYTRANSPARENCY(0.8),
        alignSelf:'flex-end',
        paddingHorizontal:15,
        paddingVertical:7,
        marginTop:10,
        marginBottom:5,
        borderRadius:5,
        elevation:1
    },
    BtnOrderText:{
        color:COLOR.FONTLIGHT,
        fontFamily:'CircularStd-Book'
    }
})
export default BtnOrder


