import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import color from '../../../config/color'
import Hint from './Hint'

const HintContainer = ({indicio}) => {
    return (
        <View style={styles.HintContainer}>
            <View style={{justifyContent:'center'}}>
                <Icon name="info" color={color.WHITE} size={16}/>
            </View>
            <Hint indicio={indicio}/>
        </View>
    )
}

export default HintContainer

const styles = StyleSheet.create({
    HintContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:15,
        marginHorizontal:15,
        backgroundColor:color.PRIMARYTRANSPARENCY(0.9),
        paddingHorizontal:10,
        borderRadius:20,
        paddingVertical:10,
        elevation:1
    }
})
