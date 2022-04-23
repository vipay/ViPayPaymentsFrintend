import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';

import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const TransactionhistoryRenderList = ({item, index}) => {
  return (
      <View style={styles.container}>
          <View style={styles.main}>
              <Image style={styles.profilepic} source={item.profile}/>
              <View style={styles.subconatin}>
              <View style={styles.paid_received}>
                  <Text style={styles.heading}>{item.transType}</Text>
                  <Text style={styles.value}>{item.value}</Text>
              </View>
              <Text style={styles.name}>{item.name}</Text>     
              <View style={styles.timeView}>
                  <Text style={styles.time}>{item.time}</Text>
                  <Image style={styles.coinlogo} source={item.coin}/>
              </View>
              </View>
          </View>

      </View>
  )
}
export default TransactionhistoryRenderList;

const styles = StyleSheet.create({
    container: {
    //   flex: 0.1,
      paddingTop: moderateScale(8),
      flexDirection: 'row',
    //   paddingLeft: moderateScale(24),
    },
    profilepic:{

        height:moderateScale(48),
        width:moderateScale(48),
        borderRadius:24,
       

    },
    main:{
        flex:1,
        flexDirection:'row',
        marginLeft:moderateScale(24),
        borderBottomWidth:moderateScale(1),
        borderColor:colors.F1F1F2,
        // marginBottom:moderateScale(16),
        // marginTop:moderateScale(16),
        
    },
    paid_received:{
        // flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    subconatin:{
        flex:1,
    //    marginHorizontal:moderateScale(24),
    marginLeft:moderateScale(16),
    marginRight:moderateScale(24),

    },
    timeView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:moderateScale(8)
        // alignItems:"center",

    },
    coinlogo:{
        height:moderateScale(24),
        width:moderateScale(24),

    },
    heading:{
        ...commonStyles.fontSize16,
        fontFamily:fontFamily.RocGroteskBold,
        color:colors.OBSIDIAN,
        lineHeight:35,


    },
    value:{
         ...commonStyles.fontSize15,
         fontFamily:fontFamily.poppinsRegular,
         color:colors.OBSIDIAN,
         lineHeight:35,
    },
    name:{
        ...commonStyles.fontSize14,
        fontFamily:fontFamily.poppinsRegular,
        color:colors.grayprice,
        // lineHeight:24,

    },
    time:{
        ...commonStyles.fontSize14,
        fontFamily:fontFamily.poppinsRegular,
        color:colors.grayprice,
       
        lineHeight:35,
        
    }

})