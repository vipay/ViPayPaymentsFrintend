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

export const ProfileListComp = ({
  logoicon,
  txt,
  icon = true,
  container,
  appversion,
  onPress
}) => {
  return (
      <TouchableOpacity onPress={onPress}>
    <View style={{...styles.container, ...container}}>
      <Image source={logoicon} />
      <View style={styles.icon}>
        <Text style={styles.txt}>{txt}</Text>
        {icon ? (
          <Image source={icon} />
        ) : (
          <Text style={styles.appversion}>{appversion}</Text>
        )}
      </View>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: moderateScale(64),
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingLeft: moderateScale(24),
    alignItems: 'center',
  },
  icon: {
    marginLeft: moderateScale(16),
    height:64,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:24,
    borderBottomWidth: 1,
    borderBottomColor: colors.F1F1F2,
    alignItems:'center',

  },
  txt: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
    // height: 32,
  },
  appversion: {
    ...commonStyles.fontSize13,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  
  },
});
