import React, { Component } from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import QuizContainer from './QuizContainer'
import HintContainer from './HintContainer'
import { Player } from '@react-native-community/audio-toolkit';

import {Button} from '../../components/'

const questionsDB = {
    "id":0,
    "preguntas": [
        {
            "id":0,
            "pregunta":"¿Cuál fue uno de los otros nombres que recibió Gedeón?",
            "alternativas":[
                {"id":0,"alternativa":"JeruBaal","resultado":true},
                {"id":1,"alternativa":"Al-Gedeón","resultado":false},
                {"id":2,"alternativa":"Abí-ézer","resultado":false},
                {"id":3,"alternativa":"Jerubésot","resultado":false}
            ],
            "complete":false,
            "indicio":"Una noche Jehová puso a prueba a Gedeón al mandarle que derruyera el altar del dios de su padre."},
        {
            "id":1,
            "pregunta":"¿Cuál es el nombre de Dios?",
            "alternativas":[
                {"id":0,"alternativa":"Jehová","resultado":true},
                {"id":2,"alternativa":"Jesús","resultado":false},
                {"id":3,"alternativa":"Yaji","resultado":false},
                {"id":4,"alternativa":"YHJW","resultado":false}
            ],
            "complete":false,
            "indicio":"Aparece en la Biblia más de 7.000 veces"
        }
    ]
}
const categoryDB = {"id":0,"nombre":"Personajes Biblicos","created_at":"2019-03-09 12:29:00","updated_at":"2019-03-09 12:29:00"}

class QuizScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            quizzes:questionsDB,
            idQuiz:0,
            category:categoryDB,
            timeout:false,
            nextQuestion:false,
            successQuestion:null
        }
        this.OnPressAlternative=this.OnPressAlternative.bind(this)
        this.OnTimeOut=this.OnTimeOut.bind(this)
        this.onPressNextQuestion=this.onPressNextQuestion.bind(this)
    }

    componentDidMount(){
        this.startMusicBackground();
        this.startSoundEffect('next_question.mp3')
    }

    async startMusicBackground(){
        var p = new Player("bensound_summer.mp3");
            p.looping=true
            p.volume=0.7
        await p.prepare((err)=>{
            if(err) console.log("START_MUSIC_ERROR",err);
        })
        p.play()
    }

    async startSoundEffect(source,volume=1){
        var p = new Player(source);
            p.volume=volume;
        await p.prepare((err)=>{
            if(err) console.log("START_SOUND_EFFECT_ERROR",err);
        })
        p.play()
    }
    /* Cuando presionamos el boton siguiente */
    onPressNextQuestion(){
        const {idQuiz} = this.state
        this.startSoundEffect('next_question.mp3')
        this.setState({idQuiz:(idQuiz+1),timeout:false,successQuestion:null,nextQuestion:false})
    }
    /* Poner un nuevo array de alternativas */
    setNewArrAlternativas(arr){
        const {quizzes,idQuiz} = this.state
        quizzes.preguntas[idQuiz].alternativas=arr;
        return quizzes;
    }
    /* Cuando el tiempo se acaba */
    OnTimeOut(){
        const quizzes = this.setNewArrAlternativas([])
        const newQuizzes = quizzes;
        this.setState({quizzes:newQuizzes,timeout:true,nextQuestion:true})
    }
    /* Cuando presionamos una alternativa */
    OnPressAlternative(id){
        const {quizzes,idQuiz} = this.state
        const quiz = quizzes.preguntas[idQuiz];
        const newAlternatives = quiz.alternativas.filter((alternativa)=>(alternativa.id===id));
        const newQuizzes = this.setNewArrAlternativas(newAlternatives);
        switch (newAlternatives[0].resultado) {
            case true:
                this.startSoundEffect("success_alternative.mp3");
                break;
            default:
                this.startSoundEffect("error_alternative.mp3");
                break;
        }
        this.setState({quizzes:newQuizzes,nextQuestion:true,successQuestion:newAlternatives[0].resultado})
    }
    render(){
        const {category,quizzes,idQuiz,nextQuestion,timeout,successQuestion} = this.state
        const quiz = quizzes.preguntas[idQuiz]
        return (
            <ImageBackground
                source={require('../../assets/img/background.jpg')} 
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    <QuizContainer 
                        category={category.nombre} 
                        quiz={quiz}
                        OnTimeOut={this.OnTimeOut} 
                        nextQuestion={nextQuestion}
                        timeout={timeout}
                        successQuestion={successQuestion}
                        OnPressAlternative={this.OnPressAlternative} />
                    {nextQuestion && <Button title="SIGUIENTE" style={{marginTop:20}} fontSize={14} onPress={this.onPressNextQuestion}/> }
                </View>
                <HintContainer indicio={quiz.indicio}/>
            </ImageBackground>
        )
    }
}

export default QuizScreen

const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        height:'100%'
    },
    container:{
        paddingHorizontal:15,
        height:'100%'
    },
})
