import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FONTS from '../../../config/fonts'
import COLOR from '../../../config/color'
import ICON from 'react-native-vector-icons/MaterialIcons'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'

const GameQuizCount = ({nQuiz,count}) => {
    return (
        <View style={styles.container}>
            <ICON name="help" size={FONTS.SIZE.S} color={COLOR.FONTGREY} style={styles.icon}/>
            <Text style={styles.count}>{nQuiz+1} / {count}</Text>
        </View>
    )
}

export default GameQuizCount

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    icon:{
        paddingRight:10
    },
    count:{
        fontFamily:FONTS.CIRCULARSTD.BOOK,
        fontSize:FONTS.SIZE.XS
    }
})
