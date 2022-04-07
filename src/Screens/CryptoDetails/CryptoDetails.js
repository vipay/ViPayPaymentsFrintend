import React, {Component, useRef} from 'react';
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
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import RBSheet from 'react-native-raw-bottom-sheet';
import FilterCryptoDetails from './FilterCryptoDetails';
import colors from '../../styles/colors';

const CryptoDetails = ({navigation}) => {
  const refRBSheet = useRef();
  const data = [
    {
      id: 1,
      profilepic: imagePath.crypto1,
      name: 'Abriel Ramirez',
      value: '0.02223 BTC',
      time: 'Today  •  9:41 am',
      status: 'Sent',
    },
    {
      id: 2,
      profilepic: imagePath.crypto1,
      name: 'Liani Fesso',
      value: '0.01249 BTC',
      time: 'Today  •  8:00 am',
      status: 'Received',
    },
    {
      id: 3,
      profilepic: imagePath.crypto1,
      name: 'Josef Fransis',
      value: '0.02223 BTC',
      time: 'Yesterday  •  7:13 pm',
      status: 'Sent',
    },
    {
      id: 4,
      profilepic: imagePath.crypto1,
      name: 'Adrim Dhoke',
      value: '0.02223 BTC',
      time: '19 Feb, 2022  •  2:30 pm',
      status: 'Sent',
    },
    {
      id: 5,
      profilepic: imagePath.crypto1,
      name: 'Anni Nikola',
      value: '0.02223 BTC',
      time: '19 Feb, 2022  •  12:59 pm',
      status: 'Sent',
    },
    {
      id: 6,
      profilepic: imagePath.crypto1,
      name: 'Rushan Janne',
      value: '0.02223 BTC',
      time: '18 Feb, 2022  •  8:30 am',
      status: 'Sent',
    },
    {
      id: 7,
      profilepic: imagePath.crypto1,
      name: 'Mitchell Curtis',
      value: '0.01249 BTC',
      time: '17 Feb, 2022  •  5:15 pm',
      status: 'Received',
    },
    {
      id: 8,
      profilepic: imagePath.crypto1,
      name: 'Abriel Ramirez',
      value: '0.02223 BTC',
      time: 'Today  •  9:41 am',
      status: 'Sent',
    },
    {
      id: 9,
      profilepic: imagePath.crypto1,
      name: 'Abriel Ramirez',
      value: '0.02223 BTC',
      time: 'Today  •  9:41 am',
      status: 'Sent',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <CryptoDetailsRenderList
        key={index}
        item={item}
        index={index}
        onPress={() =>
          navigation.navigate(navigationStrings.TRANSACTIONDETAILS)
        }
      />
    );
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp
          text={strings.bitcoin}
          image={imagePath.filterIcon}
          onBackPress={goBack}
          onPress={()=>refRBSheet.current.open()}
        />
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
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.bottotab}>
          <View style={{backgroundColor:colors.Blue}}>

          </View>
        </View>
        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        
        customStyles={{
        
           
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.6)"
           
          },
          container:{
            borderRadius:20,
            paddingTop:moderateScale(14)
          }
          
          
        }}>
          <FilterCryptoDetails onpress={()=>refRBSheet.current.close()}/>

        </RBSheet>
      </View>
    </WrapperContainer>
  );
};
export default CryptoDetails;
