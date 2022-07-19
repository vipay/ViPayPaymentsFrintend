import React, {Component, useState, useEffect} from 'react';
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
import actions from '../../redux/actions';

const ChatUsersList = ({navigation}) => {
  const [data, setdata] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', async () => {
  //     chatlist();
  //     })
      
  //     return unsubscribe;
   
  // }, []);
  // useEffect(() => {
  //   chatlist();
  //   const timer = setInterval(() => {
  //     chatlist();
  //   }, 2000);
  //   return () => clearInterval(timer);
  // }, []);

  // const chatlist = () => {
  //   actions
  //     .listchats()
  //     .then(res => {
  //       // console.log(res.data, 'whbdcbxj');
  //       setdata(res.data);
  //       console.log(data, 'ajhgcjhb');
  //       // navigation.navigate(navigationStrings.CHAT)
  //     })
  //     .catch();
  // };

  const renderItem = ({item, index}) => {
    console.log(item.reciver_id._id, 'dgcj');
    return (
      <ChatUserRenderList
        key={index}
        item={item}
        index={index}
        // onPress={() =>
        //   navigation.navigate(navigationStrings.CHAT,{userid:item.reciver_id._id})
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
