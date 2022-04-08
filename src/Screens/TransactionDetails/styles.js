import {StyleSheet , Platform } from 'react-native';
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
  },
  subcontainer1: {
    flex: 0.3,
    backgroundColor: colors.up_green,
    paddingTop: moderateScale(24),
  },
  done_received: {
    marginTop: moderateScale(8),
  },
  mainconainer: {
    flex: 1,
    alignItems: 'center',
  },
  receivedstyle: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.poppinsMedium,
    color: colors.white,
  },
  Value: {
    flexDirection: 'row',
    // marginTop: moderateScale(8),
    alignItems:'center'
  },
  coinImg: {
    height: moderateScale(32),
    width: moderateScale(32),
  },
  coinvalue: {
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.white,
    marginLeft: moderateScale(8),
  },
  profile: {
    flex: 0.2,
    marginHorizontal: moderateScale(24),
    marginTop: -moderateScale(70),
    // position: 'absolute', top: 200, left: 0, right: 0, bottom:400,
    alignItem: 'center',
    // backgroundColor:'red'
  },
  profilepic: {
    height: moderateScale(64),
    width: moderateScale(64),
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.white,
    marginTop: -moderateScale(32),
    backgroundColor:colors.white
  },
  
  transaction_NAME: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.OBSIDIAN,
    marginTop: moderateScale(12),
  },
  transaction_TIME: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginTop: moderateScale(8),
  },
  btcaddess: {
    flex: 0.25,
    // backgroundColor:'red',
    borderRadius: 16,
    padding: moderateScale(16),
    flexDirection: 'row',
    height: moderateScale(104),
    // shadowColor: 'red',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    // elevation: 18,
    borderWidth:1,
    borderColor:'#F1F1F2',
    marginTop: moderateScale(16),
  },
  subcontainer2: {
    flex: 0.5,
    paddingHorizontal: moderateScale(24),
  },
  txtbtcadress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btcsubView: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  btctxt: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.OBSIDIAN,
  },
  btcid: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  Needhelpview: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',

    flex: 0.2,
    padding: moderateScale(10),
  },
  Needhelp: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.Blue,
  },
  subprofile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    ...Platform.select({
      ios: {
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 18,},
      android: {
        elevation:1
      },
      default: {
       elevation:1
      }
    }),
   
    marginTop: moderateScale(32),
    }
});

export default styles;
