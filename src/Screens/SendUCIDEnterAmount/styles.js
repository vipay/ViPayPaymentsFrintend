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
  bottomView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: moderateScale(8),
  },
  buttonView: {
    marginHorizontal: moderateScale(24),
    backgroundColor: colors.white,
    marginBottom: moderateScale(16),
    marginTop: moderateScale(16),
  },
  Available: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    height: moderateScale(40),
    // alignItems:'center'
    alignSelf: 'center',
  },
  AvailableValue: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  subcontin: {},
  inputfield: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(24),
    alignItems: 'center',
    backgroundColor: colors.grayinput,
    paddingHorizontal: moderateScale(16),
    height: moderateScale(56),
    borderRadius: moderateScale(16),
  },
  input: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
    flex: 1,
    marginTop: moderateScale(8),
  },
  Recipientaddress: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.OBSIDIAN,
    textAlign: 'center',
  },
  addAdress: {
    flexDirection: 'row',
    marginTop: moderateScale(8),
    marginHorizontal: moderateScale(24),
    alignItems: 'center',
  },
  add: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.Blue,
    lineHeight: 35,
    marginRight: moderateScale(8),
  },
  amountBTC: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.OBSIDIAN,
    textAlign: 'center',
    marginTop: moderateScale(24),
  },
  EnterAmount: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  value: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  EnterAmountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
  },
  verfiedView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(8),
    alignItems:"center"
  },
  name:{
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsMedium,
    color: colors.green,
  },
  verified:{
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,

  }
});
export default styles;
