//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {login, login_with_mobile} from '../../redux/actions/auth';
import actions from '../../redux/actions';



const Login = ({navigation}) => {
  const [countryCode, setcountryCode] = useState('AE');
  const [iso2, setiso2] = useState();
  const [callingCode, setcallingCode] = useState('971');
  const [state, setState] = useState({
    phoneNO:'',
    otp,
    auth:''
  });
  const {phoneNO, otp, auth} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  {
    console.log(callingCode, 'bajdbjasb');
  }

  const ongetOtp = () => {
    let apidata = {country_code: callingCode, phone_no: phoneNO};
    
     actions. login_with_mobile(apidata)
     .then(data => {
        console.log(data, 'acute');
        updateState({auth:data.data.access_token})
      
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onsignin=()=>{

    let apidata={otp:otp}
    let header={authorization:auth}
    login(apidata,header)
    .then(data=>
      {console.log(data, 'khabjshcb')

      }
    )
    .catch(
      errr=>
      {
        console.log(errr)
      }
    )
  }

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
                    // containerButtonStyle={styles.countrycode}
                    theme={styles.countrycode}
                    // style={styles.countrycode}
                    onSelect={country => {
                      // console.log('country',country);
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
                  maxLength={16}
                  // autoFocus
                  onChangeText={value => updateState({phoneNO: value})}
                  placeholderTextColor={colors.lightgray}
                  placeholder={strings.placeholderPHNO}
                />
              </View>
              <TouchableOpacity style={styles.getotp} onPress={ongetOtp}>
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
                  onChangeText={value => updateState({otp: value})}
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
            <ButtonComp
              btnText={strings.signin}
              // onPress={() => navigation.navigate(navigationStrings.CREATEPIN)
              onPress={onsignin}
              // }
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Login;
