import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {moderateScale, textScale} from './src/styles/responsiveSize';
import FlashMessage from 'react-native-flash-message';
import types from './src/redux/types';
import {getFirstTime, getUserData} from './src/utils/utils';
import fontFamily from './src/styles/fontFamily';
import actions from './src/redux/actions';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import TransactionhistoryRenderList from './src/Screens/TransactionHistory/TransactionhistoryRenderList';
import HelpSupport from './src/Screens/HelpSupport/HelpSupport';
import Referrals from './src/Screens/Referrals/Referrals'
import EditProfile from './src/Screens/EditProfile/EditProfile';

const {dispatch} = store;

const App = () => {
  const init = async () => {
    try {
      const userData = await getUserData();
      const isFirstTime = await getFirstTime();
      console.log(userData)
      if (userData && !!userData.token) {
        console.log("enter")
        dispatch({
          type: types.LOGIN,
          payload: userData,
        });
      }
      if (!!isFirstTime) {
        actions.isFirstTime(true)
      }
      console.log('is first time app.js', isFirstTime)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
    init()
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
        {/* <TransactionhistoryRenderList/> */}
        {/* <HelpSupport/> */}
        {/* <Referrals/> */}
        {/* <EditProfile/> */}
        

        <FlashMessage
          titleStyle={{
            marginRight: moderateScale(5),
            fontFamily: fontFamily.medium,
            fontSize: textScale(16),
          }}
          position="top"
        />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
