import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const ChatUserRenderList = ({item, index, onPress}) => {
  return (
      <Pressable style={styles.conatiner} onPress={onPress}>
          <Image style={styles.profile} source={item.profileimg}/>
          <View style={styles.subconainer}>
              <View style={styles.nameView}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.messageView}>
              <Image style={styles.status}source={item.status}/>
              <Text style={styles.message}>{item.message}</Text>
              </View>
          </View>
          
      </Pressable>
  )
}
export default ChatUserRenderList;

const styles = StyleSheet.create({
    conatiner:{
        // flex:0.1,s
        // height:moderateScale(72),
        backgroundColor:colors.white,
        flexDirection:"row",
    },
    profile:{
        height:moderateScale(48),
        width:moderateScale(48),
        borderRadius:24,
        marginTop:moderateScale(8),
        marginLeft:moderateScale(24),

    },
    nameView:{
        flexDirection:'row',
        // flex:1,
        justifyContent:'space-between',
        marginTop:moderateScale(8),
        marginRight:moderateScale(24)
        

    },
    subconainer:{
        flex:1,
        marginLeft:moderateScale(16),
        borderBottomColor:colors.F1F1F2,
        borderBottomWidth:1,

    },
    name:{
        ...commonStyles.fontSize16,
        fontFamily:fontFamily.RocGroteskBold,
        color:colors.OBSIDIAN,
        height:moderateScale(24)

    },
    time:{
        ...commonStyles.fontSize12,
        fontFamily:fontFamily.poppinsRegular,
        color:colors.grayprice
    },
    message:{
        ...commonStyles.fontSize14,
        fontFamily:fontFamily.poppinsRegular,
        color:colors.grayprice,
        marginRight:moderateScale(24),
        // marginBottom:moderateScale(16),
        alignItems:'center',
        marginLeft:8
        // height:moderateScale(24),s

    },
    messageView:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:moderateScale(16),
        // backgroundColor:''
    },
    status:{
        // marginRight:moderateScale(8),
    }
})
