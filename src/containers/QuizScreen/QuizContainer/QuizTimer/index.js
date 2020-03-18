import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../../config/fonts'
import CircularTimer from 'react-native-circular-timer';
import COLOR from '../../../../config/color';

const SECONDS = 30; 
export default class QuizTimer extends Component {
    constructor(props){
        super(props);
        this.state={
            seconds:SECONDS
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.isNextQuestion !== prevProps.isNextQuestion) {
            if(this.props.isNextQuestion){
                this.setState({seconds:0},()=>{
                    this._timerRef.restart();
                })
            }else{
                this.setState({seconds:SECONDS},()=>{
                    this._timerRef.restart();
                })
            }
          }
    }
    render(){
        const {OnTimeOut} = this.props
        const {seconds} = this.state
        //console.log("1");
        return (
            <View style={styles.timer}>
                <CircularTimer
                    ref={refs => (this._timerRef = refs)}
                    onTimeElapsed={() => {
                        OnTimeOut();
                    }}
                    seconds={seconds}
                    radius={30}
                    borderWidth={3}
                    borderColor={COLOR.FONTGREY}
                    borderBackgroundColor={'#4189F4'}
                    textStyle={styles.timerText}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    timer:{
        alignSelf:'center',
        marginTop:20,
        marginBottom:25
    },
    timerText:{
        fontFamily:FONTS.CIRCULARSTD.BOLD,
        fontSize:20
    }
})
