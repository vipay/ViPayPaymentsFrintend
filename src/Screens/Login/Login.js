//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import CountryPicker, {getCallingCode} from 'react-native-country-picker-modal';
import colors from '../../styles/colors';
import styles from './styles';
import strings from '../../constants/lang';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {login, login_with_mobile, resend_otp} from '../../redux/actions/auth';
import actions from '../../redux/actions';
import {
  showError,
  showSuccess,
  otpTimerCounter,
} from '../../helper/helperFunctions';
import BackgroundTimer from 'react-native-background-timer';
import {
  setUserData,
  apiPost,
  clearUserData,
  apiGet,
  apiPut,
  getUserData,
} from '../../utils/utils';
import store from '../../redux/store';
import types from '../../redux/types';
import {Magic} from '@magic-sdk/react-native';
import Moralis from 'moralis/react-native.js';
const {dispatch} = store;
const Login = ({navigation}) => {
  const [countryCode, setcountryCode] = useState('AE');
  const [iso2, setiso2] = useState();
  const [callingCode, setcallingCode] = useState('971');
  const [activeOtp, setActiveOtp] = useState(false);

  const [state, setState] = useState({
    phoneNO: '',
    otp: '',
    auth: '',
    resend: false,
    counter: 0,
    showtimer: false,
    pincheck: false,
    number: '',
  });
  const {phoneNO, otp, auth, resend, counter, showtimer, number} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  // const magicClient = new Magic('pk_live_C2F574A0CB64CC57');
  console.log(number, 'hhhhhh');
  const magicClient = new Magic('pk_live_1421890C80C60FED');
  // const Moralis = useMoralis();

  // const DID = magicClient.auth.loginWithSMS({
  //   // phoneNumber:"+"+callingCode+phoneNO ,
  //   // phoneNumber:'+916284393246',
  //   phoneNumber:'+918968124604',

  // });

  useEffect(() => {
    Moralis.authenticate({
      provider: 'magicLink',
      email: 'yashvichadha@gmail.com',
      apiKey: 'pk_live_1421890C80C60FED',
      network: 'kovan',
      onComplete: id => {
        console.log('idididididid', id);
      },
      onError: error => {
        console.log('idididididid', error);
      },
    });
  }, []);

  useEffect(() => {
    // magicClient.auth
    //   .loginWithEmailOTP({
    //     email: 'yashvichadha@gmai.com',
    //   })
    //   .then(e => {
    //     console.log('magicClientmagicClient', e);
    //   })
    //   .catch(error => {
    //     console.log('aaa', error);
    //   });
    // magicClient.auth
    //   .loginWithMagicLink({
    //     email: 'yashvichadha@gmail.com',
    //     showUI: true,
    //   })
    //   .then(e => {
    //     console.log('magicClientmagicClient', e);
    //   })
    //   .catch(error => {
    //     console.log('aaa', error);
    //   });
  }, []);

  useEffect(() => {
    if (!!counter) startTimer();
    else {
      BackgroundTimer.stopBackgroundTimer();
      updateState({showtimer: false});
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [counter]);
  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      updateState({counter: counter - 1});
    }, 1000);
  };
  const ongetOtp = () => {
    if (phoneNO.length < 10) {
    } else {
      updateState({showtimer: true, counter: 30, resend: true});
      let apidata = {country_code: callingCode.toString(), phone_no: phoneNO};
      // {console.log(callingCode.toString())}
      if (resend == true) {
        // {console.log('resend')}
        resend_otp(apidata)
          .then(data => {
            showSuccess('OTP resent successfully');
            console.log(data);
            updateState({auth: data.data.access_token});
          })
          .catch(err => {
            console.log(err);
            ``;
          });
      } else {
        console.log('sendsendsendsendsendsendsend');
        console.log(callingCode);
        updateState({number: '+' + callingCode + phoneNO});
        const phNumber = '+' + callingCode + phoneNO.toString();
        const DID = magicClient.auth
          .loginWithSMS({
            phoneNumber: '+916284393246',
          })
          .then(otp => {
            console.log('DIDDIDDIDDIDDID', otp);
          })
          .catch(error => {
            console.log('otpotpotpotp', error);
          });

        showSuccess('otp send successfully');
        // actions
        //   .login_with_mobile(apidata)
        //   .then(data => {
        //     showSuccess('OTP sent successfully');
        //     console.log(data);
        //     updateState({
        //       auth: data.data.access_token,
        //       pincheck: data.data.pin_genrated,
        //     });
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      }
    }
  };

  const saveUserData = data => {
    dispatch({
      type: types.LOGIN,
      payload: data,
    });
  };

  const init = async () => {
    try {
      const userData = await getUserData();
      saveUserData(userData);
      console.log(userData, 'ashbk');
    } catch (error) {
      console.log(error);
    }
  };

  const onsignin = () => {
    if (phoneNO.length < 10) {
      showError(
        phoneNO.length == 0
          ? 'Please enter Phone number'
          : 'Please enter Correct Phone number',
      );
    } else if (otp.length < 6) {
      showError(otp.length == 0 ? 'Please enter OTP' : 'OTP must be 6 Digits');
    } else {
      let apidata = {otp: otp};
      let header = {authorization: auth};
      login(apidata, header)
        .then(data => {
          console.log(data);
          showSuccess('Login Successful');
          if (state.pincheck == false) {
            navigation.replace(navigationStrings.CREATEPIN, {auth: auth});
          } else {
            init();
          }
        })
        .catch(errr => {
          console.log(errr);
          showError('Incorret OTP');
        });
    }
  };

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
                    withCallingCode={callingCode}
                    withCallingCodeButton={true}
                    cca2={iso2}
                    theme={styles.countrycode}
                    excludeCountries={['AQ', 'BV', 'TF', 'HM', 'UM']}
                    onSelect={country => {
                      // console.log('country',country);
                      const {cca2, callingCode} = country;
                      updateState({showtimer: false, resend: false});

                      setcountryCode(cca2);
                      setcallingCode(country.callingCode);
                    }}
                  />
                </View>

                <Text style={styles.inputline} />
                <TextInput
                  style={styles.phoneNo}
                  keyboardType={'numeric'}
                  maxLength={10}
                  // autoFocus
                  onChangeText={value => {
                    updateState({
                      phoneNO: value,
                      showtimer: false,
                      resend: false,
                    });
                    // get otp activates when enter value is 9
                    value.length > 8 ? setActiveOtp(true) : setActiveOtp(false);
                  }}
                  placeholderTextColor={colors.lightgray}
                  placeholder={strings.placeholderPHNO}
                />
              </View>
              <Pressable style={styles.getotp} onPress={ongetOtp}>
                <Text style={activeOtp ? styles.activegetotp : styles.getotp}>
                  {showtimer
                    ? (counter < 10 ? '00:0' : '00:') + counter
                    : resend
                    ? 'Resend'
                    : strings.getotp}
                </Text>
              </Pressable>
            </View>
            <View>
              <View style={styles.otpholder}>
                <magicClient.Relayer></magicClient.Relayer>
                {/* <TextInput
                  style={styles.otp}
                  placeholder={strings.placeholderOTP}
                  placeholderTextColor={colors.lightgray}
                  keyboardType={'numeric'}
                  maxLength={6}
                  onChangeText={value => updateState({otp: value})}
                /> */}
              </View>
            </View>
            <Text style={styles.termsCond}>
              {strings.termsConditiontxt1}
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate(navigationStrings.TERMSCONDITIONS)
                }>
                <Text style={styles.terms}>{strings.termsConditiontxt2}</Text>
              </TouchableWithoutFeedback>

              <Text style={styles.termsCond}>{strings.termsConditiontxt3}</Text>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate(navigationStrings.PRIVACYPOLICY)
                }>
                <Text style={styles.terms}>{strings.termsConditiontxt4}</Text>
              </TouchableWithoutFeedback>
            </Text>

            <Text></Text>
            <ButtonComp btnText={strings.signin} onPress={onsignin} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Login;
