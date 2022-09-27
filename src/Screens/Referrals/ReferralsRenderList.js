import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import imagePath from '../../constants/imagePath';
import {momentTime} from '../../helper/helperFunctions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const ReferralsRenderList = ({item, index}) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.profile} source={imagePath.ic_user_placeholder} />
      <View style={styles.subview}>
        <View style={styles.nameview}>
          <Text style={styles.name}>{item._id}</Text>
          <Text style={styles.time}>
            {moment(item.createdAt).format('DD MMM, YY • hh:mm a')}
          </Text>
        </View>
        <Text style={styles.value}>{item.referrerBonus}</Text>
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
