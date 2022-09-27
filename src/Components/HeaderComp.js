import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
export default function HeaderComp({
  text,
  onBackPress,
  headerStyle,
  image,
  onPress,
  textStyle,
  imagestyle,
  backicon,
  image1,
  onpressImage1,
}) {
  return (
    <View style={{...styles.headerStyle, ...headerStyle}}>
      <View style={styles.subcontainer}>
        <Pressable onPress={onBackPress}>
          <Image
            style={{...styles.backicon, ...backicon}}
            source={imagePath.backIcon}
          />
        </Pressable>
        <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.image1} onPress={onpressImage1}>
          <Image source={image1} />
        </TouchableOpacity>
        <Pressable onPress={onPress}>
          <Image style={{...styles.imagestyle, ...imagestyle}} source={image} />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
    marginVertical: moderateScaleVertical(16),
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
  image1: {
    marginRight: moderateScale(16),
  },
});
