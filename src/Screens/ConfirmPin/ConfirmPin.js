import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Platform, Keyboard} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {showError, showSuccess} from '../../helper/helperFunctions';
import {loginpin} from '../../redux/actions/auth';
import { shouldBeUseWeb } from 'react-native-reanimated/src/reanimated2/PlatformChecker';

const ConfirmPin = ({navigation, route}) => {
  const [confirmpass, setconfirmPass] = useState('');
  const [auth, setauth] = useState('');

  const [pass, setPass] = useState('');
  useEffect(() => {
    setPass(route.params.pin);
    setauth(route.params.auth);
  }, []);

  {
    console.log(auth, 'ahbjaxb');
  }

  const onConfirmPin = () => {
    if (confirmpass.length < 4) {
      showError(
        confirmpass.length == 0
          ? 'Please enter the pin '
          : 'Pin must be 4 Digit',
      );
    }
    if (pass === confirmpass) {
      console.log('match');

      let apidata = {pin: confirmpass};
      let header = {authorization: auth};
      loginpin(apidata, header)
        .then(data => {
          console.log(data);
          showSuccess('Pin Created Successfully')
          navigation.navigate(navigationStrings.HOME_TAB);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      showError("Pin Does't match" )
      console.log('unmatch');
    }
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.logo_header} />
        <Text style={styles.CreatePinHeading}>{strings.confirmPinHeading}</Text>
        <Text style={styles.CreatePinSubheading}>
          {strings.confirmPinSubHeading}
        </Text>
        <View style={styles.codefieldView}>
          <SmoothPinCodeInput
            password
            mask={<View style={styles.customMask} />}
            cellStyle={styles.cell}
            cellSize={64}
            codeLength={4}
            textStyle={styles.pinTextStyle}
            cellStyleFocused={styles.cellouter}
            // keyboardType='numeric'
            value={confirmpass}
            containerStyle={styles.cellcon}
            cellSpacing={21}
            // autoFocus={true}
            keyboardType={
              Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
            }
            animated={false}
            onTextChange={password => {
              setconfirmPass(password);
              console.log(password, confirmpass, 'passwordpasswordpassword');
            }}
          />
        </View>
        <View style={styles.btncontinue}>
          <ButtonComp
            btnText={strings.confirm}
            style={styles.continuebtn}
            // onPress={() => navigation.navigate(navigationStrings.HOME_TAB)}
            onPress={onConfirmPin}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ConfirmPin;
