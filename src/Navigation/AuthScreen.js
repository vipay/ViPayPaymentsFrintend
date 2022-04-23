import React from 'react';
import navigationStrings from '../constants/navigationStrings';
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
        component={Screens.OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.TERMSCONDITIONS}
        component={Screens.TermsConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PRIVACYPOLICY}
        component={Screens.PrivacyPolicy}
        options={{ScreensheaderShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CREATEPIN}
        component={Screens.CreatePin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CONFIRMPIN}
        component={Screens.ConfirmPin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.CRYPTODETAILS}
        component={Screens.CryptoDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.TRANSACTIONDETAILS}
        component={Screens.TransactionDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SEND}
        component={Screens.Send}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SENDUSER}
        component={Screens.SendUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SENDSELECTCRYPTO}
        component={Screens.SendSelectCrypto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SENDENTERAMOUNT}
        component={Screens.SendEnterAmount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.REQUESTSELECTCRYPTO}
        component={Screens.RequestSelectCrypto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.REQUESTENTERAMOUNT}
        component={Screens.RequestEnterAmount}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.CHAT}
        component={Screens.Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.MYQR}
        component={Screens.MyQr}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.REDEEMVOUCHER}
        component={Screens.RedeemVoucher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.ABOUTVIPAY}
        component={Screens.AboutViPay}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.CHANGEPIN}
        component={Screens.ChangePin}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.TRANSACTIONHISTORY}
        component={Screens.TransactionHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EDITPROFILE}
        component={Screens.EditProfile}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.REFERRALS}
        component={Screens.Referrals}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.HELPSUPPORT}
        component={Screens.HelpSupport}
        options={{headerShown: false}}
      />





      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={Screens.OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={Screens.ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.HOME_TAB}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
}
