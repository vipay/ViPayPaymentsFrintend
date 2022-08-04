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
  TouchableOpacity,
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
import {getScreenLock} from '../../utils/utils';
import {setScreenLock} from '../../utils/utils';
import {useSelector} from 'react-redux';

const ConfirmScreenLock = ({navigation, route}) => {
  const [pass, setPass] = useState('');
  const [count, setCount] = useState(0);
  const lock = useSelector(state => state.loginPin.screenLock);

  useEffect(() => {
    setscreenlock(lock);
  }, []);
  const [screenlock, setscreenlock] = useState(false);

  // const loginPIn = () => {
  //   getScreenLock()
  //     .then(res => {
  //       let result = {screenLock:res,isShow:false}
  //       actions.loginPin(result)
  //       console.log(res,"PPPPPPPOLLLLLOCK")
  //     })
  // };

  const checkpin = () => {
    if (count == 5) {
      navigation.navigate(navigationStrings.CHANGEPIN);
    } else {
      actions
        .pin_check({pin: pass})
        .then(res => {
          // loginPIn();
          navigation.navigate(navigationStrings.PROFILE);
          console.log(res, 'sucess');

          let result = {screenLock: !screenlock, isShow: false};
          actions.loginPin(result);
          setScreenLock(!screenlock).then(res => console.log(res, 'locklock'));
          setscreenlock(!screenlock);
        })
        .catch(err => {
          console.log(err, 'errorrr at login pin');
          showError('you Entered Incorrect Pin Try Again');
          console.log(count, 'countcounts');

          setCount(count + 1);
        });
    }
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.logo_header} />
        <Text style={styles.CreatePinHeading}>{strings.confirmscreenlock}</Text>
        <View style={styles.codefieldView}>
          <View style={styles.pininput}>
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
              autoFocus={true}
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
          <View style={styles.forgot}>
            <TouchableOpacity>
              <Text style={styles.forgottxt}>{strings.ForgotPass}</Text>
            </TouchableOpacity>
            <Text />
          </View>
        </View>

        <View style={styles.btnview}>
          <ButtonComp btnText={strings.CONTINUE} onPress={checkpin} />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ConfirmScreenLock;
