import {month} from 'is_js';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import HeaderComp from '../../Components/HeaderComp';
import {ProfileListComp} from '../../Components/ProfileListComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {logout} from '../../redux/actions/auth';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import {setScreenLock} from '../../utils/utils';
import {Magic} from '@magic-sdk/react-native';
import styles from './styles';
import {Singleton} from '../../config/magicConfig';

const Profile = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const magic = Singleton.getInstance();

  // const magicClient = new Magic('pk_live_FBAA2C5CB588AEE2');

  const lock = useSelector(state => state.loginPin.screenLock);

  useEffect(() => {
    setscreenlock(lock);
  }, []);
  const [screenlock, setscreenlock] = useState(false);

  const onscreenlock = () => {
    let result = {screenLock: !screenlock, isShow: false};
    actions.loginPin(result);
    setScreenLock(!screenlock).then(res => console.log(res, 'locklock'));
    setscreenlock(!screenlock);
  };

  const LOGOUT = async () => {
    // console.log('actions.logout();', await magic.user.getIdToken());
    console.log('logoutttttttttt', magic.user.logout());
    magic.user.logout().then().catch();
    actions.logout();
    // try {
    //   magic.user
    //     .logout()
    //     .then(res => {
    //       console.log(res, 'logou logout');
    //       // actions.logout();
    //     })
    //     .catch(err => {
    //       console.log(err, 'erroeerrrrrr');
    //     });
    // } catch (error) {
    //   console.log('errorerrorerror', error);
    // }
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={{backgroundColor: colors.white}}>
          <HeaderComp
            text={strings.Myprofile}
            headerStyle={{backgroundColor: colors.white}}
            onBackPress={goBack}
          />
        </View>
        <ScrollView>
          <View style={styles.bgimgView}>
            <ImageBackground
              style={styles.profilepic}
              source={imagePath.profile3}>
              <View style={styles.profilecont}>
                <View>
                  <Text style={styles.ViPaybalance}>
                    {strings.ViPaybalance}
                  </Text>
                  <Text style={styles.profileBalnce}>
                    {strings.profileBalnce}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    style={styles.camera}
                    source={imagePath.ic_camera_gallery}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.profiledetails}>
            <View style={styles.editicon}>
              <Text style={styles.ProfileName}>{strings.ProfileName}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationStrings.EDITPROFILE)
                }>
                <Image source={imagePath.ic_edit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.ProfileId}>{strings.ProfileId}</Text>
            <Text style={styles.ProfileEmail}>{strings.ProfileEmail}</Text>
          </View>
          <ProfileListComp
            logoicon={imagePath.ic_my_qr}
            txt={strings.MyQRcode}
            icon={imagePath.ic_gray_arrow}
            onPress={() => navigation.navigate(navigationStrings.MYQR)}
            container={{marginTop: moderateScale(8)}}
          />
          <ProfileListComp
            logoicon={imagePath.ic_transaction_history}
            txt={strings.Transactionhistory}
            icon={imagePath.ic_gray_arrow}
            onPress={() =>
              navigation.navigate(navigationStrings.TRANSACTIONHISTORY)
            }
          />

          <ProfileListComp
            logoicon={imagePath.ic_saved_wallet}
            txt={strings.Savedwallet}
            icon={imagePath.ic_gray_arrow}
            onPress={() => navigation.navigate(navigationStrings.SAVEDWALLET)}
          />
          <ProfileListComp
            logoicon={imagePath.ic_redeem}
            txt={strings.RedeemVoucherCode}
            onPress={() => navigation.navigate(navigationStrings.REDEEMVOUCHER)}
            icon={imagePath.ic_gray_arrow}
          />
          <ProfileListComp
            logoicon={imagePath.ic_referrals}
            txt={strings.Referrals}
            icon={imagePath.ic_gray_arrow}
            onPress={() => navigation.navigate(navigationStrings.REFERRALS)}
          />
          <ProfileListComp
            logoicon={imagePath.ic_help}
            txt={strings.HelpSupport}
            icon={imagePath.ic_gray_arrow}
            onPress={() => navigation.navigate(navigationStrings.HELPSUPPORT)}
          />
          <ProfileListComp
            logoicon={imagePath.ic_screen_lock}
            txt={strings.Screenlock}
            icon={
              screenlock == true ? imagePath.switch_on : imagePath.switch_off
            }
            container={{marginTop: moderateScale(8)}}
            onPress={onscreenlock}
          />
          <ProfileListComp
            logoicon={imagePath.ic_change_pin}
            txt={strings.ChangePIN}
            icon={imagePath.ic_gray_arrow}
            onPress={() => navigation.navigate(navigationStrings.CHANGEPIN)}
          />

          <ProfileListComp
            logoicon={imagePath.ic_about_vipay}
            txt={strings.AboutViPay}
            onPress={() => navigation.navigate(navigationStrings.ABOUTVIPAY)}
            icon={imagePath.ic_gray_arrow}
          />
          <ProfileListComp
            logoicon={imagePath.ic_logout}
            txt={strings.Logout}
            icon={false}
            onPress={LOGOUT}
            appversion={strings.appversion}
            container={{marginTop: moderateScale(8)}}
          />
          <View style={styles.anySuggestionView}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.HELPSUPPORT)
              }>
              <Text style={styles.Anysuggestions}>
                {strings.Anysuggestions}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};
export default Profile;
