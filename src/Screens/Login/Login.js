//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';

import colors from '../../styles/colors';
import {width} from '../../styles/responsiveSize';
import styles from './styles';
import strings from '../../constants/lang';
// import strings from '../../constants/lang';

// create a component
const Login = ({navigation}) => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Image source={imagePath.logo_header}></Image>
          <Text style={styles.welcomeback}>
            {strings.welcomeback} <Image source={imagePath.handwave} />
          </Text>
          <Text style={styles.welcomebacktxt}>{strings.welcomebacktxt}</Text>

          <View style={styles.inputfield}>
            <View style={styles.subinputfield}>
              <TextInput style={styles.locationcode} keyboardType={'numeric'}>
                {strings.locationcode}
              </TextInput>
              <Text style={styles.inputline}></Text>
              <TextInput
                style={styles.phoneNo}
                keyboardType={'numeric'}
                maxLength={16}
                placeholderTextColor={colors.lightgray}
                placeholder={strings.placeholderPHNO}></TextInput>
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
            <Text> {strings.termsConditiontxt3}</Text>
            <Text style={styles.terms}> {strings.termsConditiontxt4}</Text>
          </Text>
          <ButtonComp btnText={strings.signin} onPress={()=> navigation.navigate(navigationStrings.CREATEPIN)}/>
        </View>
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Login;
