import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import styles from './styles';
import ButtonComp from '../../Components/ButtonComp';
import {useSelector} from 'react-redux';
import {showError, showSuccess} from '../../helper/helperFunctions';
import actions from '../../redux/actions';
import {Magic} from '@magic-sdk/react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import {useMoralisFile, use} from 'react-moralis';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
const Moralis = require('moralis/react-native.js');

Moralis.setAsyncStorage(AsyncStorage);

// import { Moralis } from 'moralis'

const RNFS = require('react-native-fs');

// import {create} from 'ipfs-http-client';

// const client = create('https://ipfs.infura.io:5001');

const EditProfile = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const data = useSelector(state => state.auth.userData);
  const magicClient = new Magic('pk_live_FBAA2C5CB588AEE2');
  const [state, setState] = useState({
    name: '',
    email: '',
    phoneNO: '',
    otp: '',
    auth: '',
    resend: false,
    counter: 0,
    showtimer: false,
    pincheck: false,
    number: '',
    visiblity: false,
    DID: '',
    changed: false,
    loader: false,
    response,
    profilepic: '',
    imagedata: '',
    base64: '',
    imageLink,
  });
  const {
    name,
    email,
    phoneNO,
    otp,
    auth,
    resend,
    counter,
    showtimer,
    number,
    visiblity,
    DID,
    changed,
    loader,
    response,
    profilepic,
    imagedata,
    base64,
    imageLink,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useFocusEffect(
    React.useCallback(() => {
      getdata();
    }, []),
  );
  useEffect(() => {
    getdata();
    updateState({name: data.name, email: data.email, loader: true});
  }, []);

  const getdata = () => {
    let apidata = {defaultArgument: 'NA'};

    actions
      .edit_profile(apidata)
      .then(res => {
        updateState({
          name: res.data.name == 'Vi' ? null : res.data.name,
          email: res.data.email,
          loader: false,
          profilepic: res?.data?.profilePic.data,
        });
        console.log(res, 'show sucess');
      })
      .catch(err => {
        console.log(err);
        updateState({
          loader: false,
        });
      });
  };

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
        updateState({imagedata: response.assets[0].uri.replace('file://', '')});
        // imageUpload(response);
        base(imagedata);
      }
    });
  };
  console.log(imagedata, 'imagedataimagedataimagedata');

  const base = async () => {
    RNFS.readFile(imagedata, 'base64')
      .then(res => {
        // let urlString = 'data:image/jpeg;base64,' + res;
        // console.log(res, 'jhhhhhhh');
        // console.log(urlString, 'urlStringurlStringurlString');
        // updateState({base64: res});

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
            // updateState({imageLink: response[0].path});
            imageUploadd(response[0].path);
          })
          .catch(err => console.error(err, 'upload error'));
      })
      .catch(err => {
        console.log(err, 'errrrrrrrr');
      });
  };
  console.log(imageLink, 'shbdjhbdjfbjh');

  function makeid() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text.substring(0, 6);
  }
  const imageUploadd = path => {
    let apidata = {profilePic: path};
    console.log(apidata, 'kbdsbdbsjdbjhb');
    actions
      .imageUpload(apidata)
      .then(res => {
        console.log(res, 'imageUploadimageUploadimageUpload');
      })
      .catch(err => {
        console.log(err, 'imageUploadimageUploadimageUpload');
      });
  };

  const editprofile = () => {
    let apidata = {name: name};
    if (name == null) {
      showError("Name Can't be Empty");
    } else if (name.length == 0) {
      showError("Name Can't be Empty");
    } else if (email == null) {
      showError("Email Can't be Empty");
    } else if (email.length == 0) {
      showError("Email Can't be Empty");
    } else if (changed == true) {
      updateState({visiblity: true, loader: true});

      setTimeout(() => {
        updateState({loader: false});
      }, 10000);

      magicClient.auth
        .loginWithEmailOTP({
          email: email,
        })
        .then(e => {
          console.log('magicClientmagicClient', e);
          updateState({visiblity: false, loader: false});

          actions
            .edit_profile({name: name, emailOTPVerificationDIDToken: e})
            .then(res => {
              showSuccess('Update Successful');

              console.log(res, 'show sucess');
              updateState({visiblity: false, loader: false});
            })
            .catch(err => {
              console.log(err);
              updateState({visiblity: false, loader: false});
            });
        })
        .catch(error => {
          console.log('aaa', error);
          updateState({visiblity: false});
        });
    } else {
      actions
        .edit_profile({name: name})
        .then(res => {
          showSuccess('Update Successful');
          updateState({visiblity: false, loader: false});
          console.log(res, 'show sucess');
        })
        .catch(err => {
          console.log(err);
          updateState({visiblity: false, loader: false});
        });
    }
  };

  const [activee, setactivee] = useState(false);
  const toggleModal = () => {
    setactivee(!activee);
  };

  console.log(profilepic.length, 'piiiiiccccccccc');
  return (
    <WrapperContainer isLoading={loader}>
      <View style={styles.container}>
        <HeaderComp text={strings.Editprofile} onBackPress={goBack} />

        <TouchableOpacity onPress={chooseFile}>
          <View style={styles.changepic}>
            <FastImage
              style={styles.profilepic}
              source={
                profilepic == null
                  ? imagePath.ic_profile_placeholder
                  : {uri: `data:image/jpg;base64,${profilepic}`}
              }
            />
            <View style={styles.textView}>
              <Text style={styles.Changeprofilepicture}>
                {strings.Changeprofilepicture}
              </Text>
              <Image source={imagePath.ic_gray_arrow} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.bgView}>
          <TextInput
            style={styles.ProfileName}
            placeholder={'Full Name'}
            placeholderTextColor={colors.lightgray}
            onChangeText={value => updateState({name: value})}
            value={state.name}></TextInput>
        </View>
        <View style={styles.bgView}>
          <Text style={styles.ProfileName}>{strings.vipayid}</Text>
        </View>
        <Text style={styles.vipayidtxt}>{strings.ViPayIDisautogenerated}</Text>
        <View style={styles.bgView}>
          <TextInput
            onChangeText={value => updateState({email: value, changed: true})}
            value={state.email}
            placeholderTextColor={colors.lightgray}
            placeholder={'Email'}
            style={styles.ProfileEmail}></TextInput>
        </View>

        <View style={styles.phoneView}>
          <Text style={styles.Number}>{data.phone}</Text>
        </View>
        <Modal visible={visiblity} transparent>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={{flex: 0.7}}>
              <magicClient.Relayer />
            </View>
          </View>
        </Modal>

        <View style={styles.btn}>
          <ButtonComp btnText={strings.Update} onPress={editprofile} />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default EditProfile;
