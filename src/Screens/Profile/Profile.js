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
import {launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
const RNFS = require('react-native-fs');

const Profile = ({navigation}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    vipayId: '',
    profilePic: '',
  });
  const {name, email, vipayId, profilePic} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  //---------go back --------------
  const goBack = () => {
    navigation.goBack();
  };

  const magic = Singleton.getInstance();
  const lock = useSelector(state => state.loginPin.screenLock);

  // ----- use effect screen lock ---------------
  useEffect(() => {
    setscreenlock(lock);
  }, [lock]);
  const [screenlock, setscreenlock] = useState(false);

  const onscreenlock = () => {
    navigation.navigate(navigationStrings.CONFIRMSCREENLOCK);
  };

  // ----------------- user data use effect----------
  useEffect(() => {
    getuserdata();
  }, []);

  // ----------------- api call get user data ----------------
  const getuserdata = () => {
    let apidata = {defaultArgument: 'NA'};
    actions
      .edit_profile(apidata)
      .then(res => {
        console.log(res, 'svdbfjbjhsdbjf');
        updateState({
          name: res.data.name,
          email: res.data.email,
          profilePic: res.data.profilePic,
        });
      })
      .catch(err => {
        console.log(err, 'sdjvjhbsjfbjb');
      });
  };

  // ------------------- logout function -------------

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

  // -----------------------image picker-----------------

  const chooseFile = () => {
    let options = {
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      } else {
        console.log(response, 'responseresponseresponse');
        base(response.assets[0].uri.replace('file://', ''));
      }
    });
  };

  //--------------------- base 64 and ipfs upload --------------

  const base = async val => {
    RNFS.readFile(val, 'base64')
      .then(res => {
        const optionsipfs = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-API-Key':
              'L7E7GWDNurxjTmDMoPQLODiyJJQEJ6BRxIgTA4FBrImbJx2Vf3oMyHt3FxDfCN29',
          },
          body: JSON.stringify([
            {path: 'PROFILE_PIC' + name + makeid(), content: res},
          ]),
        };

        fetch(
          'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder',
          optionsipfs,
        )
          .then(response => response.json())
          .then(response => {
            console.log(
              response[0].path,
              'responseresponseresponseresponsebdhjcj',
            );

            imageUploadd(response[0].path);
          })
          .catch(err => console.error(err, 'upload error'));
      })
      .catch(err => {
        console.log(err, 'errrrrrrrr');
      });
  };
  //---------------- random value for image path---------------
  function makeid() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text.substring(0, 6);
  }

  //----------------image upload to api ------------------
  const imageUploadd = path => {
    let apidata = {profilePicUrl: path};
    console.log(apidata, 'kbdsbdbsjdbjhb');
    actions
      .edit_profile(apidata)
      .then(res => {
        console.log(res, 'imageUploadimageUploadimageUpload');
        getuserdata();
      })
      .catch(err => {
        console.log(err, 'imageUploadimageUploadimageUpload');
      });
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
              source={
                !!profilePic
                  ? {uri: profilePic}
                  : imagePath.my_profile_placeholder
              }>
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
                style={styles.profilecont}>
                {/* <View style={styles.profilecont}> */}
                  <View>
                    <Text style={styles.ViPaybalance}>
                      {strings.ViPaybalance}
                    </Text>
                    <Text style={styles.profileBalnce}>
                      {strings.profileBalnce}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={chooseFile}>
                    <Image
                      style={styles.camera}
                      source={imagePath.ic_camera_gallery}
                    />
                  </TouchableOpacity>
                {/* </View> */}
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={styles.profiledetails}>
            <View style={styles.editicon}>
              <Text style={styles.ProfileName}>{name}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationStrings.EDITPROFILE)
                }>
                <Image source={imagePath.ic_edit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.ProfileId}>{strings.ProfileId}</Text>
            <Text style={styles.ProfileEmail}>{email}</Text>
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
