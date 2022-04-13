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
    fontFamily: fontFamily.poppinsRegular
  },
  codeFieldRoot: {
    marginTop: moderateScale(32),

  },
  cell: {

    backgroundColor: colors.pinInputField,
    padding: moderateScale(12),
    borderRadius: 16,
    marginTop: moderateScale(32),
    // justifyContent:"space-evenly",
    // flex:1,
    // marginLeft:24,



  },
  continuebtn: {
    // marginTop:moderateScale(128),


  },
  btncontinue: {
    // flex: 0.15,
  },
  codefieldView: {
    flexDirection:"row",
    flex: 1,
    // backgroundColor:"red",
    // justifyContent:'space-evenly'
  },
  cellouter: {
    borderColor: colors.pinInputField,
    // backgroundColor:'red',
    // flex:1
  },
  customMask: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: colors.OBSIDIAN
  },
  pinTextStyle: {
    color: colors.OBSIDIAN,


  },
  cellcon:{
    
    // backgroundColor:'red',
    flex:1,
    // justifyContent:"space-between",
    // alignContent:"space-between"
    // alignSelf:'stretch',

  }
  

});

export default styles;