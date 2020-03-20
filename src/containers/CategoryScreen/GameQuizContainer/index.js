import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
import GameQuizTitle from './GameQuizTitle'
import GameQuizAutor from './GameQuizAutor'
import GameQuizCount from './GameQuizCount'
import GameQuizDate from './GameQuizDate'
import GameQuizScore from './GameQuizScore'
import COLOR from '../../../config/color'
import getRealm from '../../../schemas/realm'
import * as Animatable from 'react-native-animatable';
import sound from '../../../config/sound'

const GameQuizContainer = ({navigationScreenQuiz,category,refreshCategories,addSCore}) => {
    const count= {
        completed:()=> {
            const {preguntas} = category
            let completed=0;
            preguntas.map((pregunta)=>{
                if(pregunta.completed) completed++;
            })
            return completed
        },
        total:category.preguntas.length
    }
    const score = () => {
        const {preguntas} = category
        let score = 0
        preguntas.forEach(pregunta => {
            if(pregunta.completed) score+=pregunta.puntuacion;
        });
        return score;
    }
    const date = {
        created_at: category.created_at,
        updated_at: category.updated_at
    }
    const deleteCategoryRealm = async () => {
        try {
            const realm = await getRealm();
            realm.write(()=> {
                let categoryRealm = realm.objectForPrimaryKey('Category',category.id);
                let preguntasRealm = categoryRealm.preguntas
                for (const p of preguntasRealm) {
                    realm.delete(p.alternativas)
                }
                realm.delete(preguntasRealm)
                realm.delete(categoryRealm)
            })
            refreshCategories();
        } catch (error) {
            console.log("ERROR_REFRESH_CATEGORIES",error)
        }
        
    }
 
    const deleteCategory = () => {
        Alert.alert('Borrar Categoría', 'Se perderá los puntos acumulados',
            [{
                text: 'Cancelar',
                onPress: () => {
                    console.log('Cancelar')
                }
            },{
                text: 'Ok',
                onPress: () => {
                    deleteCategoryRealm();
                    sound.startSoundEffect("button_press.mp3",0.7);
                }
            }])
    }
    return (
        <TouchableOpacity onPress={()=>{navigationScreenQuiz(category.id)}} activeOpacity={0.9} onLongPress={deleteCategory}>
        <Animatable.View style={styles.container} animation="bounceInLeft">
            <GameQuizTitle title={category.nombre}/>
            <GameQuizAutor autor={category.autor}/>
            <GameQuizCount nTotal={count.total} nCompleted={count.completed()}/>
            <GameQuizDate date={date}/>
            <GameQuizScore score={score()}/>
        </Animatable.View>
        </TouchableOpacity>
    )
}

export default GameQuizContainer

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLOR.WHITE,
        marginBottom:10,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        elevation:1
    }
})
