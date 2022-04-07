import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image ,Platform, Keyboard} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


const ConfirmPin = ({ navigation }) => {
  const [pass, setPass] = useState('');

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
            value={pass}
            cellSpacing={24}
            // autoFocus={true}
            keyboardType= {Platform.OS ==="ios"? "numbers-and-punctuation":"numeric"}
            animated={false}
            onTextChange={(password) => {
              setPass(password)
              console.log(password, pass, "passwordpasswordpassword")
            }
            }
          />
        </View>
        <View style={styles.btncontinue}>
          <ButtonComp btnText={strings.confirm} style={styles.continuebtn}
          onPress={() => navigation.navigate(navigationStrings.HOME_TAB)} />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ConfirmPin;