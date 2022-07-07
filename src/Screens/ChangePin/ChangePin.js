import React, {Component, useState} from 'react';
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
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
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
import actions from '../../redux/actions';

const ChangePin = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [show, setshow] = useState(false);

  console.log(pass,'old pin', confirmpass,'new pin')

  const Changepassword=()=>
  {

    actions.Change_Password({oldPin: pass,newPin:confirmpass})
    .then(
      res=>
      {
        console.log(res,'tcdfgvh')
      }
    )
    .catch( err=>
      {
        console.log(err,'tyhegdehdb ')
      })
  }

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.Changepassword} onBackPress={goBack} />
        <View style={{flex: 1}}>
          <Text style={styles.passheader}>{strings.Oldpassword}</Text>
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
          <View style={styles.showview}>
            <Text style={styles.confirmpassheader}>{strings.Newpassword}</Text>
            <TouchableOpacity
              onPress={() => {
                setshow(!show);
              }}>
              <Text style={styles.show}>{strings.Show}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.codefieldView}>
            <SmoothPinCodeInput
              password
              mask={show == true ? <View style={styles.customMask} /> : null}
              textStyle={styles.pinTextStyle}
              cellStyle={styles.cell}
              cellSize={64}
              codeLength={4}
              cellSpacing={21}
              containerStyle={styles.cellcon}
              cellStyleFocused={styles.cellouter}
              value={confirmpass}
              keyboardType={
                Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'
              }
              animated={false}
              onTextChange={password => {
                setConfirmpass(password);
                console.log(password, pass, 'passwordpasswordpassword');
              }}
            />
          </View>
        </View>
        <View style={styles.btncomp}>
          <ButtonComp btnText={strings.Submit} onPress={Changepassword} />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default ChangePin;
