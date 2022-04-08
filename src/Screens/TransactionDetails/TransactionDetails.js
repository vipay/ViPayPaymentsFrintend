import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';
import PagerView from 'react-native-pager-view';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import {moderateScale} from '../../styles/responsiveSize';
import HeaderComp from '../../Components/HeaderComp';
import colors from '../../styles/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const TransactionDetails = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <StatusBar backgroundColor={colors.up_green} />
      <View style={styles.container}>
        <View style={styles.subcontainer1}>
          <HeaderComp
            onBackPress={goBack}
            headerStyle={{backgroundColor: colors.up_green}}
            backicon={{tintColor: colors.white}}
          />
          <View style={styles.mainconainer}>
            <Image
              style={styles.done_received}
              source={imagePath.ic_done_received}
            />
            <Text style={styles.receivedstyle}>{strings.received}</Text>
            <View style={styles.Value}>
              <Image style={styles.coinImg} source={imagePath.crypto1} />
              <Text style={styles.coinvalue}>{strings.coinvalue}</Text>
            </View>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.subprofile}>
            <Image style={styles.profilepic} source={imagePath.profile2} />
            <Text style={styles.transaction_NAME}>
              {strings.transaction_NAME}
            </Text>
            <Text style={styles.transaction_TIME}>
              {strings.transaction_TIME}
            </Text>
          </View>
        </View>

        <View style={styles.subcontainer2}>
          <View style={styles.btcaddess}>
            <View style={{flexDirection: 'row', flex:1}}>
              <Image source={imagePath.ic_bitcoin} />
              <View style={styles.btcsubView}>
                <View style={styles.txtbtcadress}>
                  <Text style={styles.btctxt}>{strings.Lianibtcaddress}</Text>
                  <Pressable>
                    <Image source={imagePath.ic_copy} />
                  </Pressable>
                </View>
                <Text style={styles.btcid}>{strings.transBtnInfoTxtBtc}</Text>
              </View>
            </View>
          </View>

          <View style={styles.btcaddess}>
            <Image source={imagePath.ic_ucid_black} />
            <View style={styles.btcsubView}>
              <View style={styles.txtbtcadress}>
                <Text style={styles.btctxt}>{strings.Liani_UCID_address}</Text>
                <Pressable>
                  <Image source={imagePath.ic_copy} />
                </Pressable>
              </View>
              <Text style={styles.btcid}>{strings.transBtnInfoTxtUCID}</Text>
            </View>
          </View>

          <View style={styles.btcaddess}>
            <Image source={imagePath.ic_transaction_id} />
            <View style={styles.btcsubView}>
              <View style={styles.txtbtcadress}>
                <Text style={styles.btctxt}>{strings.Transaction_ID}</Text>
                {/* <Pressable>
                  <Image source={imagePath.ic_copy} />
                </Pressable> */}
              </View>
              <Text style={styles.btcid}>{strings.transBtnInfoTxtTID}</Text>
            </View>
          </View>

          {/* <View > */}
          <Pressable style={styles.Needhelpview}>
            <Text style={styles.Needhelp}>{strings.Needhelp}</Text>
          </Pressable>
          {/* </View> */}
        </View>
      </View>
    </WrapperContainer>
  );
};
export default TransactionDetails;
