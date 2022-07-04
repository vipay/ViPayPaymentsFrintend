import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // marginTop:moderateScale(24),
    marginHorizontal: moderateScale(22),
    alignItems: 'center',
  },
  input: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    flex: 1,
    paddingRight: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  recent: {
    marginHorizontal: moderateScale(24),
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginTop:moderateScale(9),
    
  },
});

export default styles;
