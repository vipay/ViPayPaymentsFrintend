import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


const CreatePin = ({ navigation }) => {
  const [pass, setPass] = useState('');



  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.logo_header} />
        <Text style={styles.CreatePinHeading}>{strings.createPinHeading}</Text>
        <Text style={styles.CreatePinSubheading}>
          {strings.createPinSubHeading}
        </Text>
        <View style={styles.codefieldview} >
          <SmoothPinCodeInput
            password
            mask={<View style={styles.customMask} />}
            textStyle={styles.pinTextStyle}
            cellStyle={styles.cell}
            cellSize={64}
            codeLength={4}
            cellSpacing={24}
            cellStyleFocused={styles.cellouter}
            value={pass}
            animated={false}
            onTextChange={(password) => {
              setPass(password)
              console.log(password, pass, "passwordpasswordpassword")
            }
            }
          />
        </View>
        <View style={styles.btnview}>
          <ButtonComp
            btnText={strings.CONTINUE}
            onPress={() => navigation.navigate(navigationStrings.CONFIRMPIN)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default CreatePin;
