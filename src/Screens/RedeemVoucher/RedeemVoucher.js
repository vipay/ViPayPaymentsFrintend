import {month} from 'is_js';
import React, {Component} from 'react';
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


 const RedeemVoucher = ({navigation}) => {
    const goBack = () => {
        navigation.goBack();
      };
    return(
        <WrapperContainer>
            <View style={styles.container}>
                <HeaderComp
                onBackPress={goBack}
                text={strings.RedeemVoucherCode}
                />
                <View style={{flex:1}}>

                
                <View style={styles.input}>
                    <TextInput
                    style={styles.txtinput}
                    placeholderTextColor={colors.lightgray}
                    placeholder={strings.RedeemVoucherPlaceholder}>

                    </TextInput>
                </View>
                </View>
                <View style={styles.main}>
                <ButtonComp
                btnText={strings.Redeem}
            />
                </View>
            </View>
        </WrapperContainer>
    )
}
export default RedeemVoucher;