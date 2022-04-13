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
    // marginHorizontal:moderateScale(24),
    // marginVertical:moderateScaleVertical(16)
    // marginTop:moderateScale(16)
  },
  bottomView:{
    justifyContent:"space-between",
    flexDirection:'row',
    marginBottom:moderateScale(8),
    // marginHorizontal:moderateScale(24),

  },
  buttonView:{
    marginHorizontal:moderateScale(24),
    backgroundColor:colors.white,
    marginBottom:moderateScale(16)

    // paddingHorizontal:24
  },
  Available:{
    ...commonStyles.fontSize15,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.grayprice,
    height:moderateScale(40),
    // alignItems:'center'
    alignSelf:'center'
  },
  AvailableValue:{
    ...commonStyles.fontSize15,
    fontFamily:fontFamily.RocGroteskBold,
    color:colors.OBSIDIAN
  }
})
export default styles;