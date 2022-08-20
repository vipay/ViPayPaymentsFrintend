import React, {Component, useState, useEffect, Suspense} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
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
import {showError} from '../../helper/helperFunctions';
import store from '../../redux/store';
import types from '../../redux/types';
import {Singleton} from '../../config/magicConfig';
import {getUserData} from '../../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
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
    visiblity: false,
    DID: '',
    loader: 'true',
  });
  const {
    phoneNO,
    otp,
    auth,
    resend,
    counter,
    showtimer,
    number,
    visiblity,
    DID,
    loader,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const magic = Singleton.getInstance();

  // console.log(useSelector(state=>state),'dxtcfvygbuhinjomk,')

  const user_id = useSelector(state => state?.userId?.userId);
  console.log(user_id, 'userIduserIduserIduserIduserId');

  const saveUserData = data => {
    console.log(data);
    dispatch({
      type: types.LOGIN,
      payload: data,
    });
  };
  const init = async () => {
    try {
      const userData = await getUserData();
      saveUserData(userData);
      console.log(userData, 'ashbk%%%%%%%%%%%%%%');
    } catch (error) {
      console.log(error);
    }
  };

  const onsignin = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (phoneNO.length < 8) {
      showError(
        phoneNO.length == 0
          ? 'Please enter Phone number'
          : 'Please enter Correct Phone number',
      );
    } else {
      const phNumber = '+' + callingCode + phoneNO.toString();
      updateState({visiblity: true, loader: true});
      setTimeout(() => {
        updateState({loader: false});
      }, 10000);
      magic.auth
        .loginWithSMS({
          phoneNumber: phNumber,
        })
        .then(access => {
          updateState({visiblity: false, loader: true});
          console.log(access, 'DIDDIDDIDDIDDIDDID');
          try {
            let userrefer = !!user_id ? {referredBy: user_id} : null;
            const res = login_with_mobile({
              token: access,
              deviceId: String(fcmToken),
              ...userrefer,
            })
              .then(res => {
                if (res.data.pin == 'Vi') {
                  navigation.navigate(navigationStrings.CREATEPIN, {
                    auth: res.data.token,
                  });
                  updateState({loader: false});
                } else {
                  init();
                  updateState({loader: false});
                }
              })
              .catch(err => {
                updateState({loader: false});
                console.log(err, ' error at api');
                showError('Something Went wrong');
              });
          } catch (error) {
            console.log('errorerror', error);
            updateState({visiblity: false, loader: false});
            showError('Something went wrong try again');
          }
        })
        .catch(err => {
          console.log(err, 'errorrr');
          updateState({visiblity: false, loader: false});
        });
    }
  };

  return (
    <WrapperContainer isLoading={loader}>
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
                      const {cca2, callingCode} = country;

                      setcountryCode(cca2);
                      setcallingCode(country.callingCode);
                    }}
                  />
                </View>

                <Text style={styles.inputline} />
                <TextInput
                  style={styles.phoneNo}
                  keyboardType={'numeric'}
                  maxLength={14}
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
            <ButtonComp
              btnText={strings.signin}
              onPress={() => {
                onsignin();
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>

      <View>
        <Modal visible={visiblity} transparent>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.blackOpacity50,
              }}>
              <Text style={styles.welcomeback1}>
                Secure Login is in progress.
              </Text>
              <magic.Relayer />
            </View>
          </View>
        </Modal>
      </View>
    </WrapperContainer>
  );
};

export default Login;
