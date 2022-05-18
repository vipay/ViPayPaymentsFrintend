import {View, StyleSheet, Image, Pressable} from 'react-native';
// import React from 'react';
import React, {useState, useCallback, useEffect, Children} from 'react';
import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
  Time,
  Actions,
  Composer,
} from 'react-native-gifted-chat';
import styles from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import ChatBubble from './ChatBubble';
import ChatBottomComp from '../../Components/ChatBottomComp';

import {
  renderActions,
  renderComposer,
  renderInputToolbar,
  renderSend,
} from './InputToolbar';
import {moderateScale} from '../../styles/responsiveSize';
import actions from '../../redux/actions';
import {useSelector} from 'react-redux';
import {sendMessage} from '../../redux/actions/auth';
import {showError} from '../../helper/helperFunctions';

const Chat = ({navigation, route}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState(false);
  const id = useSelector(state => state.auth.userData?._id);
  const [name, setname] = useState('');
  const [profile, setprofile] = useState('');
  // const myid = useSelector(state => state.auth.userData?._id);

  
  useEffect(() => {
    setname(route.params.name);
    setprofile(route.params.profile);
  }, []);

  const renderActions = props => {
    
    return show ? (
     
      <Pressable style={styles.backicion} onPress={() => setShow(!show)}>
        <Image source={imagePath.ic_arrow_white} />
      </Pressable>
    ) : null;
  };

  const renderComposer = props => {
    return !show ? (
      <ChatBottomComp onPressChat={() => setShow(!show)} />
    ) : (
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.F1F1F2,
          marginRight: moderateScale(24),
          flex: 1,
        }}>
        <Composer
          {...props}
          textInputProps={{
            caretHidden:true
          }}
          textInputStyle={{
            minHeight: 48,
            marginRight: moderateScale(24),
            // lineHeight:18,
            color: colors.OBSIDIAN,
          }}
        />
        <Send
          {...props}
          alwaysShowSend
          containerStyle={{
            marginRight: moderateScale(16),
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor:"red",
            // height:24,
            // width:24,
          }}>
          <Image
            source={
              props.text.length > 0
                ? imagePath.ic_send_active
                : imagePath.ic_send_inactive
            }
          />
        </Send>
      </View>
    );
  };

  useEffect(() => {
    getMessages();
    const timer = setInterval(() => {
      getMessages();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const onSend = useCallback(async (messages = []) => {
    let apiData = {
      user_id: route.params.userid,
      message: messages[0].text,
      message_type: 'TEXT',
    };

    sendMessage(apiData)
      .then(data => console.log(data, 'sdvjbdsjhbj'))
      .catch(err => console.log(err, 'bjhbjbh'));
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  });

  async function getMessages() {
    try {
      let query = route.params.userid;

      actions
        .listmessage(query)
        .then(res => {
          console.log(res.data, 'JNKJBHHHDCS');
          const messages =
            res.data.length > 0
              ? res.data.map((data, index) => {
                  let message = {
                    _id: data?._id,
                    text: data?.message,
                    createdAt: data?.time,
                    user: {
                      _id: data.sender_id != null ? data.sender_id._id : '0',
                    },
                    index: index,
                  };

                  return message;
                })
              : [];

          setMessages(messages);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log('error riased', error);
    }
  }

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp
          text={name}
          image={profile == null ? imagePath.ic_profile_placeholder : profile}
          onBackPress={goBack}
          imagestyle={{height: 32, width: 32, borderRadius: 10}}
        />

        <GiftedChat
          messages={messages}
          // alignTop={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: id,
          }}
          wrapInSafeArea={false}
          isKeyboardInternallyHandled={false}
          renderAvatar={null}
          renderBubble={props => <ChatBubble {...props} />}
          renderInputToolbar={renderInputToolbar}
          renderActions={renderActions}
          renderSend={renderSend}
          renderComposer={renderComposer}
        />
      </View>
    </WrapperContainer>
  );
};

export default Chat;




