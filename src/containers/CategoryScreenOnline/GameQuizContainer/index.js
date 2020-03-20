import React,{Component} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import GameQuizTitle from '../../CategoryScreen/GameQuizContainer/GameQuizTitle'
import GameQuizAutor from '../../CategoryScreen/GameQuizContainer/GameQuizAutor'
import GameQuizCount from './GameQuizCount'
import GameQuizDate from './GameQuizDate'
import GameQuizDownload from './GameQuizDownload'
import COLOR from '../../../config/color'
import FONTS from '../../../config/fonts'
import getRealm from '../../../schemas/realm'
import {copyJson} from '../../../helpers'
import {getApiCategoryPreguntas} from '../../../config/api'
import sound from '../../../config/sound'
import * as Animatable from 'react-native-animatable';

class GameQuizContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            toUpdated:false
        }
    }
    _handleRefView = ref => this.view = ref;

    saveRealmCategory = async () => {
        const {category,isLoading} = this.props
        const categoryRealm = copyJson(category)
        isLoading(true);
        try {
            const preguntas = await getApiCategoryPreguntas(category.id);
                categoryRealm.preguntas = preguntas
            const realm = await getRealm();
            realm.write(() =>{
                const category = realm.create('Category',categoryRealm);
                this.props.setDownloaded(category.id);
                sound.startSoundEffect("button_press.mp3",0.7);
            })
        } catch (error) {
            console.warn("Error",error)
        }
        isLoading(false);
    }
    updateRealmCategory = async () => {
        const {category,isLoading} = this.props
        isLoading(true);
        try {
            const QUIZ_FETCHED = await getApiCategoryPreguntas(category.id);
            const realm = await getRealm();
            const categoryRealm = realm.objectForPrimaryKey("Category",category.id);
            const idCompleted = [];
            /* Obteniendo id completados y borrando todas las preguntas */
            categoryRealm.preguntas.map((pregunta) => {
                console.log(pregunta)
                if(pregunta.completed) idCompleted.push(pregunta.id)
            })
            realm.write(()=>{
                realm.delete(categoryRealm.preguntas);
            })
            /* Agregando nuevas preguntas y asignando las completadas */
            QUIZ_FETCHED.map((pregunta) => {
                const found = idCompleted.find( id => id == pregunta.id)
                pregunta.completed = found ? true : false;
                realm.write(()=>{
                    categoryRealm.preguntas.push(pregunta)
                })
            })
            realm.write(()=>{
                categoryRealm.nombre = category.nombre
                categoryRealm.autor = category.autor
                categoryRealm.cantidad = category.cantidad
                categoryRealm.created_at = category.created_at
                categoryRealm.updated_at = category.updated_at
            });
            this.setState({toUpdated:false})
            this.props.setDownloaded(category.id);
            sound.startSoundEffect("button_press.mp3",0.7);
        } catch (error) {
            console.warn("Error",error)
        }
        isLoading(false);
    }
    async componentDidMount(){
        try {
            const realm = await getRealm();
            const {category} = this.props

            const _category = realm.objectForPrimaryKey('Category',category.id);
            if(_category){
                const updateAt = new Date(_category.updated_at).getTime();
                const updateAtOnline = new Date(category.updated_at).getTime();
                if(updateAtOnline>updateAt){
                    this.setState({toUpdated:true})
                }
                
            }
        } catch (error) {
            console.log("ERROR_OBTENER_FECHA",error)
        }
    }
    render(){
        const {category}= this.props
        const {toUpdated} = this.state
        const date = {
            created_at: category.created_at,
            updated_at: category.updated_at
        }
        
        return (
            <TouchableOpacity onPress={toUpdated ? this.updateRealmCategory : this.saveRealmCategory } activeOpacity={0.9} disabled={toUpdated ? false :category.downloaded}>
            <Animatable.View ref={this._handleRefView} animation="bounceInDown" style={[styles.container, (!toUpdated && category.downloaded) ? {opacity:0.8 }: {}]}>
                <GameQuizTitle title={category.nombre}/>
                <GameQuizAutor autor={category.autor}/>
                <GameQuizCount cantidad={category.cantidad}/>
                <GameQuizDate date={date}/>
                <GameQuizDownload downloaded={category.downloaded} toUpdated={toUpdated}/>
                {toUpdated && <Animatable.Text animation="pulse" easing="ease-in-back"  
                iterationCount="infinite" style={styles.toUpdated}>¡Actualización!</Animatable.Text>}
            </Animatable.View>
            </TouchableOpacity>
        )
    }
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
    },
    toUpdated:{
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        alignSelf:'flex-end',
        paddingVertical:2,
        color:'#08AC14',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 1, height: 0.5},
        textShadowRadius: 5,
    }
})
