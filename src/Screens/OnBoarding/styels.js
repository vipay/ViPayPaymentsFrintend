import { StyleSheet } from 'react-native';
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
    backgroundColor: colors.white,
    // justifyContent: 'space-around'
  },

  btnStyle: {
    width: moderateScale(160),
    height: moderateScale(160),
    borderRadius: moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },

  PagerView: {
    flex: 1,
    // backgroundColor:"green"
    
  },
  getstartedbtn: {
    marginHorizontal: moderateScale(24),
  
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    fontSize: 40,
    marginTop: moderateScale(56.5),
    textAlign: 'center'
  },
  content: {
    ...commonStyles.fontSize15,
    color: colors.OBSIDIAN,
    textAlign: 'center',
    padding: moderateScale(24),
    fontFamily:fontFamily.poppinsLight
  },

  imgstyle: {
    alignSelf: 'center'
  },

  onboardcontentView: {
  justifyContent:"flex-end"
    // justifyContent: 'center',
  },
  btngetstart: {
    flex: 0.1,
    justifyContent: "flex-end",
    padding: moderateScale(24),
    
  },
  activeStyle: {
    backgroundColor: colors.citrine,
    width: 40,
    height: 8,
    borderRadius: 4
  },
  inactiveStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.BABABD
  },
  dotsView: {
    flex: 0.1,
    alignItems: 'center',
    // backgroundColor:'black'
  },
  onboardView: {
    flex: 1,
  }
});

export default styles;
