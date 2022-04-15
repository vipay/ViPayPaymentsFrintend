import {StyleSheet} from 'react-native';
import imagePath from '../../constants/imagePath';
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
    paddingTop: moderateScale(24),
  },
  header: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginHorizontal: moderateScale(24),
    marginBottom: moderateScale(16),
  },
  imgbgView: {
    height: moderateScale(152),
    width:moderateScale(328),
    marginHorizontal: moderateScale(24),
   
    shadowColor: '#42D0B7',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47,
    shadowRadius: 6.59,

    elevation: 13,
    marginTop: moderateScale(8),
    borderRadius: 18,
   
  },
  imgbg: {
    height: '100%',
    width:'100%',
  },

  flatList: {
    marginTop: moderateScale(24),
    marginHorizontal: moderateScale(24),
    flex: 1,
  },
  rewardcard:{
    //   flex:1,
      margin:moderateScale(24)
  },
  Totalrewards:{
      ...commonStyles.fontSize16,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.white,

  },
  TotalrewardsValue:{
    ...commonStyles.fontSize32,
    fontFamily:fontFamily.RocGroteskBold,
    color:colors.white,
    marginTop:moderateScale(8)

  },
  logoView:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  TotalrewardsPrice:{
    ...commonStyles.fontSize16,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.white,
    height:32,
    alignItems:'center',

  }
});
export default styles;
