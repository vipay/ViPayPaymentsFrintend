import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function HeaderComp({
  text,
  onBackPress,
  headerStyle,
  image,
  onPress,
  textStyle,
  imagestyle,
  backicon,
}) {
  return (
    <View style={{...styles.headerStyle, ...headerStyle}}>
      <View style={styles.subcontainer}>
        <Pressable onPress={onBackPress}>
          <Image style={{...styles.backicon, ...backicon}} source={imagePath.backIcon} />
        </Pressable>
        <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      </View>
      <Pressable onPress={onPress}>
        <Image style={{...styles.imagestyle, ...imagestyle}} source={image} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    // backgroundColor:'red',
    flex: 0.07, 
    justifyContent: 'space-between',
  marginHorizontal: moderateScale(24),
  },
  textStyle: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginLeft: moderateScale(16),
  },
  subcontainer: {
    flexDirection: 'row',
  },
  imagestyle: {
    height: moderateScale(32),
    width: moderateScale(32),
    // borderRadius: 12,
  
    
  },
 
});
