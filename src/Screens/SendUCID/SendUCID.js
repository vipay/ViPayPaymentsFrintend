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
    logo:imagePath.profile,
    name:'Liani Fesso',
    available:'9875642546@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:2,
    logo:imagePath.profile2,
    name:'Josef Fransis',
    available:'5648726499@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:3,
    logo:imagePath.profile3,
    name:'Adrim Dhoke',
    available:'7524952187@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:4,
    logo:imagePath.profile4,
    name:'Anni Nikola',
    available:'9873216540@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:5,
    logo:imagePath.profile5,
    name:'Rushan Janne',
    available:'8732154972@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:6,
    logo:imagePath.profile6,
    name:'Mitchell Curtis',
    available:'7752648845@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:7,
    logo:imagePath.profile,
    name:'Betty Dixon',
    available:'4587325792@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:8,
    logo:imagePath.profile2,
    name:'Karen Castillo',
    available:'7824651205@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:9,
    logo:imagePath.profile3,
    name:'Liani Fesso',
    available:'9875642546@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:10,
    logo:imagePath.profile4,
    name:'Adrim Dhoke',
    available:'7524952187@vipay',
    icon:imagePath.ic_gray_arrow,
  },
  {
    id:11,
    logo:imagePath.profile5,
    name:'Mitchell Curtis',
    available:'7752648845@vipay',
    icon:imagePath.ic_gray_arrow,
  },
]

const SendUCID = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <SelectCryptoComp
        
        data={data}
        onlistpress={() => navigation.navigate(navigationStrings.SENDUCIDENTERAMOUNT)}
        headerString={strings.ucid}
        onBackPress={goBack}
        logostyle={styles.imagestyles}
        />
      </View>
     </WrapperContainer>
  );
};
export default SendUCID;
