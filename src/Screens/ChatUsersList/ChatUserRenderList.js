import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import moment from 'moment';

import {moderateScale} from '../../styles/responsiveSize';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import {useSelector} from 'react-redux';

const ChatUserRenderList = ({item, index, onPress}) => {
  const myid = useSelector(state => state.auth.userData?._id);
  const myname = useSelector(state => state.auth.userData?.name);

 console.log(myname,'bknn')


  const user_id =
    myid == item.sender_id._id ? item.reciver_id._id : item.sender_id._id;
  console.log(myid==user_id, 'check krna aa main');

  const username =
    myid == item.sender_id.id ?  item.sender_id.name: item.reciver_id.name;
    console.log( username,'jdhbcjbsdj jb')

  const momentt = moment(item.time).calendar({
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: 'DD MMMM, YYYY',
    sameElse: 'DD MMMM, YYYY',
  });
  const navigation = useNavigation();
  //   console.log(item._id)z
  return (
    <Pressable
      style={styles.conatiner}
      onPress={() =>
        navigation.navigate(navigationStrings.CHAT, {
          userid: user_id,
          name: username,
          profile: item.reciver_id.profile_pic,
        })
      }>
      <Image
        style={styles.profile}
        source={
          item.reciver_id.profile_pic == null
            ? imagePath.ic_user_placeholder
            : item.reciver_id.profile_pic
        }
      />
      <View style={styles.subconainer}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.time}>
            {}
            {moment().unix() - 60 < item.time / 1000 &&
            item.time / 1000 < moment().unix()
              ? 'Just now'
              : momentt == 'Yesterday'
              ? moment.unix(item.time / 1000).format('hh:mm a')
              : moment().unix() - 86400 < item.time / 1000 &&
                item.time / 1000 < moment().unix()
              ? moment(item.time).fromNow('true') == 'an hour'
                ? '1 hour'
                : moment(item.time).fromNow('true')
              : moment.unix(item.time / 1000).format('hh:mm a')}
          </Text>
        </View>
        <View style={styles.messageView}>
          <Image style={styles.status} source={item.status} />
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ChatUserRenderList;

const styles = StyleSheet.create({
  conatiner: {
    // flex:0.1,s
    // height:moderateScale(72),
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  profile: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: 24,
    marginTop: moderateScale(8),
    marginLeft: moderateScale(24),
  },
  nameView: {
    flexDirection: 'row',
    // flex:1,
    justifyContent: 'space-between',
    marginTop: moderateScale(8),
    marginRight: moderateScale(24),
  },
  subconainer: {
    flex: 1,
    marginLeft: moderateScale(16),
    borderBottomColor: colors.F1F1F2,
    borderBottomWidth: 1,
  },
  name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    height: moderateScale(24),
  },
  time: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  message: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginRight: moderateScale(24),
    // marginBottom:moderateScale(16),
    alignItems: 'center',
    marginLeft: 8,
    // height:moderateScale(24),s
  },
  messageView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(16),
    // backgroundColor:''
  },
  status: {
    // marginRight:moderateScale(8),
  },
});
