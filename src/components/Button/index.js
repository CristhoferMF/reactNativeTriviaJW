import React from 'react';
import PropTypes from 'prop-types'
import {Text,View,TouchableOpacity ,StyleSheet} from 'react-native';

const Button = ({title,onPress,style,fontSize}) => {
    return (
            <TouchableOpacity 
            onPress={onPress} 
            activeOpacity={0.9}>
                <View style={[styles.Btn,style]}>
                    <Text letterSpacing={2} style={[styles.BtnText,{fontSize}]}>{title}</Text>
                </View>
            </TouchableOpacity  >
    )
}

Button.propTypes = {
    title:PropTypes.string.isRequired,
    onPress:PropTypes.func.isRequired,
    style:PropTypes.object,
    fontSize:PropTypes.number
}
Button.defaultProps = {
    style:{},
    fontSize:15
}
const styles = StyleSheet.create({
    Btn:{
        width:'70%',
        alignSelf:'center',
        backgroundColor:'white',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:50,
        elevation:3,
    },
    BtnText:{
        letterSpacing:2,
        fontFamily:'CircularStd-Black'
    }
})
export default Button;