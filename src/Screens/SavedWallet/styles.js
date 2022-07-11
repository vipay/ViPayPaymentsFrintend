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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(24),
    paddingBottom: moderateScale(16),
    justifyContent: 'space-between',
    paddingRight: moderateScale(24),
    borderBottomWidth: 1,
    borderBottomColor: colors.F1F1F2,
    paddingTop: moderateScale(9),
  },
  name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
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
});
export default styles;
