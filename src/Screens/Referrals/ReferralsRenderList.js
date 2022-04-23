import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import {combineReducers} from 'redux';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import {getItem} from '../../utils/utils';

const ReferralsRenderList = ({item, index}) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.profile} source={item.profilepic} />
      <View style={styles.subview}>
        <View style={styles.nameview}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    </View>
  );
};

export default ReferralsRenderList;

const styles = StyleSheet.create({
  subview: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: moderateScale(24),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.F1F1F2,
    paddingBottom: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  profile: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: 24,
    marginLeft: moderateScale(24),
  },
  conatiner: {
    flexDirection: 'row',
    paddingTop: moderateScale(8),
  },

  name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  time: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    lineHeight: 35,
  },
  value: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
});
