import store from '../store';
import {
  setUserData,
  apiPost,
  clearUserData,
  apiGet,
  apiPut,
  getUserData,
} from '../../utils/utils';
import types from '../types';
import {
  LOGIN_API,
  SIGNUP_API,
  SOCIAL_LOGIN,
  FORGOT_PASSWORD,
  TUTORIALS_LIST,
  LOGIN_WITH_MOBILE,
  OTP_VERIFICTION,
  RESEND_OTP,
  SET_LOGIN_PIN,
  ADDCONTACTS,
  LISTCONTACTS,
  LIST_MESSAGE,
  LIST_CHATS,
  SEND_MESSAGE,
  EDIT_PROFILE,
  LOGOUT,
  CONTACT,
  LOGIN,
  SET_PIN,
  EDIT_PROFILE_,
  IMAGEUPLOAD,
  CHANGEPASSWORD,
  PINCHECK,
  HELPSUPPORT,
  SAVEADDRESS,
  REDEEMVOUCHER,
  LISTSAVEDWALLET,
  LISTREFERRED,
} from '../../config/urls';
import {useState} from 'react';
import {showSuccess} from '../../helper/helperFunctions';
import {Magic} from '@magic-sdk/react-native';
const magicClient = new Magic('pk_live_FBAA2C5CB588AEE2');
const {dispatch} = store;

const saveUserData = data => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};
const clearreduxdata = data => {
  dispatch({
    type: types.CLEAR_REDUX_STATE,
    payload: {},
  });
};

export function signUp(data) {
  return apiPost(SIGNUP_API, data);
}

const init = async () => {
  try {
    const userData = await getUserData();
    saveUserData(userData);
    console.log(userData, 'ashbk');
  } catch (error) {
    console.log(error);
  }
};

export const login = (data, headers) => {
  console.log(data, 'the given data');
  return new Promise((resolve, reject) => {
    apiPost(OTP_VERIFICTION, data, headers)
      .then(res => {
        // saveUserData(res.data);
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export function socialLogin(data) {
  return new Promise((reslove, reject) => {
    apiPost(SOCIAL_LOGIN, data)
      .then(res => {
        console.log('res from action', res);
        if (res) {
          console.log('yashu enter');
          // saveUserData(res.user)
          setUserData(res.user).then(saved => {
            reslove(res);
          });
        }

        reslove(res);
      })
      .catch(error => {
        console.log('rejected ===>>>>>>>>#######');
        reject(error);
      });
  });
}

export function forgotPassword(data) {
  return apiPost(FORGOT_PASSWORD, data);
}

export const logout = async () => {
  clearUserData();
  clearreduxdata();
};

export function list_tutorials() {
  return apiGet(TUTORIALS_LIST);
}
export function login_with_mobile(data) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data, {'accept-language': 'en'})
      .then(res => {
        setUserData(res.data).then(suc => {
          resolve(res);
          console.log(res);
        });
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
// export function otp_verification(data) {
//   return apiPost(OTP_VERIFICTION, data)
// }
export function resend_otp(data) {
  return apiPut(RESEND_OTP, data);
}

// export function loginpin(data, headers) {
//   return apiPost(SET_LOGIN_PIN, data, headers)
// }

export const loginpin = (data, headers) => {
  console.log(data, 'the given data');
  return new Promise((resolve, reject) => {
    apiPut(SET_PIN, data, {'Accept-Language': 'en'}, headers)
      .then(res => {
        resolve(res);
        init();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export function addContacts(data) {
  return apiPost(CONTACT, data, {'accept-language': 'en'});
}
export function listcontact() {
  return apiGet(LISTCONTACTS);
}

export function listmessage(query) {
  return apiGet(LIST_MESSAGE + '?user_id=' + query);
}

export function listchats() {
  return apiGet(LIST_CHATS);
}
export function sendMessage(data) {
  return apiPost(SEND_MESSAGE, data);
}
export function edit_profile(data) {
  return apiPut(EDIT_PROFILE_, data, {'accept-language': 'en'});
}
export function listsavedwallet(data) {
  return apiGet(LISTSAVEDWALLET, data, {'accept-language': 'en'});
}
export function listreferred(data) {
  return apiGet(LISTREFERRED, data, {'accept-language': 'en'});
}
export function pin_check(data) {
  return apiPost(PINCHECK, data, {'accept-language': 'en'});
}
export function Change_Password(data) {
  return apiPut(CHANGEPASSWORD, data, {'accept-language': 'en'});
}
export function imageUpload(data) {
  return apiPut(IMAGEUPLOAD, data, {'accept-language': 'en'});
}
export function helpSupport(data) {
  return apiPost(HELPSUPPORT, data, {'accept-language': 'en'});
}
export function SaveAddress(data) {
  return apiPost(SAVEADDRESS, data, {'accept-language': 'en'});
}
export function redeemVoucher(query, data) {
  return apiGet(REDEEMVOUCHER + query, data, {'accept-language': 'en'});
}
export function addContact(data) {
  return apiPut(CONTACT, data);
}
