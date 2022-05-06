import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import * as Screens from './../Screens/index';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME_TAB}
        component={TabRoutes}
        options={{ headerShown: false }}
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


    </>
  );
}

