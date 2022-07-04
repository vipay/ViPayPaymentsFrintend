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
    // marginTop:moderateScale(24),
    // marginTop:moderateScale(22),s
    // backgroundColor:'yellow'
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
    backgroundColor: colors.pinInputField,
    borderRadius: 16,
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    height: moderateScale(56),
  },
  searchtxt: {
    ...commonStyles.fontSize15,
    color: colors.OBSIDIAN,
    fontFamily: fontFamily.poppinsRegular,
  },
  imagestyles:{
      height:moderateScale(48),
      width:moderateScale(48),
      borderRadius:24,
      
  }
});
export default styles;
