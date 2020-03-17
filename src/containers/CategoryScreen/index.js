import React, { Component } from 'react'
import { StyleSheet, Text, ImageBackground,FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import BtnOrder from './BtnOrder'
import GameQuizContainer from './GameQuizContainer/'
import {Button} from '../../components/'
import getRealm from '../../schemas/realm'

class CategoryScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            categories:[]
        }
        this.getCategoriesRealm=this.getCategoriesRealm.bind(this)
        this.navigationScreenQuiz=this.navigationScreenQuiz.bind(this)
    }
    async getCategoriesRealm(){
        const realm = await getRealm();
        const categories = realm.objects('Category');
        this.setState({categories})
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
        const {categories}= this.state
        return (
            <ImageBackground
                source={require('../../assets/img/background.jpg')} 
                style={styles.backgroundImage}>
                <Text style={styles.categoryTitle}>CATEGORIAS</Text>
                <BtnOrder/>
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
        fontSize:55,
        letterSpacing:3,
        marginTop:40,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 4, height: 3},
        textShadowRadius: 10,
    },
    ButtonOnline:{
        marginVertical:20
    }
})

export default CategoryScreen

