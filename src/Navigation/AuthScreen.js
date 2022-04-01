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
  Home
  
} from '../Screens';
import ConfirmPin from '../Screens/ConfirmPin/ConfirmPin';
import TabRoutes from './TabRoutes';



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

      {/* <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      /> */}
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
      <Stack.Screen
        name={navigationStrings.HOME_TAB}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}
