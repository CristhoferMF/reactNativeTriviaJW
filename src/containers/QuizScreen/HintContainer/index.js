import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import color from '../../../config/color'
import Hint from './Hint'
import * as Animatable from 'react-native-animatable';

class HintContainer extends Component {
    handleViewRef = ref => this.view = ref;

    componentDidUpdate(prevProps){
        if(this.props.indicio !== prevProps.indicio){
            this.view.bounceInUp()
        }
    }

    render(){
        const {indicio} = this.props
        return (
            <Animatable.View animation="bounceInUp" style={styles.HintContainer} ref={this.handleViewRef}>
                <View style={{justifyContent:'center'}}>
                    <Icon name="info" color={color.WHITE} size={16}/>
                </View>
                <Hint indicio={indicio}/>
            </Animatable.View>
        )
}
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
