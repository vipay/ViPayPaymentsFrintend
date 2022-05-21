import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import {moderateScale} from '../styles/responsiveSize';
import ButtonComp from './ButtonComp';
const VerifyEmail = props => {
  const {showModal, 
    renderModal} = props;
  const [active, setactive] = useState(false);

  return (
    <View style={styles.containerr}>
      <Modal
        animationType="none"
        transparent={true}
        visible={showModal}
        open={active}>
        <View style={styles.container}>
          <View style={styles.View}>
            <View style={styles.heading}>
              <Text style={styles.Verifyyouremail}>
                {strings.Verifyyouremail}
              </Text>
              <TouchableOpacity onPress={() => renderModal()}>
                <Image source={imagePath.ic_gray_cross} />
              </TouchableOpacity>
            </View>
            <Text style={styles.email}>{strings.VerifyyouremailDesc}</Text>
            <Text style={styles.email}>{strings.ProfileEmail}</Text>
            <View style={styles.input}>
              <TextInput
              style={styles.inputtext}
              maxLength={6}
              placeholder='6-digit verification code'
              placeholderTextColor={colors.lightgray}></TextInput>
            </View>
            <View style={styles.btn}>
            <ButtonComp btnText={strings.Submit}  onPress={() => renderModal()}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
  },
  View: {
    backgroundColor: 'white',
    height: 280,
    width: '100%',
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    color: 'green',
    marginBottom: 20,
  },
  button: {
    margin: 20,
    width: 200,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(24),
    marginBottom: moderateScale(8),
    // backgroundColor:"red"
  },
  Verifyyouremail: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  email: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
    marginHorizontal: moderateScale(24),
  },
  input: {
    backgroundColor: colors.grayinput,
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(16),
    borderRadius: 16,
    height: moderateScale(56),
    marginBottom: moderateScale(24),
    // alignItems:'center'
    justifyContent:"center"
  },
  inputtext:{
      ...commonStyles.fontSize15,
      fontFamily:fontFamily.poppinsRegular,
      color:colors.OBSIDIAN,
      paddingLeft:moderateScale(16)
  },
  btn:{
      marginHorizontal:moderateScale(24)
  }
});
