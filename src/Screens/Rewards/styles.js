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
        
    },
    header:{
        ...commonStyles.fontSize18,
        fontFamily:fontFamily.RocGroteskBold,
        color:colors.OBSIDIAN,
        marginHorizontal:moderateScale(24),
        marginBottom:moderateScale(16)


    },
    imgbgView:{
        height:moderateScale(152),
        marginHorizontal:moderateScale(24),
        // backgroundColor: 'white',
    shadowColor: '#42D0B7',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47,
    shadowRadius: 6.59,

    elevation: 13,
    marginTop:moderateScale(8),
    borderRadius:18,
    // padding:5

    },
    imgbg:{
        height:'100%',
    }
})
export default styles;
