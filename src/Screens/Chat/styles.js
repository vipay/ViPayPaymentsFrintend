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
    
  },
  input:{
   
    
  },
  backicion:{
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.Blue,
    // backgroundColor:"pink",
    borderRadius: 10,
    // marginTop: moderateScale(8),
    marginLeft: 24,
    marginRight: 16,
  }


})

export default styles;