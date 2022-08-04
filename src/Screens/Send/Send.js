import React, {Component, useEffect, useState, useCallback} from 'react';
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
import SendRenderList from './SendRenderList';
import contactSync from '../../utils/contactSync';
import {addContacts} from '../../redux/actions/auth';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

const Send = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const [data, setdata] = useState([]);
  const [getdata, setgetdata] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      getCont();
      setloader(true);
    }, []),
  );
  const getCont = async () => {
    const contact = await contactSync();
    contactApi(contact);

    setgetdata(contact);
  };
  // contact sync

  console.log(getdata, 'getdatagetdatagetdatagetdata');

  const contactApi = data => {
    let apiData = {list: data};
    console.log(apiData, 'apiDataapiData');
    addContacts(apiData)
      .then(res => {
        console.log(res, 'contacts from api');
        setdata(res.data);
        setloader(false);
      })
      .catch(error => {
        console.log(error);
        setloader(false);
      });
  };
  let alpahet = '';
  const renderItem = ({item, index}) => {
    const showalphabet = () => {
      if (alpahet != item.nameInContacts.substring(0, 1)) {
        alpahet = item.nameInContacts.substring(0, 1);
        return true;
      } else {
        return false;
      }
    };
    return (
      <SendRenderList
        key={index}
        item={item}
        index={index}
        onPress={() => navigation.navigate(navigationStrings.SENDUSER)}
        show={showalphabet()}
        char={item.nameInContacts.substring(0, 1)}
      />
    );
  };
  return (
    <WrapperContainer isLoading={loader}>
      <View style={styles.container}>
        <HeaderComp
          text={strings.send}
          image={imagePath.searchblack}
          imagestyle={{height: moderateScale(24), width: moderateScale(24)}}
          onBackPress={goBack}
          onPress={() => navigation.navigate(navigationStrings.SEARCH)}
          headerStyle={{marginVertical: moderateScale(16)}}
        />
        <View style={styles.sendBg}>
          {/* <View style={styles.bgImgView}> */}
          <ImageBackground
            resizeMode="contain"
            style={styles.bgImg}
            source={imagePath.sendBg}>
            <View style={styles.ButtonsView}>
              <Pressable
                style={styles.pressable}
                onPress={() =>
                  navigation.navigate(navigationStrings.SENDWALLET)
                }>
                <Image source={imagePath.ic_wallet_white} />
                <Text style={styles.buttonTxt}>{strings.Wallet}</Text>
              </Pressable>
              <Pressable style={styles.pressable}>
                <Image source={imagePath.scan} />
                <Text style={styles.buttonTxt}>{strings.scan}</Text>
              </Pressable>
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.navigate(navigationStrings.SENDUCID)}>
                <Image source={imagePath.ucid} />
                <Text style={styles.buttonTxt}>{strings.ucid}</Text>
              </Pressable>
            </View>
          </ImageBackground>
          {/* </View> */}
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={data.sort((a, b) =>
              a.nameInContacts.localeCompare(b.nameInContacts),
            )}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default Send;
