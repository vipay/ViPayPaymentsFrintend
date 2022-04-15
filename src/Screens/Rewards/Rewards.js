import React, {Component, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Keyboard,
  FlatList,
  ImageBackground,
  Dimensions
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
import RewardRenderList from './RewardRenderList';
import RBSheet from 'react-native-raw-bottom-sheet';
import {moderateScale} from '../../styles/responsiveSize';
import RewardDetails from './RewardDetails';
const heightt = Dimensions.get('window').height;
const Rewards = () => {
  const refRBSheet = useRef();
  const data = [
    {
      id: 1,
      logo: imagePath.ic_prime,
      price: '150 ViPay',
      desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      bgcolor: colors.E8F5FF,
    },
    {
      id: 2,
      logo: imagePath.ic_netflix,
      price: '150 ViPay',
      desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      bgcolor: colors.FCEFE7,
    },
    {
      id: 3,
      logo: imagePath.ic_google,
      price: '150 ViPay',
      desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      bgcolor: colors.FBF6D9,
    },
    {
      id: 4,
      logo: imagePath.ic_spotify,
      price: '150 ViPay',
      desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      bgcolor: colors.EDFFF1,
    },
    {
      id: 5,
      logo: imagePath.ic_pinterest,
      price: '150 ViPay',
      desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      bgcolor: colors.FCEFE7,
    },
    {
      id: 6,
      logo: imagePath.ic_google_fit,
      price: '150 ViPay',
      desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      bgcolor: colors.E8F5FF,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <RewardRenderList
        key={index}
        item={item}
        index={index}
        onPress={()=>refRBSheet.current.open()}
    
        // onPress={() =>
        //   navigation.navigate(navigationStrings.TRANSACTIONDETAILS)
        // }
      />
    );
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Text style={styles.header}>{strings.Rewards}</Text>
        <View style={styles.imgbgView}>
          <ImageBackground style={styles.imgbg} source={imagePath.reward_card}>
            <View style={styles.rewardcard}>
              <Text style={styles.Totalrewards}>{strings.Totalrewards}</Text>
              <Text style={styles.TotalrewardsValue}>
                {strings.TotalrewardsValue}
              </Text>
              <View style={styles.logoView}>
                <Text style={styles.TotalrewardsPrice}>
                  {strings.TotalrewardsPrice}
                </Text>
                <Image source={imagePath.reward_logo} />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.flatList}>
          <FlatList
            //   contentContainerStyle={{alignContent:"space-around"}}
            numColumns={2}
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={false}
          closeOnPressMask={true}
          height={heightt / 1}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.6)',
            },
            container: {
              // borderRadius:20,
            //   borderTopLeftRadius: 20,
            //   paddingTop: moderateScale(14),
            //   borderTopRightRadius: 20,
            backgroundColor: 'rgba(0,0,0,0.6)',
            },
          }}>
              <RewardDetails onPressCross={()=>refRBSheet.current.close()}/>
          {/* <FilterCryptoDetails onpress={()=>refRBSheet.current.close()}/> */}
        </RBSheet>
      </View>
    </WrapperContainer>
  );
};
export default Rewards;
