import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        XS:hp('2.0%'),
        S:hp('2.3%'),
        M:hp('2.5%'),
        L:hp('2.7%'),
        XL:hp('2.9%'),
        XXL:hp('3.1%'),
        TITLE:[hp('4%'),hp('6%'),hp('8%'),hp('10%')]
    }
}