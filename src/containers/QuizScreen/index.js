import React, { Component } from 'react'
import { StyleSheet, Text, View,ImageBackground, Alert } from 'react-native'
import QuizContainer from './QuizContainer'
import HintContainer from './HintContainer'
import getRealm from '../../schemas/realm'
import {shuffle} from '../../helpers'
import {Button} from '../../components/'
import Sound from 'react-native-sound';
import { ScrollView } from 'react-native-gesture-handler'
import { widthPercentageToDP } from 'react-native-responsive-screen'

class QuizScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            quizzes:[],
            nQuiz:0,
            category:{},
            isTimeout:false,
            isNextQuestion:false,
            isSuccess:null,
            score:0,
            completed:false,
        }
        this.setNextQuestion=this.setNextQuestion.bind(this)
        this.OnTimeOut=this.OnTimeOut.bind(this)
        this.onPressNextQuestion=this.onPressNextQuestion.bind(this)
    }

    componentDidMount(){
        this._startSoundEffect('next_question.mp3')
        this.getQuizzesRealm()
    }
    async getQuizzesRealm(){
        const { id } = this.props.route.params;
        const realm = await getRealm()
        let categoryRealm = realm.objectForPrimaryKey('Category',id);
        let quizzes = [];
        categoryRealm.preguntas.map((pregunta)=>{
            quizzes.push(pregunta)
        })
        let score = categoryRealm.preguntas.filtered('completed = true').sum('puntuacion')
        let category = {
            nombre:categoryRealm.nombre,
            count:quizzes.length
        }
        shuffle(quizzes)
        quizzes.sort(function(x, y) {
            return (x.completed === y.completed)? 0 : x.completed? 1 : -1;
        })
        this.setState({category,quizzes,score})
    }
    _startSoundEffect(source,volume=1){
        const sound = new Sound(source,Sound.MAIN_BUNDLE,(error) => {
            if(error) throw new Error(error);
            sound.setVolume(volume);
            sound.setNumberOfLoops(0);
            sound.play();
        })
    }
    /* Cuando presionamos el boton siguiente */
    onPressNextQuestion(){
        this._startSoundEffect('next_question.mp3')

        const {nQuiz,quizzes} = this.state
        let _nQuiz = nQuiz;
        const quizActive = quizzes[nQuiz+1];
        
        _nQuiz = (quizActive) ? (_nQuiz+1) : 0;
     
        this.setState({nQuiz:_nQuiz,isTimeout:false,isSuccess:null,isNextQuestion:false})
    }

    /* Cuando el tiempo se acaba */
    OnTimeOut(){
        this._startSoundEffect('timer_end_sound.mp3')
        this.setState({isTimeout:true,isNextQuestion:true})
    }
    /* Acabo las preguntas */
    async setNextQuestion(isSuccess){
    
        let {score,quizzes,nQuiz}=this.state;
        const quiz = quizzes[nQuiz];
        const nextQuiz = quizzes[nQuiz+1];
      
        if(isSuccess){
            this._startSoundEffect('success_alternative.mp3')
            if(!quiz.completed){
                try {
                    const realm = await getRealm();
                    realm.write(()=>{
                        const Quiz = realm.objects('Quiz')
                        const quizFound = Quiz.find( _quiz => JSON.stringify(_quiz)===JSON.stringify(quiz))
                        quizFound.completed = true;
                    })
                } catch (error) {
                    console.log("ERROR_COMPLETED",error)
                }
                score = score + quiz.puntuacion
            }
        }else{
            this._startSoundEffect('error_alternative.mp3')
        }
        this.setState({isNextQuestion:true,isSuccess,score})

        /* Validar si es la última pregunta */
        if(!nextQuiz){
            this.setState({completed:true})
            Alert.alert(
                'Categoría completada',
                '¿Desea volver a jugar esta categoría?',
                [
                  {
                    text: 'No',
                    onPress: () => {
                        this.props.navigation.goBack()
                    },
                    style: 'cancel',
                  },
                  {text: 'Si', onPress: () => {
                    this.onPressNextQuestion();
                    this.setState({completed:false})
                  }},
                ],
                {cancelable: false},
              );
        }

    }
    render(){
        const {category,quizzes,isNextQuestion,isTimeout,isSuccess,nQuiz,score,completed} = this.state
        
        if(category.nombre) {
            const quiz = quizzes[nQuiz]
            
        return (
            <ImageBackground
                source={require('../../assets/img/background.jpg')} 
                style={styles.backgroundImage}>
                { quiz ?
                <ScrollView style={styles.container} contentContainerStyle={{justifyContent:'center',flexGrow:1}} >
                    <QuizContainer 
                        category={category}
                        score={score}
                        nQuiz={nQuiz}
                        quiz={quiz}
                        OnTimeOut={this.OnTimeOut} 
                        isNextQuestion={isNextQuestion}
                        isTimeout={isTimeout}
                        isSuccess={isSuccess}
                        setNextQuestion={this.setNextQuestion} />
                    {!completed && isNextQuestion && <Button title="SIGUIENTE" style={{marginTop:20}}  isSound={false} onPress={this.onPressNextQuestion}/> }
                    <HintContainer indicio={quiz.indicio}/>
                </ScrollView> :
                <View style={styles.container}>
                    <Text>Se acaba</Text>    
                </View>}
            </ImageBackground>
        )}
        if(!category.nombre) return null;
        
    }
}

export default QuizScreen

const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        height:'100%'
    },
    container:{
        paddingHorizontal:widthPercentageToDP('5.5%'),
        flex:1
    },
})
