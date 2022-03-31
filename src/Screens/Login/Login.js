//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import CountryPicker from 'react-native-country-picker-modal'
import colors from '../../styles/colors';
import styles from './styles';
import strings from '../../constants/lang';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// create a component
const Login = ({ navigation }) => {
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.mainContainer}>
            <Image source={imagePath.logo_header}></Image>
            <Text style={styles.welcomeback}>
              {strings.welcomeback} <Image source={imagePath.handwave} />
            </Text>
            <Text style={styles.welcomebacktxt}>{strings.welcomebacktxt}</Text>
            <View style={styles.inputfield}>
              <View style={styles.subinputfield}>
                <CountryPicker
                  withCallingCode
                />
                <Text style={styles.inputline}></Text>
                <TextInput
                  style={styles.phoneNo}
                  keyboardType={'numeric'}
                  maxLength={16}
                  autoFocus
                  placeholderTextColor={colors.lightgray}
                  placeholder={strings.placeholderPHNO} />
              </View>
              <TouchableOpacity style={styles.getotp}>
                <Text style={styles.getotp}>{strings.getotp}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.otpholder}>
                <TextInput
                  style={styles.otp}
                  placeholder={strings.placeholderOTP}
                  placeholderTextColor={colors.lightgray}
                  keyboardType={'numeric'}
                  maxLength={6}></TextInput>
              </View>
            </View>
            <Text style={styles.termsCond}>
              {strings.termsConditiontxt1}
              <Text style={styles.terms}> {strings.termsConditiontxt2}</Text>
              <Text style={styles.termsCond}> {strings.termsConditiontxt3}</Text>
              <Text style={styles.terms}> {strings.termsConditiontxt4}</Text>
            </Text>
            <ButtonComp btnText={strings.signin} onPress={() => navigation.navigate(navigationStrings.CREATEPIN)} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Login;
