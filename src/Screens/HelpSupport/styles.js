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
    backgroundColor:colors.white,   
  },
  inputfieldStyle:{
    height:moderateScale(56),
    backgroundColor:colors.grayinput,
    marginHorizontal:moderateScale(24),
    borderRadius:16,
    marginTop:moderateScale(16),
    justifyContent:'center',
    paddingHorizontal:moderateScale(16)

  },
  input:{
    marginHorizontal:moderateScale(16),
    lineHeight:23,
    
  },
  message:{
    height:moderateScale(144),
    backgroundColor:colors.grayinput,
    marginHorizontal:moderateScale(24),
    borderRadius:16,
    marginTop:moderateScale(16),
    // justifyContent:'center'

  },
  messageinput:{
    flex:1,
    marginHorizontal:moderateScale(16),
    // backgroundColor:"red",
    textAlignVertical:'top'
    

  },
  helpdesc:{
    marginHorizontal:moderateScale(24),
    marginTop:moderateScale(16),
    ...commonStyles.fontSize14,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.grayprice,
  },
  helpform:{
    flex:1,
    // backgroundColor:'red'
  },
  btn:{
    flex:1,
    marginHorizontal:moderateScale(24),
    marginBottom:moderateScale(24),
    justifyContent:"flex-end",
    alignItems:'flex-end',
    // backgroundColor:'yellow',
    // alignSelf:'flex-end'

  },
  inputfieldnumer:{
    height:moderateScale(56),
    backgroundColor:colors.grayinput,
    marginHorizontal:moderateScale(24),
    borderRadius:16,
    marginTop:moderateScale(16),
    alignItems:"center",
    // justifyContent:'center',
    paddingHorizontal:moderateScale(16),
    // flexDirection:"row"

  },
  text:{
    ...commonStyles.fontSize15,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.OBSIDIAN,

  },
  line:{
    borderLeftWidth:1,
    borderColor:colors.D9D9D9,
    height:moderateScale(40),
    marginHorizontal:moderateScale(16)

  }

})
export default styles;