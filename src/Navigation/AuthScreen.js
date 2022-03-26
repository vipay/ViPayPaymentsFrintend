import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
  InitialAuth,
  Login,
  CreatePin,
  Signup,
  OtpVerification,
  ForgotPassword,
  OnBoarding,
  
} from '../Screens';
import ConfirmPin from '../Screens/ConfirmPin/ConfirmPin';



export default function (Stack, isFirstTime) {
  console.log('auth stack', isFirstTime);
  return (
    <>
      {/* {!isFirstTime && <Stack.Screen
                name={navigationStrings.ON_BOARDING}
                component={OnBoarding}
                options={{ headerShown: false }}
            />} */}

      <Stack.Screen
        name={navigationStrings.ON_BOARDING}
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CREATEPIN}
        component={CreatePin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CONFIRMPIN}
        component={ConfirmPin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </>
  );
}
