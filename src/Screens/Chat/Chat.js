import {View, Text,StyleSheet} from 'react-native';
// import React from 'react';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import styles from './styles'
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
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          // avatar: 'https://placeimg.com/140/140/any',
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
     imagestyle={{height:32, width:32, borderRadius:10}}
    />
    
   
    
      
      <GiftedChat
      messages={messages}
      // alignTop={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      // bottomOffset={imagePath.ic_send_active}
      
      
    
    />
    </View>
    </WrapperContainer>
  );
};

export default Chat;
