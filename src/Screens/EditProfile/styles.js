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
    backgroundColor: colors.white,
    
  },
  changepic: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(24),
    borderBottomWidth: 1,
    borderBottomColor: colors.F1F1F2,
    paddingBottom: moderateScale(16),
    marginTop: moderateScale(8),
  },
  profilepic: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: 24,

  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: moderateScale(16),
  },
  Changeprofilepicture: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.Blue,
  },
  bgView: {
    backgroundColor: colors.grayinput,
    height: moderateScale(56),
    marginHorizontal: moderateScale(24),
    borderRadius: 16,
    //   alignItems:'center',
    justifyContent: 'center',
    paddingLeft: moderateScale(16),
    marginTop: moderateScale(16),
  },
  ProfileName: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    //   color:colors.g878787
    color: colors.OBSIDIAN,
  },
  vipayidtxt: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsItalic,
    color: colors.grayprice,
    marginTop: moderateScale(8),
    marginHorizontal: moderateScale(24),
  },
  ProfileEmail: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  phoneView: {
    backgroundColor: colors.grayinput,
    height: moderateScale(56),
    marginHorizontal: moderateScale(24),
    borderRadius: 16,
    alignItems: 'center',
    //   justifyContent:'center',
    paddingLeft: moderateScale(16),
    marginTop: moderateScale(16),
    flexDirection: 'row',
  },
  line: {
    height: 40,
    borderLeftWidth: 1,
    borderColor: colors.D9D9D9,
    marginHorizontal: moderateScale(16),
  },
  countrycode: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.g929292,
  },
  Number: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  btn: {
    marginHorizontal: moderateScale(24),
    flex: 1,
    // alignItems:'baseline'
    // backgroundColor:'red',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(24),
  },
  inputfield: {
    flexDirection: 'row',
    backgroundColor: colors.grayinput,
    marginTop: moderateScale(16),
    paddingRight: moderateScale(16),
    justifyContent: 'space-between',
    borderRadius: 16,
    height: moderateScale(56),
    alignItems: 'center',
    marginHorizontal: moderateScale(24),
  },
  subinputfield: {
    flexDirection: 'row',
    flex: 1,
  },
  countrypicker: {
    // marginHorizontal:moderateScale(16),
    flex: 0.4,
    paddingHorizontal: moderateScale(8),
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  //   countrycode:{
  //     ...commonStyles.fontSize15,
  //     fontFamily:fontFamily.poppinsRegular,

  //   },
  inputline: {
    borderLeftWidth: 1,
    borderColor: colors.D9D9D9,
    backgroundColor: colors.D9D9D9,
  },
  phoneNo: {
    ...commonStyles.fontSize15,
    color: colors.OBSIDIAN,
    marginLeft: moderateScale(15),
    fontFamily: fontFamily.poppinsRegular,
    flex: 1,
    padding: 0,
  },
});
export default styles;
