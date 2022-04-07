import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
    height,
    moderateScale,
    moderateScaleVertical,
    width,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop:moderateScale(24)
    },
    header: {
    
        flexDirection: 'row',
        paddingHorizontal:moderateScale(24),
    justifyContent:'space-between'    },
    imghomecard: {
        marginTop:moderateScale(24),
        // flex: 0.35,
        height:moderateScale(192),
        width:'100%',
        // backgroundColor:'red',
        shadowColor: '#42D0B7',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation:18,
        // margin:24,

        // alignSelf:'center'
        // paddingHorizontal:moderateScale(24)
    },
    homecardView: {
        flex: 0.3,
     
    },
    viewTotalValue: {
        flexDirection: 'row',
        // padding: moderateScale(24),
        flex: 0.47,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    totalvalue: {
        ...commonStyles.fontSize16,
        color: colors.txtwhite,
        fontFamily: fontFamily.poppinsRegular,
    },
    value: {
        ...commonStyles.fontSize24,
        color: colors.txtwhite,
        fontFamily: fontFamily.RocGroteskBold
    },
    homecardLine: {
        height: 1,
        opacity:0.6,
        width: '80%',
        alignSelf: 'center',
        borderBottomWidth:1,
        borderBottomColor:colors.whiteOpacity25,
    },

    homecardButtons: {
        flexDirection: 'row',
        flex: 0.4,
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    txtstylehomecard: {
        ...commonStyles.fontSize12,
        color: colors.txtwhite,
        fontFamily: fontFamily.poppinsSemibold,
        marginTop: moderateScale(5)
    },
    pressable: {
        alignItems: 'center',
    },
    flatList:{
        flex:1
    },
    profilepic:{
        height:moderateScale(32),
        width:moderateScale(32),
        borderRadius:10
    },
    bgimg:{
        width:'100%',
        height:'100%',
        // backgroundColor:'yellow'
        // resizeMode:'contain'
        

        
    }
})

export default styles;