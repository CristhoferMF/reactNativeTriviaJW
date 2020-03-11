import React from 'react'
import { StyleSheet, Text, ImageBackground,ScrollView } from 'react-native'
import BtnOrder from './BtnOrder'
import GameQuizContainer from './GameQuizContainer/'
import {Button} from '../../components/'

const CategoryScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/img/background.jpg')} 
            style={styles.backgroundImage}>
            <Text style={styles.categoryTitle}>CATEGORIAS</Text>
            <BtnOrder/>
            <ScrollView style={styles.container}>
               <GameQuizContainer/> 
               <GameQuizContainer/> 
               <GameQuizContainer/> 
               <GameQuizContainer/> 
               <GameQuizContainer/> 
               <GameQuizContainer/> 
            </ScrollView>
            <Button title="BUSCAR EN LINEA" onPress={(e)=>{console.warn("s")}} style={styles.ButtonOnline}/>
        </ImageBackground>
    )
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
        marginTop:40
    },
    ButtonOnline:{
        marginVertical:20
    }
})

export default CategoryScreen

