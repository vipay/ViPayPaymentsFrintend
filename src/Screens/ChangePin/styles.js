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
  },
  codefieldView: {
    flexDirection: 'row',
  },
  cellouter: {
    borderColor: colors.pinInputField,
  },
  customMask: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: colors.OBSIDIAN,
  },
  pinTextStyle: {
    color: colors.OBSIDIAN,
    fontFamily: fontFamily.poppinsRegular,
  },
  cell: {
    backgroundColor: colors.pinInputField,
    padding: moderateScale(12),
    borderRadius: 16,
    marginTop: moderateScale(32),
  },
  passheader: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    lineHeight:35,
    // marginTop: moderateScale(25),
    marginHorizontal: moderateScale(24),
  },
  cellcon: {
    flex: 1,
  },
  showview: {
      flexDirection:'row',
      marginTop:moderateScale(25),
      alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:moderateScale(24),

  },
  show:{
      ...commonStyles.fontSize14,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.grayprice,
     
  },
  confirmpassheader:{
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    lineHeight:35,
    // marginTop: moderateScale(25),
   

  },
  btncomp:{
      marginHorizontal:moderateScale(24),
      marginBottom:moderateScale(24),
      

  }
});
export default styles;
