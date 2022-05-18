import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Bubble, Time} from 'react-native-gifted-chat';
import {Text, View, Image} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import moment from 'moment';
import {moderateScale} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import {useSelector} from 'react-redux';

const ChatBubble = props => {
  const id = useSelector(state => state.auth.userData?._id);
  return (
    <TouchableOpacity
      style={{paddingHorizontal: 24,}}
      //   activeOpacity={0.8}
      
    >
      {/* <View > */}
      <Bubble
        {...props}
        
      
        wrapperStyle={{
          left: {
          
            backgroundColor: colors.grayinput,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 10,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(8),
          },
          right: {
            backgroundColor: colors.Blue,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 0,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(8),
          },
        }}
        textStyle={{
          left: {
            fontSize: 15,
            fontFamily: fontFamily.poppinsRegular,
            color: colors.OBSIDIAN,
            lineHeight: 22,
          },
          right: {
            fontSize: 15,
            fontFamily: fontFamily.poppinsRegular,
            color: colors.white,
            lineHeight: 22,
          },
        }}
        renderTime={(...props) => <Time {...props} currentMessage={''} />}
      />
      
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
           justifyContent:props?.currentMessage?.user?._id == id ?"flex-end":"flex-start"
          // backgroundColor:"red",
        }}>
        <Image
          source={
            props?.currentMessage?.user?._id == id
              ? imagePath.ic_read_check
              : null
          }
          style={{
            
            marginTop: 8,
          }}
        />
        <Text
          style={{
           
            color: colors.grayprice,
            textAlign:
              props?.currentMessage?.user?._id == id ? 'right' : 'left',
            fontFamily: fontFamily.poppinsRegular,
            fontSize: 13,
            marginTop: 8,
            marginBottom:16,
          }}>
          {moment(props?.currentMessage?.createdAt).format('hh:mm a')}
        </Text>
      </View>

     
    </TouchableOpacity>
  );
};

export default ChatBubble;
