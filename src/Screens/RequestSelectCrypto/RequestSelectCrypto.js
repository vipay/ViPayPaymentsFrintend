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
import colors from '../../styles/colors';
import SelectCryptoComp from '../../Components/SelectCryptoComp';

const data=[
  {
    id:1,
    logo:imagePath.crypto1,
    name:'Bitcoin',
    available:'Available: 0.5026703 BTC',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:2,
    logo:imagePath.crypto2,
    name:'Ethereum',
    available:'Available: 0.34 ETH',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:3,
    logo:imagePath.crypto3,
    name:'ViPay',
    available:'Available: 45739.32 VIP',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:4,
    logo:imagePath.crypto4,
    name:'Ripple',
    available:'Available: 4.77 XRP',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:5,
    logo:imagePath.crypto5,
    name:'Tron',
    available:'Available: 230494.90 TRX',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:6,
    logo:imagePath.crypto6,
    name:'USDT Tether',
    available:'Available: 137.50 USDT',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:7,
    logo:imagePath.crypto2,
    name:'Ethereum',
    available:'Available: 0.34 ETH',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:8,
    logo:imagePath.crypto3,
    name:'ViPay',
    available:'Available: 45739.32 VIP',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:9,
    logo:imagePath.crypto4,
    name:'Ripple',
    available:'Available: 4.77 XRP',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:10,
    logo:imagePath.crypto5,
    name:'Tron',
    available:'Available: 230494.90 TRX',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:11,
    logo:imagePath.crypto6,
    name:'USDT Tether',
    available:'Available: 137.50 USDT',
    icon:imagePath.ic_gray_arrow,
  },
]

const RequestSelectCrypto = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <SelectCryptoComp
        data={data}
        onlistpress={() => navigation.navigate(navigationStrings.REQUESTENTERAMOUNT)}
        onBackPress={goBack}
        />
      </View>
     </WrapperContainer>
  );
};
export default RequestSelectCrypto;