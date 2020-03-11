import React from 'react';
import {Text,View,TouchableOpacity ,StyleSheet} from 'react-native';

const BtnHelp = () => {
    return (
            <TouchableOpacity 
            onPress={()=>{}} 
            activeOpacity={0.8}>
            <View style={styles.BtnHelp}>
                <Text letterSpacing={2} style={styles.BtnHelpText}>¿Cómo jugar?</Text>
            </View>
            </TouchableOpacity  >
    )
}

const styles = StyleSheet.create({
    BtnHelp:{
        alignSelf:'center',
        backgroundColor:'rgba(45,5,105,0.85)',
        paddingVertical:12,
        paddingHorizontal:20,
        alignItems:'center',
        borderRadius:50,
        marginTop:15,
        elevation:1
    },
    BtnHelpText:{
        fontSize:14,
        letterSpacing:2,
        color:'white',
        fontFamily:'CircularStd-Book'
    }
})
export default BtnHelp;