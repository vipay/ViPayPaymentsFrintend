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
  conatiner: {
    flex: 1,
    // justifyContent:'center'

    // backgroundColor: colors.F1F1F2,
  },
  bgimg: {
    height: '100%',
    // flex:1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: moderateScale(24),
    height: moderateScale(100),
    alignItems: 'center',
  },
  MyQRcode: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.white,
  },
  qrView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 32,
  },
  imgView: {
    height: moderateScale(64),
    width: moderateScale(64),
    borderWidth: 4,
    borderColor: colors.white,
    marginTop: -moderateScale(32),
    borderRadius: 32,
    marginBottom:moderateScale(20)
  },
  profile: {
    height:moderateScale(352),
    flex:1,
    justifyContent:'center'
  },
  qr:{
    //   marginTop:moderateScale(20)
  },
  subView:{
      backgroundColor:'white',
    height:moderateScale(328),
    // justifyContent:'center',
    alignItems:"center",
    marginHorizontal:moderateScale(24),
    borderRadius: moderateScale(16),


  },
  MyQRDesc:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.white,
      alignSelf:"center",
      marginTop:moderateScale(16)

  },
  button:{
      height:moderateScale(56),
      backgroundColor:colors.white,
      marginHorizontal:moderateScale(24),
      marginBottom:moderateScale(24),
      borderRadius:moderateScale(16),
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center'



  },
  OpenCodeScanner:{
      ...commonStyles.fontSize14,
      fontFamily:fontFamily.poppinsSemibold,
      color:colors.Blue,
      marginLeft:moderateScale(8),
  }
});
export default styles;
