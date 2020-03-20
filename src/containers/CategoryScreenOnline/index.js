import React, { Component } from 'react'
import { StyleSheet, Text,View, ImageBackground,FlatList, RefreshControl,ToastAndroid } from 'react-native'
import BtnOrder from './BtnOrder'
import GameQuizContainer from './GameQuizContainer/'
import {Button} from '../../components/'
import Icon  from 'react-native-vector-icons/Ionicons'
import color from '../../config/color'
import fonts from '../../config/fonts'
import Loader from 'react-native-modal-loader';
import getRealm from '../../schemas/realm'
import {getApiCategories} from '../../config/api'
import { copyJson } from '../../helpers'

class CategoryScreenOnline extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[],
            isLoadingDownloaded:false,
            isRefreshing:false,
            isErrorCategories:false
        }
        this.setDownloadedCategory=this.setDownloadedCategory.bind(this)
        this.setLoadingDownloaded=this.setLoadingDownloaded.bind(this)
        this.setCategoriesFromApi=this.setCategoriesFromApi.bind(this)
    }
    async setCategoriesFromApi() {
        this.setState({isRefreshing:true})
        try {
            const FETCH_RESULT = await getApiCategories();

            const realm = await getRealm();
            FETCH_RESULT.map((category, i) => {
                const categoryRealm = realm.objectForPrimaryKey('Category', category.id);
                if (categoryRealm) FETCH_RESULT[i].downloaded = true;
                if (!categoryRealm) FETCH_RESULT[i].downloaded = false;
            })
            this.setState({
                categories: FETCH_RESULT
            })
        } catch (error) {
            console.warn(error)
            this.setState({isErrorCategories:true});
        }
        this.setState({isRefreshing:false})

    }
    componentDidMount(){
       this.setCategoriesFromApi();
    }
    setLoadingDownloaded(boolean){
        this.setState({isLoadingDownloaded:boolean})
    }
    async setDownloadedCategory(id){
        const {categories} = this.state
        const copyCategories = copyJson(categories)
        const indexCategory = copyCategories.findIndex((category)=> (category.id === id))
        copyCategories[indexCategory].downloaded=true;
        this.setState({categories:copyCategories})
    }
    render(){
        const {categories,isLoadingDownloaded,isErrorCategories} = this.state;
        return (
            <ImageBackground
                source={require('../../assets/img/background.jpg')} 
                style={styles.backgroundImage}>
                <Loader loading={isLoadingDownloaded} color={color.PRIMARY} size="large" title="Descargando..."/>
                <View style={styles.TitleTop}>
                    <Icon name="md-wifi" size={60} color={color.WHITE} style={styles.IconTitle}/>
                    <Text style={styles.categoryTitle}>DESCARGAR{"\n"}CATEGORIAS</Text>
                </View>
                <BtnOrder/>
                {isErrorCategories && <View>
                    <Icon name="md-close" style={{alignSelf:'center'}} color={color.WHITE} size={50}/>
                    <Text style={[styles.errorText,styles.errorHeaderText]}>Ha Ocurrido un Error</Text>
                    <Text style={styles.errorText}>Intente nuevamente o verifique su conexión a internet</Text>
                </View>}
                <FlatList 
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.isRefreshing}
                          onRefresh={()=>{
                              this.setCategoriesFromApi();
                              ToastAndroid.showWithGravityAndOffset(
                                'Lista de categorías actualizada',
                                ToastAndroid.SHORT,
                                ToastAndroid.BOTTOM,0,200
                              );
                              this.setState({isRefreshing:false})
                          }}
                        />
                      }
                    style={styles.container}
                    data={categories}
                    renderItem={({item}) => (<GameQuizContainer category={item} setDownloaded={this.setDownloadedCategory} isLoading={this.setLoadingDownloaded} isRefreshing={this.state.isRefreshing}/>)}
                    keyExtractor={category => category.id.toString()}
                    /> 
                <Button title="REGRESAR" onPress={()=>{this.props.navigation.goBack()}} style={styles.ButtonOnline}/>
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
    TitleTop:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
    },
    IconTitle:{
        paddingRight:10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 4, height: 3},
        textShadowRadius: 10,
    },
    categoryTitle:{
        textAlign:'center',
        fontFamily:fonts.SCANDINAVIAN,
        color:'white',
        fontSize:40,
        lineHeight:30,
        paddingTop:10,
        letterSpacing:3,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 4, height: 3},
        textShadowRadius: 10,
    },
    ButtonOnline:{
        marginVertical:20
    },
    errorText:{
        paddingHorizontal:15,
        color:color.WHITE,
        textAlign:'center',
        fontFamily:fonts.CIRCULARSTD.BOOK,
        fontSize:20
    },
    errorHeaderText:{
        fontSize:18,
        fontFamily:fonts.CIRCULARSTD.BLACK
    }
})

export default CategoryScreenOnline

