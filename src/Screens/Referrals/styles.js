import {StyleSheet} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bgimgView: {
    //   flex:1,

    height: moderateScale(152),
    //   width:'100%',
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(8),
    shadowColor: '#42D0B7',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47,
    shadowRadius: 7.49,

    elevation: 12,
    borderRadius: 16,
  },
  bgimg: {
    height: '100%',
    width: '100%',
  },
  flatList: {
    marginTop: moderateScale(24),
    flex: 1,
  },
  btn:{
      marginHorizontal:moderateScale(24),
      marginBottom:moderateScale(24),
      marginTop:moderateScale(8)
  },
  card:{
    margin:moderateScale(24),
  },
  Totalrewards:{
      ...commonStyles.fontSize16,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.white,


  },
  reward:{
      ...commonStyles.fontSize32,
      fontFamily:fontFamily.RocGroteskBold,
      color:colors.white,
      marginTop:moderateScale(8)
  },
  logo:{
      
   
      alignSelf:'flex-end'
     

  }
});
export default styles;
