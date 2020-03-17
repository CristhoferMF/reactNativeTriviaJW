import React from 'react';
import {Text,View,TouchableOpacity ,StyleSheet} from 'react-native';
import PropTypes from 'prop-types'

const BtnPlay = ({onPress}) => {
    return (
            <TouchableOpacity 
            onPress={onPress} 
            activeOpacity={0.8}>
            <View style={styles.BtnPlay}>
                <Text letterSpacing={2} style={styles.BtnPlayText}>EMPEZAR A JUGAR</Text>
            </View>
            </TouchableOpacity  >
    )
}
BtnPlay.propTypes = {
    onPress:PropTypes.func.isRequired
}
const styles = StyleSheet.create({
    BtnPlay:{
        width:'70%',
        alignSelf:'center',
        backgroundColor:'white',
        paddingVertical:15,
        borderWidth:0.5,
        borderColor:'black',
        alignItems:'center',
        borderRadius:50,
        elevation:3,
    },
    BtnPlayText:{
        fontSize:15,
        letterSpacing:2,
        fontFamily:'CircularStd-Black'
    }
})
export default BtnPlay;