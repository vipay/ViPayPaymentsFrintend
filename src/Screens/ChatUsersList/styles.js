import { StyleSheet } from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingTop:moderateScale(24)
        // padding:moderateScale(24),
        // paddingHorizontal:moderateScale(24)
    },
    heading:{
        ...commonStyles.fontSize18,
        fontFamily:fontFamily.RocGroteskBold,
        color:colors.OBSIDIAN,
        // paddingHorizontal:moderateScale(24)
        marginHorizontal:moderateScale(24)

    },
    search:{
        height:moderateScale(56),
        backgroundColor:colors.grayinput,
        borderRadius:16,
        marginTop:moderateScale(24),
        marginHorizontal:moderateScale(24),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:moderateScale(16),        
    },
    searchtxt:{
        ...commonStyles.fontSize15,
        fontFamily:fontFamily.poppinsRegular,
        color:colors.OBSIDIAN,
        flex:1,

    },
    flatList:{
        marginTop:moderateScale(16),
        flex:1
    }
})
export default styles;