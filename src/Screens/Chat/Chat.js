import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import styles from './styles';
// import styles from 'react-native-indicators/src/components/ball-indicator/styles';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';


const Chat = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Yeah! I will be thankful 🤩',
        createdAt: new Date('2022-04-18'),
        
        user: {
          _id: 2,
        },
      },
      {
        _id: 1,
        text: `I have some BTC. Need some? `,
        createdAt: new Date('2022-04-18'),
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: 'Yeah for sure. I will be free 😀',
        createdAt: new Date('2022-04-18'),
        user: {
          _id: 2,
        },
      },
      {
        _id: 1,
        text: `Ohh! It's ok. Will plan next time. `,
        createdAt: new Date('2022-04-18'),
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: `I am good too. I'll be busy on this weekend so can't attend the function. `,
        createdAt: new Date('2022-04-10'),
        user: {
          _id: 2,
        },
      },
      {
        _id: 1,
        text: "I'm good buddy.. what about you?" ,
        createdAt: new Date('2022-04-10'),
        showUserAvatar:false,
        user: {
          _id: 1,
        },
      },
      {
        _id: 2,
        text: 'Hey Aiden! How are you?',
        createdAt: new Date('2022-04-10'),
        showUserAvatar:false,
        user: {
          _id: 2,
        },
      },
    
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp
          text={strings.chatUserName}
          image={imagePath.profile3}
          onBackPress={goBack}
          imagestyle={{height: 32, width: 32, borderRadius: 10}}
        />

        <GiftedChat
          messages={messages}
          // alignTop={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          wrapInSafeArea={false}
          isKeyboardInternallyHandled={false}
          // bottomOffset={imagePath.ic_send_active}
          
         
        />
      </View>
    </WrapperContainer>
  );
};

export default Chat;
