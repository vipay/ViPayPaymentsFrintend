import React, {Component} from 'react';
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
} from 'react-native';
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

const AboutViPay = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp onBackPress={goBack} text={strings.AboutViPay} />
        <View style={styles.main}>
          <Image source={imagePath.ic_about_logo} />
          <Text style={styles.appversion}>{strings.appversion}</Text>
          <Text style={styles.aboutVipaydesc}>{strings.aboutVipaydesc}</Text>
          <Text style={styles.copyRight}>{strings.copyRight}</Text>
        </View>
        <View style={styles.termscond}>
        <TouchableOpacity
          onPress={() =>navigation.navigate(navigationStrings.PRIVACYPOLICY)}>
            <Text style={styles.terms}>{strings.PrivacyPolicy}</Text>
          </TouchableOpacity>
          <Text style={styles.terms}>  •  </Text>
          <TouchableOpacity
         onPress={() =>navigation.navigate(navigationStrings.TERMSCONDITIONS)}>
            <Text style={styles.terms}>{strings.Termsandconditions}</Text>
          </TouchableOpacity>
         
          
        </View>
      </View>
    </WrapperContainer>
  );
};
export default AboutViPay;
