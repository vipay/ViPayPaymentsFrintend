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
    


   
  },
  main:{
      flex:1,
      alignItems:'center',
      alignContent:'center',
      alignSelf:'center',
      justifyContent:'center',
      marginHorizontal:moderateScale(24),
  },
  appversion:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.grayprice,
      marginTop:moderateScale(8),
      lineHeight:32,


  },
  aboutVipaydesc:{
      ...commonStyles.fontSize14,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.OBSIDIAN,
      textAlign:'center',
      marginTop:moderateScale(8),



  },
  copyRight:{
      ...commonStyles.fontSize13,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.grayprice,
      lineHeight:24,
      marginTop:moderateScale(16)

  },
  terms:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.Blue,


  },
  
 
  termscond:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:'center',
      marginHorizontal:moderateScale(24),
      marginBottom:moderateScale(24),

  }
  
})
export default styles;
