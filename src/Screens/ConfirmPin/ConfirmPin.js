import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';
import PagerView from 'react-native-pager-view';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';

const ConfirmPin = () => {
  const [value, setValue] = useState('');
  const [pass, setPass] = useState('');

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.logo_header}></Image>
        <Text style={styles.CreatePinHeading}>{strings.confirmPinHeading}</Text>
        <Text style={styles.CreatePinSubheading}>
          {strings.confirmPinSubHeading}
        </Text>

        <View style={styles.codefieldView}>
          {/* pin box code */}
          {/* <CodeField
          secureTextEntry
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="password"

            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          /> */}


          <SmoothPinCodeInput
            password
            mask="•"
            cellStyle={styles.cell}
            cellSize={64}
            codeLength={4}
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
        <View style={styles.btncontinue}>
          <ButtonComp btnText={strings.CONTINUE} style={styles.continuebtn} />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ConfirmPin;