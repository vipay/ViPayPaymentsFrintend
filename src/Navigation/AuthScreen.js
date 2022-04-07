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
  Home,
  TermsConditions,
  PrivacyPolicy,
  TransactionDetails
  
} from '../Screens';
import * as Screens from './../Screens/index';
import ConfirmPin from '../Screens/ConfirmPin/ConfirmPin';
import CryptoDetails from '../Screens/CryptoDetails/CryptoDetails';
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
        name={navigationStrings.TERMSCONDITIONS}
        component={TermsConditions}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.PRIVACYPOLICY}
        component={PrivacyPolicy}
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
        name={navigationStrings.CRYPTODETAILS}
        component={CryptoDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.TRANSACTIONDETAILS}
        component={TransactionDetails}
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
      <Stack.Screen
        name={navigationStrings.HOME_TAB}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}
