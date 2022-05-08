import { StyleSheet } from 'react-native';
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
    // marginTop:moderateScale(24),
  },

  PagerView: {
    flex:1,
    
  },
  getstartedbtn: {
    // marginHorizontal: moderateScale(24),
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    fontSize: 40,
    marginHorizontal:moderateScale(24),
    
    textAlign: 'center'
  },
  content: {
    ...commonStyles.fontSize15,
    color: colors.OBSIDIAN,
    textAlign: 'center',
    marginTop:moderateScale(23),
    marginHorizontal:moderateScale(24),
    fontFamily:fontFamily.poppinsLight
  },

  imgstyle: {
    alignSelf: 'center',
    height:moderateScale(300),
    // width:moderateScale(264),
    width:'85%'
    // resizeMode:
   
  },
onboardcontentView: {
 justifyContent:'flex-end',
    // justifyContent:'space-evenly'
  },
  btngetstart: {
    flex: 0.1,
    justifyContent: "flex-end",
    padding: moderateScale(24),
    
  },
  activeStyle: {
    backgroundColor: colors.citrine,
    width: 40,
    height: 8,
    borderRadius: 4,
    marginHorizontal:moderateScale(4) 

  },
  inactiveStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.BABABD,
    marginHorizontal:moderateScale(4)
  },
  dotsView: {
    flex: 0.1,
    alignItems: 'center',
    flexDirection:"row",
   
    justifyContent:'center'
    
  },
  onboardView: {
    flex:0.8,
    
  }
});

export default styles;
