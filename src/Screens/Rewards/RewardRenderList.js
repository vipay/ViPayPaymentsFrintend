import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const RewardRenderList = ({item, index,OnShare,onPress}) => {
  return (
    <View style={{...styles.conatiner, backgroundColor: item.bgcolor}}>
      <Pressable onPress={onPress} style={styles.subconatiner}>
        <View style={styles.logoView}>
          <Text style={styles.Congrats}>{strings.Congrats}</Text>
          <Image style={styles.logo} source={item.logo} />
        </View>
        <Text style={styles.rewardsPrice}>{item.price}</Text>
        <Text style={styles.rewardDescription}>
          {item.desc}
        </Text>
      </Pressable>

      <Pressable onPress={OnShare}>
        <Text style={styles.share}>{strings.Share}</Text>
      </Pressable>
      <View style={styles.bgimg}>
        <ImageBackground
          style={styles.imgbg}
          source={imagePath.reward_bg_wave}></ImageBackground>
      </View>
    </View>
  );
};
export default RewardRenderList;

const styles = StyleSheet.create({
  conatiner: {
   
    height: moderateScale(200),
    // width: 160,
    width:'48%',
    // backgroundColor: colors.E8F5FF,  
    borderRadius: 16,
    marginTop:moderateScale(8),
    marginHorizontal:moderateScale(4)
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    marginTop: moderateScale(16),
  },
  subconatiner: {
   
    marginHorizontal: moderateScale(16),
  },
  Congrats: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  logo: {
   
  },
  rewardsPrice: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    height: 32,
  },
  rewardDescription: {
    ...commonStyles.fontSize13,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  share: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsSemibold,
    color: colors.Blue,
    marginTop: moderateScale(24),
    marginLeft: moderateScale(16),
  },
  imgbg: {
    position: 'absolute',
    // left:0 ,
    right: 0,
    bottom: 0,
    height: 95,

    width: 95,
  },
  bgimg: {
    flex: 1,
  },
});
