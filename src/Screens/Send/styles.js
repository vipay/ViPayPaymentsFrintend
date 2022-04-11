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
  },
  sendBg: {
    backgroundColor: 'white',
    
    height: moderateScale(88),
    marginHorizontal: moderateScale(24),
    shadowColor: '#42D0B7',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 13,
    borderRadius:20,
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
  a: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    marginLeft: moderateScale(24),
  },
  flatList: {
    marginTop: moderateScale(17),
    flex: 1,
  },
  bgImgView: {
    // flex:1
  },
});

export default styles;
