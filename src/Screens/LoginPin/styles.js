import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
    backgroundColor: colors.white,
  },
  CreatePinHeading: {
    ...commonStyles.fontBold24,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginTop: moderateScale(24),
  },
  CreatePinSubheading: {
    ...commonStyles.fontSize16,
    color: colors.gray,
    fontFamily: fontFamily.poppinsRegular,
  },

  cell: {
    backgroundColor: colors.pinInputField,
    padding: moderateScale(12),
    borderRadius: 16,
    marginTop: moderateScale(32),
  },
  btnview: {
    // flex: 0.15,
    // alignItems:'center',
    // justifyContent:'center',
    // alignSelf:'center',
    // alignContent:'center'
    // backgroundColor: 'red',
  },
  codefieldView: {
    flexDirection: 'row',
    flex: 1,
    // backgroundColor:"red"
    // backgroundColor:"red",
    // justifyContent:'space-evenly'
  },
  cellouter: {
    borderColor: colors.pinInputField,
  },
  customMask: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: colors.OBSIDIAN,
  },
  pinTextStyle: {
    color: colors.OBSIDIAN,
    fontFamily: fontFamily.poppinsRegular,
  },
  cellcon: {
    flex: 1,
  },
  
});

export default styles;
