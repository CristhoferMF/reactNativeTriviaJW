import React, { useState, Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class GameTitle extends Component {
    constructor(props){
        super(props)
        this.state={
            animation:"zoomInUp",
            iterationCount:1
        }
    }
    setAnimation(animation){
        this.setState({animation})
    }
    setIterationCount(iterationCount){
        this.setState({iterationCount})
    }
    handleViewRef = ref => this.view = ref;

    render(){
        const {animation,iterationCount} = this.state
        return (
            <Animatable.View ref={this.handleViewRef} animation={animation} easing="ease-in" iterationCount={iterationCount}
            onAnimationEnd={async ()=>{
                this.view.shake().then((data)=>{
                    this.setIterationCount('infinite')
                    this.view.pulse()
                })
            }}>
                <Text style={styles.GameTitle}>TRIVIA{"\n"}JW</Text>
            </Animatable.View>
        )
    }
}

const styles = StyleSheet.create({
    GameTitle:{
        color:'white',
        fontSize:hp('15%'),
        lineHeight:hp('10%'),
        paddingTop:20,
        textAlign:'center',
        fontFamily:'FT-ScandinavianTitan-Black',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 4, height: 3},
        textShadowRadius: 10,
        transform: [{ rotate: '-5deg'}]
    }
})

export default GameTitle


