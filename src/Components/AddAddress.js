import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from './WrapperContainer';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import ButtonComp from './ButtonComp';

const AddAddress = ({isvisible, close}) => {
  return (
    <WrapperContainer>
      <Modal visible={isvisible} transparent>
        <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.heading}>
              <Text style={styles.header}>{'Add address'}</Text>
              <TouchableOpacity onPress={() => close()}>
                <Image source={imagePath.ic_gray_cross} />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputxt}
                placeholder="Wallet address"
                placeholderTextColor={colors.lightgray}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputxt}
                placeholder="Wallet label"
                placeholderTextColor={colors.lightgray}
              />
            </View>
            <ButtonComp btnText="Save" btnStyle={styles.btn} onPress={()=>close()}/>
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity50,
    justifyContent: 'center',
  },
  main: {
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(24),
    borderRadius: 20,
    padding: 24,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  input: {
    height: moderateScale(56),
    width: '100%',
    backgroundColor: colors.grayinput,
    marginTop: moderateScale(16),
    borderRadius: moderateScale(8),
  },
  inputxt: {
    marginHorizontal: moderateScale(16),
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  btn:{
    marginTop:moderateScale(24)
  }
});
