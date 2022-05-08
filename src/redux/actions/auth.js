import store from '../store';
import { setUserData, apiPost, clearUserData, apiGet, apiPut ,getUserData} from '../../utils/utils';
import types from '../types';
import { LOGIN_API, SIGNUP_API, SOCIAL_LOGIN, FORGOT_PASSWORD, TUTORIALS_LIST, LOGIN_WITH_MOBILE, OTP_VERIFICTION, RESEND_OTP, SET_LOGIN_PIN } from '../../config/urls';
import { useState } from 'react';
const { dispatch } = store;

const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};


export function signUp(data) {
  return apiPost(SIGNUP_API, data);
}

const init = async () => {
    try {
const userData = await getUserData()
saveUserData(userData);
console.log(userData, 'ashbk')
    }
    catch (error) {
          console.log(error)
        }
  }


export const login = (data,headers) => {
  console.log(data, 'the given data')
  return new Promise((resolve, reject) => {
    apiPost(OTP_VERIFICTION, data,headers)
      .then((res) => {
        // saveUserData(res.data);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export function socialLogin(data) {
  return new Promise((reslove, reject) => {
    apiPost(SOCIAL_LOGIN, data).then(res => {
      console.log("res from action", res)
      if (res) {
        console.log("yashu enter")
        // saveUserData(res.user)
        setUserData(res.user).then(saved => {
          reslove(res);
        })
      }

      reslove(res)
    }).catch(error => {
      console.log("rejected ===>>>>>>>>#######")
      reject(error);

    })
  })
}

export function forgotPassword(data) {
  return apiPost(FORGOT_PASSWORD, data)
}

export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
  clearUserData();
}


export function list_tutorials() {
  return apiGet(TUTORIALS_LIST)
}
export function login_with_mobile(data) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_WITH_MOBILE, data)
      .then((res) => {
        setUserData(res.data).then((suc) => {
          resolve(res);
          console.log(res)
        });
      })
      .catch((error) => {
        console.log(error)
        reject(error);
      });
  }); 
}
// export function otp_verification(data) {
//   return apiPost(OTP_VERIFICTION, data)
// }
export function resend_otp(data) {
  return apiPut(RESEND_OTP, data)
}

// export function loginpin(data, headers) {
//   return apiPost(SET_LOGIN_PIN, data, headers)
// }

export const loginpin = (data,headers) => {
  console.log(data, 'the given data')
  return new Promise((resolve, reject) => {
    apiPost(SET_LOGIN_PIN, data,headers)
      .then((res) => {
        resolve(res);
        init()
      })
      .catch((error) => {
        reject(error);
      });
  });
};