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

const HelpSupport = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.HelpSupport}  onBackPress={goBack}/>
        <View style={styles.helpform}>
          <View style={styles.inputfieldStyle}>
            {/* <TextInput style={styles.input} keyboardType="visible-password">
              Flora Becker
            </TextInput> */}
            <Text style={styles.text}>{strings.ProfileName}</Text>
          </View>
          <View style={styles.inputfieldnumer}>
            <Text style={styles.text}>{strings.countrycode}</Text>
            <Text style={styles.line}/>
            <Text style={styles.text}>{strings.Number}</Text>
          </View>
          <View style={styles.inputfieldStyle}>
            <Text style={styles.text}>{strings.ProfileEmail}</Text>
          </View>
          <View style={styles.message}>
            <TextInput
              style={styles.messageinput}
              multiline={true}
              autoCorrect={false}
              placeholder={'Write your message here…'}></TextInput>
          </View>
          <Text style={styles.helpdesc}>
              {strings.helpdesc}
          </Text>
          <View style={styles.btn}>
        <ButtonComp btnText={strings.Submit}/>
        </View>
        </View>
        
       
      </View>
    </WrapperContainer>
  );
};
export default HelpSupport;
