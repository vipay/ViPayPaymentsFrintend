import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale } from '../styles/responsiveSize';

// import commonStyles from '../../styles/commonStyles';
// import fontFamily from '../styles/fontFamily';
// import {moderateScale} from '../styles/responsiveSize';
// import imagePath from '../constants/imagePath';
// import colors from '../styles/colors';

const ContactRenderList = ({item, index, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.subcontaner}>
        <Image style={styles.profile} source={imagePath.profile3} />
        <View style={styles.lineview}>
        <View >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phoneNo}>{item.mobile_number}</Text>
        </View>
        <View style={styles.arrow}>
          {item.is_match == true ? (
            <Image source={imagePath.ic_gray_arrow} />
          ) : (
            <View style={styles.invite}>
              <Text style={styles.invitetxt}>
              Invite
              </Text>
            </View>
          )}
        </View>
        </View>
      </View>
    </Pressable>
  );
};
export default ContactRenderList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  
  },
  subcontaner: {
    flexDirection: 'row',
    paddingTop:moderateScale(8),
    // paddingBottom:moderateScale(16)
  },
  profile: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: 25,
    marginLeft:moderateScale(24)
  },
  invite: {
    height: moderateScale(32),
    width: moderateScale(80),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4C4C6',
    alignItems:'center',
    justifyContent:'center',
  },
  lineview:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth:0.6,
    borderColor:'#F1F1F2',
    justifyContent:'space-between',
    paddingBottom:16,
     marginLeft: moderateScale(16),
  },
  name:{
    ...commonStyles.fontSize16,
    fontFamily:fontFamily.RocGroteskBold,
    color:colors.OBSIDIAN,
    // lineHeight:35,
  },
  arrow:{
    justifyContent:'center',
    marginRight:moderateScale(24)
  },
  phoneNo:{
    ...commonStyles.fontSize14,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.grayprice,
    lineHeight:35,
  },
  invitetxt:{
    ...commonStyles.fontSize13,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.OBSIDIAN,
  },
  
});