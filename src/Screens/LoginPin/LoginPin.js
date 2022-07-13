import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  Platform,
  Alert,
  BackHandler,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {showError, showSuccess} from '../../helper/helperFunctions';
import {useIsFocused} from '@react-navigation/native';
import actions from '../../redux/actions';
import { getScreenLock } from '../../utils/utils';
const LoginPin = ({navigation, route}) => {
  const [pass, setPass] = useState('');


  const loginPIn = () => {
    getScreenLock()
      .then(res => {
        let result = {screenLock:res,isShow:false}
        actions.loginPin(result)
        console.log(res,"PPPPPPPOLLLLLOCK")
      })
  };

  const checkpin = () => {
  

    actions
    .pin_check({pin:pass})
    .then( res=>
      {
        loginPIn()
        navigation.navigate(navigationStrings.HOME_TAB)
        console.log(res,'sucess')
        
      })
    .catch(err=>
      {
        console.log(err,'errorrr at login pin')
        showError('you Entered Incorrect Pin Try Again')
      })
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.logo_header} />
        <Text style={styles.CreatePinHeading}>{strings.EnterPinHeading}</Text>
        <View style={styles.codefieldView}>
          <SmoothPinCodeInput
            password
            mask={<View style={styles.customMask} />}
            textStyle={styles.pinTextStyle}
            cellStyle={styles.cell}
            cellSize={64}
            codeLength={4}
            cellSpacing={21}
            containerStyle={styles.cellcon}
            cellStyleFocused={styles.cellouter}
            value={pass}
            keyboardType={
              Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
            }
            animated={false}
            onTextChange={password => {
              setPass(password);
              console.log(password, pass, 'passwordpasswordpassword');
            }}
          />
        </View>
        <View style={styles.btnview}>
          <ButtonComp
            btnText={strings.CONTINUE}
            onPress={checkpin}
            // onPress={() => navigation.navigate(navigationStrings.CONFIRMPIN)}
            // onPress={onPressContinue}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default LoginPin;
