import React from 'react';
import PropTypes from 'prop-types'
import {Text,View,TouchableOpacity ,StyleSheet} from 'react-native';
import sound from '../../config/sound'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Button = ({title,onPress,style,fontSize,isSound}) => {
    return (
            <TouchableOpacity 
            onPress={()=> {
                isSound && sound.startSoundEffect("button_press.mp3",0.7);
                onPress()
            }} 
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
    fontSize:PropTypes.number,
    isSound:PropTypes.bool
}
Button.defaultProps = {
    style:{},
    fontSize:15,
    isSound:true
}
const styles = StyleSheet.create({
    Btn:{
        width:wp('70%'),
        maxWidth:250,
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