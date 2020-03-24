import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const fontSmall = 3.5;
const iter = 0.4;
export default FONTS = {
    CIRCULARSTD:{
        BLACK:"CircularStd-Black",
        BLACKITALIC:"CircularStd-BlackItalic",
        BOLD:"CircularStd-Bold",
        BOLDITALIC:"CircularStd-BoldItalic",    
        BOOK:"CircularStd-Book",
        BOOKITALIC:"CircularStd-BookItalic",
        MEDIUM:"CircularStd-Medium",        
        MEDIUMITALIC:"CircularStd-MediumItalic",  
    },
    SCANDINAVIAN:"FT-ScandinavianTitan-Black",
    SIZE:{
        XS:wp(fontSmall+'%'),
        S:wp((fontSmall+iter)+'%'),
        M:wp((fontSmall+(iter*2))+'%'),
        L:wp((fontSmall+(iter*3))+'%'),
        XL:wp((fontSmall+(iter*4))+'%'),
        XXL:wp((fontSmall+(iter*5))+'%'),
        TITLE:[wp('7%'),wp('10%'),wp('13%'),wp('16%')]
    }
}