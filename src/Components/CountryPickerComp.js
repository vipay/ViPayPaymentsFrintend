import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import commonStyles from '../styles/commonStyles';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import strings from '../constants/lang';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import {useSelector} from 'react-redux';
import fontFamily from '../styles/fontFamily';
// import { TextInput } from 'react-native-gesture-handler';
// import TextInputBox from './TextInputBox';


const CountryPickerComp = ({
  phoneNumber,
  cca2,
  countryCode,
  countryChange,
  onPhoneNumberChange,
  style,
  maxLength,
  
}) => {
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  // const role = useSelector(state => state.auth.selectedRole)
  
  return (

    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', }}>
        <View
          style={{
            marginRight: moderateScaleVertical(4),
            // borderWidth: 1,
            // borderRadius: 10,
            // borderColor: colors.E3E3E3,
          }}>
          <TouchableOpacity onPress={() => setCountryPickerVisible(true)}>
            <View
              style={{
                ...styles.countryPickerInput,
                // backgroundColor: role.textColor,
                ...style,
              }}>
              <Text
                style={{
                  ...commonStyles.fontSize16,
                  fontFamily: fontFamily.regular,
                  color: !!cca2 ? colors.black : colors.gunsmoke,
                  // marginHorizontal: 12
                }}>
                {countryCode}
              </Text>
              <Image source={imagePath.dropCountry} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginLeft: moderateScaleVertical(4)}}>
          {/* <TextInput
            keyType="numeric"
            placeholder={strings.placeholderPHNO}
            maxLength={maxLength}
            value={phoneNumber}
            style={{color: !!phoneNumber ? colors.black : colors.gunsmoke,}}
            onChangeText={onPhoneNumberChange}
          /> */}
        </View>
      </View>
      {countryPickerVisible && (
        <CountryPicker
          cca2={cca2}
          visible={countryPickerVisible}
          withFlagButton={false}
          withFilter
          withCallingCode
          onClose={() => setCountryPickerVisible(false)}
          onSelect={countryChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  countryPickerInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: colors.textInputColor,
    // borderRadius: moderateScale(8),
    // height: moderateScale(50),
    // width: moderateScale(80),
    padding: moderateScale(5),
    //marginBottom: moderateScaleVertical(10),
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor:'yellow',
  },
});
export default CountryPickerComp;