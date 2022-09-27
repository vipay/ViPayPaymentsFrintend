import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  Contact: {
    ...commonStyles.fontSize18,
    color: colors.OBSIDIAN,
    fontFamily: fontFamily.RocGroteskBold,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex:1,
    marginHorizontal: moderateScale(24),
    alignItems: 'center',
    marginBottom: moderateScale(16),

    height: moderateScale(56),
    backgroundColor: colors.grayinput,
    paddingHorizontal: moderateScale(16),
    borderRadius: 16,
    marginTop: moderateScale(24),
  },
  input: {
    flex: 1,
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(24),
    marginHorizontal: moderateScale(24),
  },
});
export default styles;
