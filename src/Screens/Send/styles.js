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
  sendBg: {
    backgroundColor: colors.shadowbg,
    // borderWidth:0.1,
    // borderColor:colors.white,
    height: moderateScale(88),
    marginHorizontal: moderateScale(24),
    marginBottom: moderateScale(16),
    // backgroundColor: 'white',
    shadowColor: '#42D0B7',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47,
    shadowRadius: 7.49,

    elevation: 12,
    borderRadius: 20,
  },
  bgImg: {
    height: '100%',
    // width: '000%',
  },
  ButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: moderateScale(24),
  },
  buttonTxt: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.white,
  },
  pressable: {
    alignItems: 'center',
  },
  a: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    marginLeft: moderateScale(24),
  },
  flatList: {
    // marginTop: moderateScale(17),
    flex: 1,
  },
  bgImgView: {
    // flex:1
  },

  header: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
    // marginVertical: moderateScaleVertical(16),
    marginTop: moderateScale(16),
  },
  input: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    flex: 1,
    paddingRight: moderateScale(16),
    marginLeft: moderateScale(16),
  },
});

export default styles;
