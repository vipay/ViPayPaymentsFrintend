import {StyleSheet} from 'react-native';
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
    backgroundColor:colors.white,
    justifyContent:'space-evenly'
  },
  
  btnStyle: {
    width: moderateScale(160),
    height: moderateScale(160),
    borderRadius: moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  PagerView: {
    flex: 0.9,
    
    
  },
  getstartedbtn: {
    marginHorizontal:moderateScale(24),
    justifyContent:"center",
    alignItems:"center",
    
  
  },
  title: {
      fontFamily:fontFamily.RocGroteskBold,
      color: colors.OBSIDIAN,
      fontSize:40,
      marginTop:moderateScale(56.5),
      textAlign:'center'
  },
  content:{
    ...commonStyles.fontSize15,
    color:colors.OBSIDIAN,
    textAlign:'center',
    padding:moderateScale(24),
   
    
  },

  imgstyle:{
     
      alignSelf:'center'
  },
  
  viewpager:{
    flex:0.7,
   justifyContent:'center'

  },
  btngetstart:{
    flex:0.1,
    padding:moderateScale(24)
  }
});

export default styles;
