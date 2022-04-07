//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import HomeRenderList from './HomeRenderList';
import styles from './styles';
import WrapperContainer from '../../Components/WrapperContainer';


// create a component
const Home = ({navigation}) => {
  const data = [
    {
      id: 1,
      logo: imagePath.crypto1,
      name: 'Bitcoin',
      value: '0.5026703 BTC',
      price: '$49,214.52',
      change: '17.23%',
      indicator: imagePath.ic_up_green,
      status: 3,
    },
    {
      id: 2,
      logo: imagePath.crypto2,
      name: 'Ethereum',
      value: '0.34 ETH',
      price: '$2,335.60',
      change: '10.9%',
      ndicator: imagePath.ic_down_red,
      status: 2,
    },
    {
      id: 3,
      logo: imagePath.crypto3,
      name: 'ViPay',
      value: '45739.32 VIP',
      price: '$0.50',
      change: '17.23%',
      indicator: imagePath.ic_up_green,
      status: 3,
    },
    {
      id: 4,
      logo: imagePath.crypto4,
      name: 'Ripple',
      value: '0.4.77 XRP',
      price: '$1.34',
      change: '5.34%',
      indicator: imagePath.ic_stable,
      status: 1,
    },
    {
      id: 5,
      logo: imagePath.crypto5,
      name: 'Tron',
      value: '230494.90 TRX',
      price: '$0.013',
      change: '4.25%',
      indicator: imagePath.ic_up_green,
      status: 4,
    },
    {
      id: 6,
      logo: imagePath.crypto6,
      name: 'USDT Tether',
      value: '137.50 USDT',
      price: '$0.013',
      change: '4.25%',
      indicator: imagePath.ic_up_green,
      status: 2,
    },
  ];
  const renderItem = ({item, index}) => {
    return <HomeRenderList key={index} item={item} index={index} 
    onPress={() => navigation.navigate(navigationStrings.CRYPTODETAILS,{DATA : data[item.name]})} />;
  };

  const Button = ({}) => {
    return (
      
      <Pressable style={styles.pressable}>
        <Image source={imagePath.send} />
        <Text style={styles.txtstylehomecard}>{strings.send}</Text>
      </Pressable>
    );
  };
  return (
    <WrapperContainer>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={imagePath.logo_title_header}></Image>
        <Image style={styles.profilepic} source={imagePath.profile}/>
      </View>

      {/* home card */}
      <View style={styles.imghomecard}>
        <ImageBackground
          source={imagePath.home_card}
          resizeMode='center'
          style={styles.bgimg}>
          <View style={styles.viewTotalValue}>
            <Text style={styles.totalvalue}>{strings.totalvalue}</Text>
            <Text style={styles.value}>{strings.value}</Text>
          </View>
          <View style={styles.homecardLine}></View>
          <View style={styles.homecardButtons}>
            <Pressable style={styles.pressable}>
              <Image source={imagePath.send} />
              <Text style={styles.txtstylehomecard}>{strings.send}</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={imagePath.receive} />
              <Text style={styles.txtstylehomecard}>{strings.receive}</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={imagePath.scan} />
              <Text style={styles.txtstylehomecard}>{strings.scan}</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
              <Image source={imagePath.ucid} />
              <Text style={styles.txtstylehomecard}>{strings.ucid}</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      {/* flatist */}
      <View style={styles.flatList}>
      <FlatList
          data={data}
          style={{marginTop: moderateScale(24)}}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Home;
