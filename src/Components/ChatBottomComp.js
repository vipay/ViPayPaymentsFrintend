import { StyleSheet, Text, View , Pressable, Image} from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import fontFamily from '../styles/fontFamily'
import imagePath from '../constants/imagePath'
import strings from '../constants/lang'
import navigationStrings from '../constants/navigationStrings'




const ChatBottomComp = ({onPressChat, onpressrequest,onpressSend}) => {

  return (
    <View style={styles.main}>
     <View style={styles.bottom}>
          <View style={styles.bluebutton}>
            <Pressable 
            onPress={onpressSend}
            // onPress={() => navigation.navigate(navigationStrings.SENDSELECTCRYPTO)}
            style={styles.buttonstyle}
            >
              <Image source={imagePath.send} />
              <Text style={styles.buttontxt}>{strings.send}</Text>
            </Pressable >
            <Pressable 
            onPress={onpressrequest}

            // onPress={() => navigation.navigate(navigationStrings.REQUESTSELECTCRYPTO)}
            style={styles.buttonstyle}>
              <Image source={imagePath.receive} />
              <Text style={styles.buttontxt}>{strings.request}</Text>
            </Pressable>
          </View>
          <Pressable style={styles.messagebtn}
          onPress ={onPressChat}
          >
              <View style={styles.messageborder}>
                  <Image source={imagePath.ic_message}/>
              </View>

          </Pressable>
        </View>
    </View>
  )
}

export default ChatBottomComp

const styles = StyleSheet.create({
    bottom: {
        // flex: 0.1,
        height:moderateScale(71),
        //   backgroundColor:"red",
        // backgroundColor:colors.white,
        paddingHorizontal: moderateScale(24),
        paddingVertical: moderateScaleVertical(8),
        flexDirection: 'row',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
          shadowColor: "#0000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,
          
          elevation: 1,
         
          
    
      },
      bluebutton: {
        //   backgroundColor:'yellow',
        flex: 0.75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      buttonstyle: {
        backgroundColor: colors.Blue,
        flexDirection: 'row',
        height: moderateScale(48),
        width: '48.5%',
        borderRadius: 10,
        alignItems: 'center',
        // justifyContent: 'space-between',
        justifyContent:'center',
        padding:moderateScale(16)
      },
      buttontxt: {
        ...commonStyles.fontSize13,
        fontFamily: fontFamily.poppinsSemibold,
        color: colors.white,
        // backgroundColor:'red'
        
        marginLeft: moderateScale(8),
      },
      main:{
        //   backgroundColor:"pink",
          flex:1,
          justifyContent:"flex-end",
        //   marginBottom:moderateScale(8)
      },
      messagebtn:{
        flex:0.25,
      //   backgroundColor:'red',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    messageborder:{
        height:moderateScale(48),
        width:moderateScale(48),
        borderColor:colors.F1F1F2,
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
})