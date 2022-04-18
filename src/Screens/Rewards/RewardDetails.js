import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';

import imagePath from '../../constants/imagePath';
import {moderateScale} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import ButtonComp from '../../Components/ButtonComp';
import { ScrollView } from 'react-native-gesture-handler';

const RewardDetails = ({onPressCross}) => {
  return (
    <View style={styles.conatiner}>
      <Pressable onPress={onPressCross} style={styles.cross}>
        <Image style={styles.crossimg} source={imagePath.ic_gray_cross} />
      </Pressable>
      <View style={styles.subContainer1}>
        <View style={styles.main}>
          <View style={styles.logoView}>
            <Text style={styles.Congrats}>{strings.Congrats}</Text>
            <Image source={imagePath.ic_prime} />
          </View>
          <Text style={styles.rewardsPrice}>{strings.rewardsPrice}</Text>
          
          <Text style={styles.rewardDescription}>
            {strings.rewardDescription}
          </Text>
         
          <View style={styles.bgimg}>
            <ImageBackground
              style={styles.imgbg}
              source={imagePath.reward_bg_wave}></ImageBackground>
          </View>
        </View>
      </View>
      <View style={styles.subContainer2}>
        <ScrollView>
        <View style={styles.logo}>
          <Image source={imagePath.ic_prime} />
          <Text style={styles.price}>{strings.rewardsPrice}</Text>
        </View>
        <Text style={styles.desc}>{strings.rewardDescription}</Text>
        <View style={styles.expiresView}>
            <Image  source={imagePath.ic_expire_time}/>
            <Text style={styles.expiretxt}>{strings.Expires}</Text>
        </View>
        <Text style={styles.rewardDes}>{strings.rewardFullDesc}</Text> 
        </ScrollView>
        <View style={styles.btn}>
        <ButtonComp  btnText={strings.SharewithFriend} />
        </View>
      </View>
    </View>
  );
};

export default RewardDetails;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  subContainer1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer2: {
    backgroundColor: colors.white,
    flex: 0.5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // paddingBottom:30
  },
  cross: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: moderateScale(24),
    alignItems: 'center',
  },
  main: {
    backgroundColor: colors.E8F5FF,
    // height: moderateScale(184),
    // width: moderateScale(184),
    width:'50%',
    borderRadius: 16,
    paddingHorizontal: moderateScale(16),
  },
  logoView: {
    marginTop: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardsPrice: {
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    height: moderateScale(32),
  },
  Congrats: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  rewardDescription: {
    // textAlign:'auto',

    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginTop: moderateScale(16),
    marginBottom:moderateScale(24),
    lineHeight:22,
    // backgroundColor:'red',
  },
  logo: {
    marginHorizontal:moderateScale(24),
    marginTop:moderateScale(24),
    flexDirection: 'row',
  },
  price: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginLeft: moderateScale(16),

  },
  imgbg: {
    position: 'absolute',
    // left:0 ,
    right: -16,
    bottom: 0,
    height: 75,

    width: 80,
  },
  bgimg: {
    flex: 1,
  },
  desc:{
      ...commonStyles.fontSize16,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.OBSIDIAN,
      marginHorizontal:moderateScale(24),
      marginTop:moderateScale(8)
  },
  expiresView:{
      marginHorizontal:moderateScale(24),
      flexDirection:'row',
      marginTop:moderateScale(8),

  },
  expiretxt:{
      ...commonStyles.fontSize14,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.grayprice,
      marginLeft:moderateScale(8),

  },
  rewardDes:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.grayprice,
      marginHorizontal:moderateScale(24),
      marginTop:moderateScale(16),
      marginBottom:moderateScale(52),
  },
  btn:{
   
    flex:1,
      justifyContent:'flex-end',
      paddingBottom:moderateScale(24),
      marginHorizontal:moderateScale(24),
  }

});
