import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLOR from '../../../config/color'
import FONTS from '../../../config/fonts'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import GameQuizCount from './GameQuizCount'
import GameQuizScore from './GameQuizScore'
import QuizTimer from './QuizTimer'
import QuizCategory from './QuizCategory'
import QuizQuestion from './QuizQuestion'
import QuizAlternativesContainer from './QuizAlternativesContainer'

class QuizContainer extends Component {
    
    constructor(props){
        super(props)
        this.componentResultado=this.componentResultado.bind(this)
        this.renderResultadoswitch=this.renderResultadoswitch.bind(this)
    }
    
    renderResultadoswitch(){
        switch (this.props.successQuestion) {
            case true:
                return {icon:'check',color:"#08AC14",text:"RESPUESTA CORRECTA"}
            case false:
                return {icon:'close',color:"#EF3838",text:"RESPUESTA INCORRECTA"}
            default:
                return {}
        }
    }
    componentResultado(){
        if(this.props.successQuestion!=null)
            return (
                <View style={styles.containerTimeOut}>
                    <Icon name={this.renderResultadoswitch().icon} color={this.renderResultadoswitch().color} size={40} />
                    <Text style={[styles.textTimeOut,{color:this.renderResultadoswitch().color}]}>{this.renderResultadoswitch().text}</Text>
                </View>
            );
        return null;
    }
    render(){
        const {category,quiz,OnPressAlternative,OnTimeOut,nextQuestion,timeout,successQuestion} = this.props
        
        return (
            <View style={styles.container}>
                <View style={styles.topInfo}>
                    <View style={{flex:1}}>
                        <GameQuizCount />
                    </View>
                    <View style={{flex:1}}>
                        <GameQuizScore />
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <QuizTimer OnTimeOut={OnTimeOut} nextQuestion={nextQuestion}/>
                <QuizCategory category={category}/>
                <QuizQuestion pregunta={quiz.pregunta}/>
                {timeout && 
                        <View style={styles.containerTimeOut}>
                            <Icon name="timer" color={COLOR.FONTGREY} size={40} />
                            <Text style={styles.textTimeOut}>TIEMPO AGOTADO</Text>
                        </View>
                    }
                <QuizAlternativesContainer 
                    nextQuestion={nextQuestion} 
                    alternativas={quiz.alternativas} 
                    OnPressAlternative={OnPressAlternative}
                    componentResultado={this.componentResultado}
                    />
            </View>
        )
    }
}
export default QuizContainer

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLOR.WHITE,
        borderRadius:10,
        elevation:2,
        marginTop:20,
        paddingHorizontal:15
    },
    topInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:20
    },
    containerTimeOut:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textTimeOut:{
        fontFamily:FONTS.CIRCULARSTD.BOLD,
        color:COLOR.FONTGREY,
        letterSpacing:0.3
    }
})
