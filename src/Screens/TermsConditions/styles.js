import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    flex:1,
    // marginTop:moderateScale(20)
},
subconainer:{
  flex:0.9,
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center'


}

})
export default styles;
