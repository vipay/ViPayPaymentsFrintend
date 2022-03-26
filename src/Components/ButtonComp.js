import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';

const ButtonComp = ({
  onPress = () => { },
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btnStyle, ...btnStyle }}
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}
      >{btnText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.Blue,
    height: moderateScale(48),
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    paddingHorizontal: moderateScale(8),
    borderRadius:16
  },
  btnTextStyle: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsSemibold,
    textTransform:'uppercase',
    color:colors.white,
  },
});
export default ButtonComp;
