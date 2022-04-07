//import liraries
import React, {Component, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import CountryPicker, {getCallingCode} from 'react-native-country-picker-modal';
import colors from '../../styles/colors';
import styles from './styles';
import strings from '../../constants/lang';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

// create a component
const Login = ({navigation}) => {
  const [countryCode, setcountryCode] = useState('AE');
  const [iso2, setiso2] = useState();
  const [callingCode, setcallingCode] = useState('91');

  const countryChange = data => {
    setcountryCode({iso2: data.cca2});
    setcountryCode('+' + data.callingCode[0]);
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.mainContainer}>
            <Image source={imagePath.logo_header} />
            <Text style={styles.welcomeback}>
              {strings.welcomeback} <Image source={imagePath.handwave} />
            </Text>
            <Text style={styles.welcomebacktxt}>{strings.welcomebacktxt}</Text>
            <View style={styles.inputfield}>
              <View style={styles.subinputfield}>
                <View style={styles.countrypicker}>
                  <CountryPicker
                    withFilter
                    countryCode={countryCode}
                    withFlagButton={false}
                    withCallingCode
                    withCallingCodeButton={true}
                    cca2={iso2}
                    onSelect={country => {
                      // console.log.apply('country',country);
                      const {cca2, callingCode} = country;
                      setcountryCode(cca2);
                      setcallingCode(cca2);
                    }}
                  />
                </View>
                <Text style={styles.inputline} />
                <TextInput
                  style={styles.phoneNo}
                  keyboardType={'numeric'}
                  maxLength={16}
                  autoFocus
                  placeholderTextColor={colors.lightgray}
                  placeholder={strings.placeholderPHNO}
                />
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
                  maxLength={6}
                />
              </View>
            </View>
            <Text style={styles.termsCond}>
              {strings.termsConditiontxt1}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationStrings.TERMSCONDITIONS)
                }
                activeOpacity={1}>
                <Text style={styles.terms}> {strings.termsConditiontxt2}</Text>
              </TouchableOpacity>
              <Text style={styles.termsCond}>{strings.termsConditiontxt3}</Text>

              <TouchableOpacity
              style={{alignItems:'baseline',alignSelf:"center"}}
                onPress={() =>
                  navigation.navigate(navigationStrings.PRIVACYPOLICY)
                }
                activeOpacity={1}>
                <Text style={styles.terms}>{strings.termsConditiontxt4}</Text>
              </TouchableOpacity>
            </Text>
            <ButtonComp
              btnText={strings.signin}
              onPress={() => navigation.navigate(navigationStrings.CREATEPIN)}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Login;
