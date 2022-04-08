import {StyleSheet, Platform} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop:moderateScale(24)
  },
  sendBg: {
    
    height: moderateScale(88),
    marginHorizontal:moderateScale(24),
  },
  bgImg: {
    height: '100%',
    width: '100%',
  },
  ButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(24),
  },
  buttonTxt: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.white,
  },
  pressable: {
    alignItems: 'center',
  },
  a:{
    ...commonStyles.fontSize16,
    fontFamily:fontFamily.RocGroteskBold,
    marginLeft:moderateScale(24)
    

  },
  flatList: {
    marginTop:moderateScale(17),
    flex:0.9
  },
});

export default styles;
