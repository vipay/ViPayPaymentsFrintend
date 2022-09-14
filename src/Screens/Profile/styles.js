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
    backgroundColor: colors.F1F1F2,
  },
  profilepic: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  profilecont: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(16),
  },
  ViPaybalance: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.white,
  },
  profileBalnce: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.white,
  },
  bgimgView: {
    //   height:'100%',
    height: moderateScale(376),
    // justifyContent:"flex-end"
    // backgroundColor: 'red',
  },
  camera: {
    marginBottom: moderateScale(8),
  },
  profiledetails: {
    backgroundColor: 'white',
    //   height:100
    paddingHorizontal: moderateScale(24),
  },
  editicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(16),
  },
  ProfileName: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    lineHeight: 23,
  },
  ProfileId: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  ProfileEmail: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginBottom: moderateScale(8),
  },
  anySuggestionView: {
    height: moderateScale(64),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Anysuggestions: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.Blue,
    textDecorationLine: 'underline',
  },
});
export default styles;
