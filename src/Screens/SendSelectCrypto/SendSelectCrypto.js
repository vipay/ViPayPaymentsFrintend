import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';

const SendSelectCrypto=()=>
{
    return(
        <WrapperContainer>
            <View style={styles.container}>

            </View>
        </WrapperContainer>
    )
}