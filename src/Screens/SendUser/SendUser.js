import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {
  height,
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';

const SendUser = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp
          text={strings.name_Send}
          image={imagePath.profile3}
          imagestyle={{
            height: moderateScale(32),
            width: moderateScale(32),
            borderRadius: 16,
          }}
          headerStyle={{marginTop:moderateScale(16)}}
          onBackPress={goBack}
        />
        <View style={styles.details}>
          <Image style={styles.profilepic} source={imagePath.profile3} />
          <Text style={styles.name}>{strings.name_Send}</Text>
          <Text style={styles.phoneno}>{strings.phoneNO_Send}</Text>
          <Text style={styles.joiningdate}>{strings.joinDate_Send}</Text>
          <View style={styles.sayhelloview}>
            <Text style={styles.sayhello}>{strings.say_Hello_Send}</Text>
            <Image source={imagePath.handwave} />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bluebutton}>
            <Pressable onPress={() => navigation.navigate(navigationStrings.SENDSELECTCRYPTO)}
            style={styles.buttonstyle}
            >
              <Image source={imagePath.send} />
              <Text style={styles.buttontxt}>{strings.send}</Text>
            </Pressable >
            <Pressable onPress={() => navigation.navigate(navigationStrings.REQUESTSELECTCRYPTO)}
            style={styles.buttonstyle}>
              <Image source={imagePath.receive} />
              <Text style={styles.buttontxt}>{strings.request}</Text>
            </Pressable>
          </View>
          <Pressable style={styles.messagebtn}
          // onPress ={() => navigation.navigate(navigationStrings.CHAT)}
          >
              <View style={styles.messageborder}>
                  <Image source={imagePath.ic_message}/>
              </View>

          </Pressable>
        </View>
      </View>
    </WrapperContainer>
  );
};
export default SendUser;
