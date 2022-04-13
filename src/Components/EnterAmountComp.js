import {StyleSheet, Text, View, Image,TextInput} from 'react-native';
import React from 'react';
import HeaderComp from './HeaderComp';
import strings from '../constants/lang';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const EnterAmountComp = ({onBackPress,Send_Request_Txt}) => {
  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      <HeaderComp
        text={strings.name_Send}
        image={imagePath.profile3}
        imagestyle={styles.profile}
        onBackPress={onBackPress}
        headerStyle={{marginVertical: moderateScaleVertical(16)}}
      />

      <View style={styles.dropdown}>
        <Image style={styles.dropDownLogo} source={imagePath.crypto1} />
        <View style={styles.dropdownsubView}>
          <Text style={styles.coinname}>{strings.bitcoin}</Text>
          <Image source={imagePath.ic_dropdown_arrow} />
        </View>
      </View>
      <View style={styles.coinAddressView}>
      <Text style={styles.addressName}>{strings.addressName}</Text>
      <Text style={styles.coinAddress}>{strings.coinAddress}</Text>
      </View>
      <View style={styles.amountInputView}>
          <View style={styles.EnterAmountView}>
          <Text style={styles.EnterAmount}>{Send_Request_Txt}</Text>
          <Text style={styles.maxAmount}>{strings.maxAmount}</Text>
          </View>
          <View style={styles.input}>
            
              <TextInput 
              placeholder={strings.inputValue}
              placeholderTextColor={colors.OBSIDIAN}
              keyboardType='numeric'
              style={styles.inputValue}>
              </TextInput>
              <Text style={styles.btc}>{strings.BTC}</Text>

          </View>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

export default EnterAmountComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop:moderateScale(16),
    // backgroundColor:'red'
  },
  profile: {
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: 16,
  },
  dropdown: {
    height: moderateScale(56),
    backgroundColor: colors.grayinput,
    marginHorizontal: moderateScale(24),
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dropDownLogo: {
    height: moderateScale(40),
    width: moderateScale(40),
    marginLeft: moderateScale(8),
  },
  dropdownsubView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(16),
  },
  coinAddressView:{
      alignItems:'center',
      marginTop:moderateScale(8),
  },
  EnterAmountView:{
      flexDirection:'row',
      justifyContent:"space-between"
  },
  amountInputView:{
      marginHorizontal:moderateScale(24),
      marginTop:moderateScale(24)
      
  },
  input:{
      backgroundColor:colors.grayinput,
      height:moderateScale(64),
      borderRadius:16,
      marginTop:moderateScale(8),
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:moderateScale(16),

  },
  addressName:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsSemibold,
      color:colors.OBSIDIAN,
  },
  coinAddress:{
      ...commonStyles.fontSize12,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.grayprice,
  },
  EnterAmount:{
      ...commonStyles.fontSize14,
      color:colors.grayprice,
      fontFamily:fontFamily.poppinsRegular,
  },
  maxAmount:{
      ...commonStyles.fontSize14,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.OBSIDIAN,
  },
  inputValue:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.OBSIDIAN,
      flex:0.9
  },
  btc:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.OBSIDIAN,
  },
  coinname:{
    ...commonStyles.fontSize15,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.OBSIDIAN
  },

});
