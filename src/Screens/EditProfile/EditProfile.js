import React, {Component, useEffect, useState} from 'react';
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
  Modal,
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
import VerifyEmail from '../../Components/VerifyEmail';
import {useSelector} from 'react-redux';
import {showError, showSuccess} from '../../helper/helperFunctions';
import actions from '../../redux/actions';
import {Magic} from '@magic-sdk/react-native';
import CountryPicker, {getCallingCode} from 'react-native-country-picker-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

// import {create} from 'ipfs-http-client';

// const client = create('https://ipfs.infura.io:5001');

const EditProfile = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const data = useSelector(state => state.auth.userData);
  const magicClient = new Magic('pk_live_FBAA2C5CB588AEE2');
  const [countryCode, setcountryCode] = useState('AE');
  const [iso2, setiso2] = useState();
  const [callingCode, setcallingCode] = useState('971');
  const [activeOtp, setActiveOtp] = useState(false);

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
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    getdata();
    updateState({name: data.name, email: data.email});
  }, []);
  const getdata = () => {
    let apidata = {defaultArgument: 'NA'};

    actions
      .edit_profile(apidata)
      .then(res => {
        updateState({
          name: res.data.name,
          email: res.data.email,
          profilepic: res.data.profilePic.data,
        });
        // showSuccess('Update Successful')
        // console.log(res.data.profilePic.data, 'profileeeeeeeeee');
        console.log(res, 'show sucess');
      })
      .catch(err => {
        console.log(err);
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
        console.log(response.assets[0], 'responseresponseresponse');
        imageUpload(response);
      }
    });
  };

  const imageUpload = response => {
    let apidata = dataform(response);
    console.log(apidata, 'apidataapidataapidata');
    actions
      .imageUpload(apidata)
      .then(res => {
        console.log(res, 'image base 64');
      })
      .catch(err => {
        console.log(err, 'something wrong');
      });
  };
  const dataform = response => {
    let imagePath = response.assets[0].uri;
    const imgData = new FormData();
    imgData.append('profilePic', {
      uri: imagePath,
      name: 'image.png',
      fileName: 'image',
      type: 'image/png',
    });

    console.log('.....imgData....', imgData);
    return JSON.stringify([{
      'profilePic': {
        uri: imagePath,
        name: 'image.png',
        fileName: 'image',
        type: 'image/png',
      },

    }
      
    ]);
  };

  // const ipfsupload = async response => {
  //   console.log("ipfsuploadipfsuploadipfsupload")
  //   try {
  //     const added = await client.add(response.assets[0].uri);
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  //     // updateFileUrl(url);
  //   } catch (error) {
  //     console.log('Error uploading file: ', error);
  //   }
  // };

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
          // updateState({name: res.data.name,email: res.data.email })
          showSuccess('Update Successful');
          updateState({visiblity: false, loader: false});
          // toggleModal()
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

        {/* <View style={styles.inputfield}>
              <View style={styles.subinputfield}>
                <View style={styles.countrypicker}>
                  <CountryPicker
                    withFilter
                    countryCode={countryCode}
                    withFlagButton={false}
                    withCallingCode={callingCode}
                    withCallingCodeButton={true}
                    cca2={iso2}
                    theme={styles.countrycode}
                    excludeCountries={['AQ', 'BV', 'TF', 'HM', 'UM']}
                    onSelect={country => {
                      // console.log('country',country);
                      const {cca2, callingCode} = country;
                      updateState({showtimer: false, resend: false});

                      setcountryCode(cca2);
                      setcallingCode(country.callingCode);
                    }}
                  />
                </View>

                <Text style={styles.inputline} />
                <TextInput
                  style={styles.phoneNo}
                  keyboardType={'numeric'}
                  maxLength={14}
                  // autoFocus
                  onChangeText={value => {
                    updateState({
                      phoneNO: value,
                      showtimer: false,
                      resend: false,
                    });
                    // get otp activates when enter value is 9
                    value.length > 8 ? setActiveOtp(true) : setActiveOtp(false);
                  }}
                  placeholderTextColor={colors.lightgray}
                  placeholder={strings.placeholderPHNO}
                />
              </View>
             
            </View> */}

        <View style={styles.phoneView}>
          {/* <Text style={styles.countrycode}>{'+' + data.country_code}</Text>
          <Text style={styles.line} /> */}
          <Text style={styles.Number}>{data.phone}</Text>
        </View>
        <Modal visible={visiblity} transparent>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              // backgroundColor: 'green',
            }}>
            <View style={{flex: 0.7}}>
              <magicClient.Relayer />
            </View>
          </View>
        </Modal>
        {/* <VerifyEmail showModal={activee} renderModal={toggleModal} /> */}
        <View style={styles.btn}>
          <ButtonComp btnText={strings.Update} onPress={editprofile} />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default EditProfile;
