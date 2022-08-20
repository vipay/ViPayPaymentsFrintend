import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import {showError, showSuccess} from '../../helper/helperFunctions';
import actions from '../../redux/actions';
import styles from './styles';

const ChangePin = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [show, setshow] = useState(false);

  console.log(pass, 'old pin', confirmpass, 'new pin');

  const Changepassword = () => {
    actions
      .Change_Password({oldPin: pass, newPin: confirmpass})
      .then(res => {
        console.log(res, 'tcdfgvh');
        showSuccess('Pin changes sucessfully ');
      })
      .catch(err => {
        console.log(err, 'tyhegdehdb ');
        showError('Your old pin Does`t match please try again ');
      });
  };

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
