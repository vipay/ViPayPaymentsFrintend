import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const SendRenderList = ({item, index, onPress, show = false, char}) => {
  return (
    <>
      {show && <Text style={styles.alphabet}>{char}</Text>}
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.subcontaner}>
          <Image
            style={styles.profile}
            source={
              item.profilePic == null
                ? imagePath.ic_profile_placeholder
                : {uri: `data:image/jpg;base64,${item.profilePic.data}`}
            }
          />
          <View style={styles.lineview}>
            <View>
              <Text style={styles.name}>{item.nameInContacts}</Text>
              <Text style={styles.phoneNo}>{item.phoneInContacts}</Text>
            </View>
            <View style={styles.arrow}>
              {item._id != null ? (
                <Image source={imagePath.ic_gray_arrow} />
              ) : (
                <View style={styles.invite}>
                  <Text style={styles.invitetxt}>Invite</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
};
export default SendRenderList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  subcontaner: {
    flexDirection: 'row',
    paddingTop: moderateScale(8),
    // paddingBottom:moderateScale(16)
  },
  profile: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: 25,
    marginLeft: moderateScale(24),
  },
  invite: {
    height: moderateScale(32),
    width: moderateScale(80),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4C4C6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineview: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    borderColor: '#F1F1F2',
    justifyContent: 'space-between',
    paddingBottom: 16,
    marginLeft: moderateScale(16),
  },
  name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  arrow: {
    justifyContent: 'center',
    marginRight: moderateScale(24),
  },
  phoneNo: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  invitetxt: {
    ...commonStyles.fontSize13,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  alphabet: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginLeft: moderateScale(24),
    marginTop: moderateScale(17),
    textTransform: 'uppercase',
  },
});
