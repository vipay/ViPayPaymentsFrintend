import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Keyboard,
  FlatList,
  ImageBackground
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

const Rewards = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text style={styles.header}>{strings.Rewards}</Text>
        <View style={styles.imgbgView}>
            <ImageBackground style={styles.imgbg} source={imagePath.reward_card}>

            </ImageBackground>
        </View>
      </View>
    </WrapperContainer>
  );
};
export default Rewards;
