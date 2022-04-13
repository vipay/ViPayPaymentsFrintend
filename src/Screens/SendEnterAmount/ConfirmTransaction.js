import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ButtonComp';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

const ConfirmTransaction = ({onCrossPress, onSendPress}) => {
  return (
     
    <View style={styles.conatiner}>
    
      <View style={styles.header}>
        <Text style={styles.heading}>{strings.Confirmtransaction}</Text>
        <Pressable onPress={onCrossPress}>
          <Image source={imagePath.ic_gray_cross} />
        </Pressable>
      </View>
      <ScrollView>
      <View style={styles.bgimgView} >
        <ImageBackground
          style={styles.bgimg}
          source={imagePath.confirmation_card}>
              <View style={styles.cardView}>
                 <View style={styles.cardCoin}>
                     <Text style={styles.coinName}>{strings.bitcoin}</Text>
                     <Image style={styles.coinimg } source={imagePath.crypto1}/>
                 </View>
                 <Text style={styles.sending}>{strings.yoursending}</Text>
                 {/* <Text></Text> */}
                 <View style={styles.feeView}>
                     <Text style={styles.fee}>{strings.Networkfee}</Text>
                     <Text style={styles.fee}>{strings.fee}</Text>
                 </View>
              </View>
          </ImageBackground>
      </View>
      <View style={styles.infoView}>
        <View style={styles.subinfoView}>
          <Text style={styles.title}>{strings.From}</Text>
          <Image style={styles.profile} source={imagePath.profile2} />
        </View>
        <Text style={styles.YourBTCaccount}>{strings.YourBTCaccount}</Text>
        <Text style={styles.address}>{strings.accountaddress1}</Text>
      </View>

      <View style={styles.infoView}>
        <View style={styles.subinfoView}>
          <Text style={styles.title}>{strings.TO}</Text>
          <Image style={styles.profile} source={imagePath.profile3} />
        </View>
        <Text style={styles.YourBTCaccount}>{strings.AbrielsBTCaccount}</Text>
        <Text style={styles.address}>{strings.accountaddress2}</Text>
      </View>
      <View style={styles.button}>
        <ButtonComp btnText={strings.send} onPress={onSendPress} />
      </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmTransaction;

const styles = StyleSheet.create({
  conatiner: {
    padding: moderateScale(24),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
  },
  heading: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  bgimgView: {
    marginTop: moderateScale(24),
    marginBottom: moderateScale(8),
    // margin:8,
    height: moderateScale(170),
    // padding:7,
    backgroundColor: 'white',
    shadowColor: '#42D0B7',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.47,
    shadowRadius: 7.49,

    elevation: 13,
    borderRadius: 16,
  },
  bgimg: {
    height: '100%',
    width:'100%',
  },
  infoView: {
    height: moderateScale(120),
    borderWidth: 1,
    borderColor: colors.F1F1F2,
    borderRadius: 18,
    marginTop: moderateScale(16),
    padding: moderateScale(16),
  },
  subinfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: 16,
  },
  title: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    height: 32,
  },
  YourBTCaccount: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    height: 32,
  },
  address: {
    ...commonStyles.fontSize12,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  button: {
    marginTop: moderateScale(32),
    marginBottom:moderateScale(24)
  },
  cardCoin:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

  },
  cardView:{
      padding:moderateScale(16)

  },
  coinimg:{
      height:moderateScale(32),
      width:moderateScale(32),
  },
  coinName:{
      ...commonStyles.fontSize14,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.white,
      height:moderateScale(32),
      textAlign:'center'
  },
  sending:{
      ...commonStyles.fontSize24,
      fontFamily:fontFamily.RocGroteskBold,
      width:moderateScale(224),
      color:colors.white,
      lineHeight:35
  },
  feeView:{
  flexDirection:'row',
  marginTop:moderateScale(8),
  justifyContent:'space-between'

  },
  fee:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.white,
  }
});
