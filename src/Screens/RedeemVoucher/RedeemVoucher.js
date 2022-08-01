import {month} from 'is_js';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderComp from '../../Components/HeaderComp';
import {ProfileListComp} from '../../Components/ProfileListComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import {showError, showSuccess} from '../../helper/helperFunctions';
import actions from '../../redux/actions';

const RedeemVoucher = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [code, setcode] = useState('');
  const [loader, setloader] = useState(false);
  const Redeem = () => {
    if (code.trim().length == 0) {
      showError("Voucher Code can't be empty ");
    } else {
      setloader(true);
      let Apidata = '?code=' + code;
      actions
        .redeemVoucher(Apidata)
        .then(res => {
          showSuccess('Code redeemed successfully');
          setcode('');
          setloader(false);
        })
        .catch(err => {
          showError('Please enter the valid code');
          setloader(false);
        });
    }
  };

  console.log(code, 'codeeeeee');
  return (
    <WrapperContainer isLoading={loader}>
      <View style={styles.container}>
        <HeaderComp onBackPress={goBack} text={strings.RedeemVoucherCode} />
        <View style={{flex: 1}}>
          <View style={styles.input}>
            <TextInput
              value={code}
              style={styles.txtinput}
              placeholderTextColor={colors.lightgray}
              placeholder={strings.RedeemVoucherPlaceholder}
              onChangeText={value => setcode(value)}
            />
          </View>
        </View>
        <View style={styles.main}>
          <ButtonComp btnText={strings.Redeem} onPress={Redeem} />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default RedeemVoucher;
