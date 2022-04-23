import {month} from 'is_js';
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

const MyQr = ({navigation}) => {
    const goBack = () => {
        navigation.goBack();
      };
  return (
    <View style={styles.conatiner}>
      {/* <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" /> */}
<View>
      <ImageBackground style={styles.bgimg} source={imagePath.my_qr_bg}>
        <View style={styles.header}>
          <Text style={styles.MyQRcode}>{strings.MyQRcode}</Text>
          <TouchableOpacity onPress={goBack}>
            <Image source={imagePath.ic_white_close} />
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
        <View style={styles.subView}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={imagePath.profile3} />
          </View>
          <View style={styles.qrView}>
            <QRCode size={216} value="https://stackgeeks.com/" 
            style={styles.qr}/>
          </View>
          </View>
          <Text style={styles.MyQRDesc}>{strings.MyQRDesc}</Text>

        </View>
        <Pressable>
        <View style={styles.button}>
           
                <Image source={imagePath.ic_scanner}/>
                <Text style={styles.OpenCodeScanner}>{strings.OpenCodeScanner}</Text>
           

        </View>
        </Pressable>
      </ImageBackground>
      </View>
    </View>
  );
};
export default MyQr;
