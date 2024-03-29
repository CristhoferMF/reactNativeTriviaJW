import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuizAlternative from './QuizAlternative'
import { copyJson,shuffle } from '../../../../helpers'

class QuizAlternativesContainer extends Component{

    constructor(props){
        super(props)
        this.state={
            alternativas:[],
        }
        this.updateAlternative= this.updateAlternative.bind(this)
    }
    componentDidMount(){
        this.setIsPressAlternativas();
    }
    /* Agregar la propiedad isPress a cada alternativa */
    setIsPressAlternativas(){
        const {alternativas} = this.props
        let arrAlternativas= []
        alternativas.map((alternativa)=>{
            alternativa.isPress=false
            arrAlternativas.push(alternativa)
        })

        this.setState({alternativas:shuffle(arrAlternativas)})
    }
    componentDidUpdate(prevProps){
        const {isNextQuestion} = this.props
        //console.log(isNextQuestion);
        if (isNextQuestion !== prevProps.isNextQuestion) {
            if(!isNextQuestion) this.setIsPressAlternativas()
        }
    }
    async updateAlternative(i){
        const {alternativas} = this.state
        const {setNextQuestion} = this.props
        let arrAlternativas = copyJson(alternativas)

        const alternativa = arrAlternativas[i];

        alternativa.isPress=true
        if(alternativa.resultado){
            /* Alternativa Correcta */
            setNextQuestion(true);
        }else{
            /* Alternativa Incorrecta */
            arrAlternativas.map((alternativa) => {
                if (alternativa.resultado) alternativa.isPress=true;
            })
            setNextQuestion(false);
        }
        /* asignar alternativa presionada */
        this.setState({alternativas:arrAlternativas})
    }
    render(){
        const {isNextQuestion} = this.props
        const {alternativas} = this.state
        //console.log("ALTERNATIVAS",alternativas)
        return (
            <View style={styles.container}>
                {alternativas.map((alternativa,i)=>{
                    return (<QuizAlternative alternativa={alternativa} onPress={this.updateAlternative} key={i} index={i} isNextQuestion={isNextQuestion}/>)
                })}
                {this.props.componentResultado()}
            </View>
        )
    }
}

export default QuizAlternativesContainer

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    }
})
