import React, { Component } from 'react'
import { StyleSheet, Text,View, ImageBackground,FlatList } from 'react-native'
import BtnOrder from './BtnOrder'
import GameQuizContainer from './GameQuizContainer/'
import GameQuizCup from './GameQuizCup'
import {Button} from '../../components/'
import getRealm from '../../schemas/realm'
import GameQuizScore from './GameQuizContainer/GameQuizScore';
import * as Animatable from 'react-native-animatable';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import fonts from '../../config/fonts'

class CategoryScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            categories:[],
            isEmpty:false,
            score:0
        }
        this.getCategoriesRealm=this.getCategoriesRealm.bind(this)
        this.navigationScreenQuiz=this.navigationScreenQuiz.bind(this)
    }
    async getCategoriesRealm(){
        const realm = await getRealm();
        const categories = realm.objects('Category');
        this.addSCore(categories);
        this.setState({categories:categories,isEmpty:(categories.length)?false:true})
    }
    addSCore(categories){
        let score = 0
        const fnscore = (category) => {
            const {preguntas} = category
            let score = 0
            preguntas.forEach(pregunta => {
                if(pregunta.completed) score+=pregunta.puntuacion;
            });
            return score;
        }
        categories.map( category => {
            score = score + fnscore(category)
        })
       
        this.setState({score})
    }
    async componentDidMount(){
        const { navigation } = this.props;
        this._focusScreenListener = navigation.addListener('focus', () => {
            this.getCategoriesRealm();
        });
    }
    async componentWillUnmount(){
        this._focusScreenListener();
    }
    navigationScreenQuiz(id){
        this.props.navigation.navigate('Quiz',{id:id})
    }
    render(){
        const {categories,isEmpty,score}= this.state
        return (
            <ImageBackground
                source={require('../../assets/img/background.jpg')} 
                style={styles.backgroundImage}>
                <Text style={styles.categoryTitle}>CATEGORIAS</Text>
                <Animatable.View animation="pulse" iterationCount="infinite" style={{alignSelf:'center',marginTop:10,elevation:3}}>
                    <GameQuizScore score={score} iconSize={fonts.SIZE.XXL} style={{alignSelf:'center'}}
                        textStyle={{fontSize:fonts.SIZE.XXL,marginLeft:10}} />
                </Animatable.View>
                <BtnOrder/>
                {isEmpty && <GameQuizCup/>}
                <FlatList 
                    style={styles.container}
                    data={categories}
                    renderItem={({item}) => (<GameQuizContainer category={item} refreshCategories={this.getCategoriesRealm} navigationScreenQuiz={this.navigationScreenQuiz}/>)}
                    keyExtractor={category => category.id.toString()}
                    />
                <Button title="BUSCAR EN LINEA" onPress={()=>{this.props.navigation.navigate('CategoryOnline')}} style={styles.ButtonOnline}/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        height:'100%',
    },
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingTop:5
    },
    categoryTitle:{
        textAlign:'center',
        fontFamily:'FT-ScandinavianTitan-Black',
        color:'white',
        fontSize:fonts.SIZE.TITLE[3],
        letterSpacing:3,
        marginTop:40,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 4, height: 3},
        textShadowRadius: 10,
    },
    ButtonOnline:{
        marginVertical:hp('4%')
    }
})

export default CategoryScreen

