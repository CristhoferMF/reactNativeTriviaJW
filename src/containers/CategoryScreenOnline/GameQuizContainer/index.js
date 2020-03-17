import React,{Component} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import GameQuizTitle from '../../CategoryScreen/GameQuizContainer/GameQuizTitle'
import GameQuizAutor from '../../CategoryScreen/GameQuizContainer/GameQuizAutor'
import GameQuizCount from './GameQuizCount'
import GameQuizDate from './GameQuizDate'
import GameQuizDownload from './GameQuizDownload'
import COLOR from '../../../config/color'
import getRealm from '../../../schemas/realm'
import {copyJson} from '../../../helpers'
import {getApiCategoryPreguntas} from '../../../config/api'

class GameQuizContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            
        }
    }

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
                console.log("New Category Inserted",category);
            })
        } catch (error) {
            console.warn("Error",error)
        }
        isLoading(false);
    }
    render(){
        const {category}= this.props
        const date = {
            created_at: category.created_at,
            updated_at: category.updated_at
        }
        return (
            <TouchableOpacity onPress={this.saveRealmCategory} activeOpacity={0.9} disabled={category.downloaded}>
            <View style={[styles.container, (category.downloaded) ? {opacity:0.8 }: {}]}>
                <GameQuizTitle title={category.nombre}/>
                <GameQuizAutor autor={category.autor}/>
                <GameQuizCount cantidad={category.cantidad}/>
                <GameQuizDate date={date}/>
                <GameQuizDownload downloaded={category.downloaded}/>
            </View>
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
    }
})
