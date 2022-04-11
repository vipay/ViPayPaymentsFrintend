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
    // marginTop:moderateScale(24)
  },
  bottom: {
    flex: 0.1,
    //   backgroundColor:"red",
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScaleVertical(8),
    flexDirection: 'row',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
      // elevation:0.6,
      // borderWidth:0.1,
      // borderColor:'white's
      shadowColor: "rgba(0,0,0,0.6)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      
      elevation: 1,
     
      

  },
  details: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilepic: {
    height: moderateScale(72),
    width: moderateScale(72),
    borderRadius: 36,
  },
  name: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginTop: moderateScale(8),
  },
  phoneno: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  joiningdate: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginTop: moderateScale(24),
  },
  sayhelloview: {
    flexDirection: 'row',
    marginTop: moderateScale(8),
  },
  sayhello: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.Blue,
    marginRight: moderateScale(8),
  },
  bluebutton: {
    //   backgroundColor:'yellow',
    flex: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonstyle: {
    backgroundColor: colors.Blue,
    flexDirection: 'row',
    height: moderateScale(48),
    width: '48.5%',
    borderRadius: 10,
    alignItems: 'center',
    // justifyContent: 'space-between',
    justifyContent:'center',
    padding:moderateScale(16)
  },
  buttontxt: {
    ...commonStyles.fontSize13,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.white,
    // backgroundColor:'red'
    
    marginLeft: moderateScale(8),
  },
  messagebtn:{
      flex:0.25,
    //   backgroundColor:'red',
      alignItems:'flex-end',
      justifyContent:'center'
  },
  messageborder:{
      height:moderateScale(48),
      width:moderateScale(48),
      borderColor:colors.F1F1F2,
      borderWidth:1,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
  }
});
export default styles;
