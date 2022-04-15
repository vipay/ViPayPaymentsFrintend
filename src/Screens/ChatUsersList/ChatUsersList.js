import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Keyboard,
  FlatList,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ChatUserRenderList from './ChatUserRenderList';

const ChatUsersList = () => {
  const data = [
    {
      id: 1,
      profileimg: imagePath.profile2,
      name: 'Liani Fesso',
      time: 'Just now',
      message: 'Thank you for the BTC 👍 ',
    },
    {
      id: 2,
      profileimg: imagePath.profile3,
      name: 'Josef Fransis',
      time: '5 mins',
      message: 'See on next weekend! ',
      status: imagePath.ic_sent_check,
    },
    {
      id: 3,
      profileimg: imagePath.profile4,
      name: 'Adrim Dhoke',
      time: '4 hrs',
      message: 'Hi Bro.. How are you? ',
    },
    {
      id: 4,
      profileimg: imagePath.profile5,
      name: 'Anni Nikola',
      time: 'Yesterday',
      message:
        'Actually I wanted to check with you about your online business plan on… ',
    },
    {
      id: 5,
      profileimg: imagePath.profile6,
      name: 'Rushan Janne',
      time: '17 Feb, 2022',
      message: 'Requesting 400 TRX',
    },
    {
      id: 6,
      profileimg: imagePath.profile5,
      name: 'Mitchell Curtis',
      time: '17 Feb, 2022',
      message: 'I am good. You tell?',
      status: imagePath.ic_read_check,
    },
    {
      id: 7,
      profileimg: imagePath.profile3,
      name: 'Betty Dixon',
      time: '16 Feb, 2022',
      message: 'Ok, have a good day!',
    },
    {
      id: 8,
      profileimg: imagePath.profile4,
      name: 'Karen Castillo',
      time: '16 Feb, 2022',
      message: 'Ok, have a good day!',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <ChatUserRenderList
        key={index}
        item={item}
        index={index}
        // onPress={() =>
        //   navigation.navigate(navigationStrings.TRANSACTIONDETAILS)
        // }
      />
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text style={styles.heading}>{strings.Chats}</Text>

        <View style={styles.search}>
          <TextInput
            spellCheck={true}
            placeholder={strings.Chat_search_placeholder}
            placeholderTextColor={colors.lightgray}
            style={styles.searchtxt}></TextInput>
          <Pressable>
            <Image source={imagePath.searchgrey} />
          </Pressable>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ChatUsersList;
