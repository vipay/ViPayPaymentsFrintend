import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderComp from '../../Components/HeaderComp';
import {ProfileListComp} from '../../Components/ProfileListComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import TransactionhistoryRenderList from './TransactionhistoryRenderList';

const TransactionHistory = ({navigation}) => {


  const goBack = () => {
    navigation.goBack();
  };

  const data=[
      {
          id:1,
          profile:imagePath.profile4,
          transType:'Paid to',
          value:'0.02223 BTC',
          name:'Abriel Ramirez',
          time:'Today  •  9:41 am',
          coin:imagePath.crypto1
      },{
        id:2,
        profile:imagePath.profile2,
        transType:'Received from',
        value:'0.34 ETH',
        name:'Liani Fesso',
        time:'Today  •  8:00 am',
        coin:imagePath.crypto2
    },
    {
        id:3,
        profile:imagePath.profile3,
        transType:'Paid to',
        value:'45739.32 VIP',
        name:'Liani Fesso',
        time:'Yesterday  •  7:13 pm',
        coin:imagePath.crypto3
    },
    {
        id:4,
        profile:imagePath.profile4,
        transType:'Paid to',
        value:'4.77 XRP',
        name:'Adrim Dhoke',
        time:'19 Feb, 2022  •  2:30 pm',
        coin:imagePath.crypto4
    },
    {
        id:5,
        profile:imagePath.profile6,
        transType:'Paid to',
        value:'230494.90 TRX',
        name:'Anni Nikola',
        time:'19 Feb, 2022  •  12:59 pm',
        coin:imagePath.crypto5
    },
    {
        id:6,
        profile:imagePath.profile5,
        transType:'Received from',
        value:'137.50 USDT',
        name:'Rushan Janne',
        time:'18 Feb, 2022  •  8:30 am',
        coin:imagePath.crypto6
    },
    {
        id:7,
        profile:imagePath.profile2,
        transType:'Paid to',
        value:'0.02223 BTC',
        name:'Abriel Ramirez',
        time:'Today  •  9:41 am',
        coin:imagePath.crypto1
    }
  ]

  const renderItem = ({item, index}) => {
    return (
      <TransactionhistoryRenderList
        key={index}
        item={item}
        index={index}
        
        // onPress={() =>
        //   navigation.navigate(navigationStrings.TRANSACTIONDETAILS)
        // } 
      />
    );
  };
  return(
      <WrapperContainer>
          <View style={styles.container}>
              <HeaderComp
              text={strings.Transactionhistory}
              image={imagePath.filterIcon}
              onBackPress={goBack}
              imagestyle={{height:moderateScale(24), width:moderateScale(24)}}
              />
               <View style={styles.flatList}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>

          </View>
      </WrapperContainer>
  )
}
export default TransactionHistory;