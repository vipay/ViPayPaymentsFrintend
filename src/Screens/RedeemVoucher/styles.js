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

    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    input:{
        height:moderateScale(56),
        backgroundColor:colors.grayinput,
        marginHorizontal:moderateScale(24),
        borderRadius:16,
        justifyContent:'center'

    },
    txtinput:{
        marginLeft:moderateScale(16)
    },
    main:{
        marginHorizontal:moderateScale(24),
        marginBottom:moderateScale(32),
    }

})
export default styles;