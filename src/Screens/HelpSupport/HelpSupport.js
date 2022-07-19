import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import styles from './styles';
import ButtonComp from '../../Components/ButtonComp';
import actions from '../../redux/actions';
import {showError, showSuccess} from '../../helper/helperFunctions';

const HelpSupport = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const [state, setState] = useState({
    name: '',
    phoneNo: '',
    Email: '',
    Message: '',
    data: {},
  });
  const {name, phoneNo, Email, Message, data} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let apidata = {defaultArgument: 'NA'};

    actions
      .edit_profile(apidata)
      .then(res => {
        updateState({
          name: res.data.name,
          phoneNo: res.data.phone,
          Email: res.data.email,
          data: res.data,
        });
      })
      .catch(err => {});
  };

  const onsubmit = () => {
    if (name.length == 0) {
      showError(`Name Can't be Empty`);
    } else if (phoneNo.length == 0) {
      showError(`Phone Number Can't be Empty`);
    } else if (Email.length == 0) {
      showError(`Email Can't be Empty`);
    } else if (EmailValidate(Email) == false) {
      showError('Enter Valid Email Address');
    } else if (Message.trim().length == 0) {
      showError(`Message Can't be Empty`);
    } else {
      let Apidata = {
        name: name,
        phone: phoneNo,
        email: Email,
        message: Message.trim(),
      };

      actions
        .helpSupport(Apidata)
        .then(res => {
          console.log(res, 'helpSupporthelpSupporthelpSupport');
          showSuccess(
            'Your request submitted successfully. Our team get back to you shortly',
          );
        })
        .catch(err => {
          console.log(err, 'erroroororoorhelpSupport');
          showError('Something went wrong try again later');
        });
    }
  };

  const EmailValidate = text => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(text, reg.test(text), 'emailllllllll');
    return reg.test(text);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.HelpSupport} onBackPress={goBack} />
        <View style={styles.helpform}>
          <View style={styles.inputfieldStyle}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={colors.lightgray}
              style={styles.text}
              onChangeText={value => updateState({name: value})}
              value={state.name}
            />
          </View>
          <View style={styles.inputfieldStyle}>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={colors.lightgray}
              style={styles.text}
              // editable={false}
              maxLength={16}
              onChangeText={value => updateState({phoneNo: value})}
              value={state.phoneNo}
            />
          </View>
          <View style={styles.inputfieldStyle}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.lightgray}
              style={styles.text}
              onChangeText={value => updateState({Email: value})}
              value={state.Email}
            />
          </View>
          <View style={styles.message}>
            <TextInput
              style={styles.messageinput}
              multiline={true}
              autoCorrect={false}
              placeholder={'Write your message here…'}
              onChangeText={value => updateState({Message: value})}
              value={state.Message}></TextInput>
          </View>
          <Text style={styles.helpdesc}>{strings.helpdesc}</Text>
          <View style={styles.btn}>
            <ButtonComp btnText={strings.Submit} onPress={onsubmit} />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};
export default HelpSupport;
