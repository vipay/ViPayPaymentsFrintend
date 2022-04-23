
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

const ChangePin = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');

   return(
       <WrapperContainer>
           <View style={styles.container}>
               <HeaderComp
               text={strings.Changepassword}
               onBackPress={goBack}/>
            <View style={{flex:1}}>
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
        <TouchableOpacity>
        <Text style={styles.show}>{strings.Show}</Text>
        </TouchableOpacity>

        </View>
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
        <ButtonComp btnText={strings.Submit}/>
        </View>
           </View>
       </WrapperContainer>
   )

}
export default ChangePin;