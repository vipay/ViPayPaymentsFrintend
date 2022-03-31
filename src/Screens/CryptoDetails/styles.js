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
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: moderateScale(24),
  },
  header: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(24),
  },
  coinname: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginLeft: moderateScale(16),
  },
  titleview: {
    flexDirection: 'row',
  },
  cryptoDetailsCard: {
    flex: 0.2,
    shadowColor: '#42D0B7',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 18,
    paddingHorizontal: moderateScale(24),
  },
  logoimgview: {
    backgroundColor: colors.white,
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailsView: {
    padding: moderateScale(24),
    flexDirection: 'row',
    flex: 1,
  },
  value: {
    textAlign: 'right',
    ...commonStyles.fontSize24,
    color: colors.white,
    fontFamily: fontFamily.RocGroteskBold,
  },
  price: {
    textAlign: 'right',
    ...commonStyles.fontSize16,
    color: colors.white,
    fontFamily: fontFamily.poppinsRegular,
  },
  textview: {
    flex: 1,
  },
  flatList:{
    flex:0.75
}
});
export default styles;
