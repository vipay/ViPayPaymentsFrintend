import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  search: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  main: {
    height: moderateScale(96),
    borderWidth: 1,
    borderRadius: moderateScale(16),
    borderColor: colors.F1F1F2,
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
  name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    height: moderateScale(32),
  },
  adress: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  addbtn: {
    height: moderateScale(48),
    width: moderateScale(128),
    backgroundColor: colors.Blue,
    borderRadius: moderateScale(10),
    position: 'absolute',
    bottom: 31,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    ...commonStyles.fontSize13,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.white,
    marginLeft: moderateScale(8),
  },
  profile: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(16),
  },
  subview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(17),
  },
  address: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginHorizontal:moderateScale(16),
    marginTop:moderateScale(8),
    // marginBottom:moderateScale(16)
  },
});
export default styles;
