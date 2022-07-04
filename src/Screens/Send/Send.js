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
import SendRenderList from './SendRenderList';

const Send = ({navigation}) => {
  const data = [
    {
      id: 1,
      profilepic: imagePath.profile,
      name: 'Alfred Wolfe',
      phoneNo: '+971 568 256 8874',
      user: true,
    },
    {
      id: 2,
      profilepic: imagePath.profile3,
      name: 'Abriel Ramirez',
      phoneNo: '+971 684 987 6479',
      user: true,
    },
    {
      id: 3,
      profilepic: imagePath.profile4,
      name: 'Adrim Dhoke',
      phoneNo: '+971 567 265 8742',
      user: true,
    },
    {
      id: 4,
      profilepic: imagePath.profile5,
      name: 'Anni Nikola',
      phoneNo: '+971 287 654 2688',
      user: false,
    },
    {
      id: 5,
      profilepic: imagePath.profile6,
      name: 'Allie Wright',
      phoneNo: '+971 658 254 1103',
      user: true,
    },
    {
      id: 6,
      profilepic: imagePath.profile2,
      name: 'Blice Lloyd',
      phoneNo: '+971 658 924 2233',
      user: false,
    },
    {
      id: 7,
      profilepic: imagePath.profile5,
      name: 'Betty Dixon',
      phoneNo: '+971 445 658 3321',
      user: true,
    },
    {
      id: 8,
      profilepic: imagePath.profile2,
      name: 'Blice Lloyd',
      phoneNo: '+971 658 924 2233',
      user: false,
    },
    {
      id: 9,
      profilepic: imagePath.profile5,
      name: 'Betty Dixon',
      phoneNo: '+971 445 658 3321',
      user: true,
    },
    {
      id: 10,
      profilepic: imagePath.profile2,
      name: 'Blice Lloyd',
      phoneNo: '+971 658 924 2233',
      user: true,
    },
    {
      id: 11,
      profilepic: imagePath.profile5,
      name: 'Betty Dixon',
      phoneNo: '+971 445 658 3321',
      user: true,
    },
  ];
  const goBack = () => {
    navigation.goBack();
  };
  const renderItem = ({item, index}) => {
    return (
      <SendRenderList
        key={index}
        item={item}
        index={index}
        onPress={() =>
          navigation.navigate(navigationStrings.SENDUSER)
        }
      />
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp
          text={strings.send}
          image={imagePath.searchblack}
          imagestyle={{height: moderateScale(24), width: moderateScale(24)}}
          onBackPress={goBack}
          onPress={()=> navigation.navigate(navigationStrings.SEARCH)}
    headerStyle={{marginVertical:moderateScale(16)}}

        />
        <View style={styles.sendBg}>
          {/* <View style={styles.bgImgView}> */}
            <ImageBackground
             resizeMode="contain"
             style={styles.bgImg} source={imagePath.sendBg}>
              <View style={styles.ButtonsView}>
                <Pressable style={styles.pressable} onPress={()=> navigation.navigate(navigationStrings.SENDWALLET)}>
                  <Image source={imagePath.ic_wallet_white} />
                  <Text style={styles.buttonTxt}>{strings.Wallet}</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Image source={imagePath.scan} />
                  <Text style={styles.buttonTxt}>{strings.scan}</Text>
                </Pressable>
                <Pressable style={styles.pressable}  onPress={()=> navigation.navigate(navigationStrings.SENDUCID)}>
                  <Image source={imagePath.ucid} />
                  <Text style={styles.buttonTxt}>{strings.ucid}</Text>
                </Pressable>
              </View>
            </ImageBackground>
          {/* </View> */}
        </View>
        <View style={styles.flatList}>
            <Text style={styles.a}>A</Text>
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
export default Send;
