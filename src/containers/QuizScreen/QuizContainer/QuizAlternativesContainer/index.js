import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuizAlternative from './QuizAlternative'

class QuizAlternativesContainer extends Component{

    constructor(props){
        super(props)

    }

    render(){
        const {alternativas,OnPressAlternative,timeout} = this.props
       
        return (
            <View style={styles.container}>
                {alternativas.map((alternativa,i)=>{
                    return (<QuizAlternative alternativa={alternativa} key={i} OnPressAlternative={OnPressAlternative} timeout={timeout}/>)
                })}
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
