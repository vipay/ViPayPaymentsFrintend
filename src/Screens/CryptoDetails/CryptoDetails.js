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
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import CryptoDetailsRenderList from './CryptoDetailsRenderList';

const CryptoDetails = () => {
  const data = [
    {
      id: 1,
      profilepic: imagePath.crypto1,
      name: 'Abriel Ramirez',
      value: '0.02223 BTC',
      time: 'Today  •  9:41 am',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
    {
      id: 2,
      profilepic: imagePath.crypto1,
      name: 'Liani Fesso',
      value: '0.01249 BTC',
      time: 'Today  •  8:00 am',
      status: 'Received',
      statusindicator: imagePath.ic_received,
    },
    {
      id: 3,
      profilepic: imagePath.crypto1,
      name: 'Josef Fransis',
      value: '0.02223 BTC',
      time: 'Yesterday  •  7:13 pm',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
    {
      id: 4,
      profilepic: imagePath.crypto1,
      name: 'Adrim Dhoke',
      value: '0.02223 BTC',
      time: '19 Feb, 2022  •  2:30 pm',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
    {
      id: 5,
      profilepic: imagePath.crypto1,
      name: 'Anni Nikola',
      value: '0.02223 BTC',
      time: '19 Feb, 2022  •  12:59 pm',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
    {
      id: 6,
      profilepic: imagePath.crypto1,
      name: 'Rushan Janne',
      value: '0.02223 BTC',
      time: '18 Feb, 2022  •  8:30 am',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
    {
      id: 7,
      profilepic: imagePath.crypto1,
      name: 'Mitchell Curtis',
      value: '0.01249 BTC',
      time: '17 Feb, 2022  •  5:15 pm',
      status: 'Received',
      statusindicator: imagePath.ic_received,
    },
    {
      id: 8,
      profilepic: imagePath.crypto1,
      name: 'Abriel Ramirez',
      value: '0.02223 BTC',
      time: 'Today  •  9:41 am',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
    {
      id: 9,
      profilepic: imagePath.crypto1,
      name: 'Abriel Ramirez',
      value: '0.02223 BTC',
      time: 'Today  •  9:41 am',
      status: 'Sent',
      statusindicator: imagePath.ic_send,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.titleview}>
          <Image source={imagePath.backIcon} />
          <Text style={styles.coinname}>{strings.bitcoin}</Text>
        </Pressable>
        <Pressable>
          <Image source={imagePath.filterIcon} />
        </Pressable>
      </View>
      <View style={styles.cryptoDetailsCard}>
        <ImageBackground
          source={imagePath.crypto_detail_card}
          resizeMode="contain"
          style={styles.ImageBackground}>
          <View style={styles.detailsView}>
            <View style={styles.logoimgview}>
              <Image style={styles.btcIcon} source={imagePath.bitcoinIcon} />
            </View>
            <View style={styles.textview}>
              <Text style={styles.value}>{strings.details_value}</Text>
              <Text style={styles.price}>{strings.details_price}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={data}
          style={{marginTop:moderateScale(24)}}
          renderItem={({item, index}) => (
            <CryptoDetailsRenderList  item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};
export default CryptoDetails;
