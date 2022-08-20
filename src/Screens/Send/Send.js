import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import {addContacts} from '../../redux/actions/auth';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import contactSync from '../../utils/contactSync';
import SendRenderList from './SendRenderList';
import styles from './styles';

const Send = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  // const [data, setdata] = useState([]);
  const [getdata, setgetdata] = useState([]);
  const [loader, setloader] = useState(false);

  const [state, setstate] = useState({
    searchToggle: false,
    searchQuery: '',
    filterdata: [],
    data: [],
  });
  const {searchToggle, searchQuery, filterdata, data} = state;
  const updateState = data => setstate(state => ({...state, ...data}));

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
        updateState({data: res.data, filterdata: res.data});
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
  //-------------- back for search-------------
  const onBackPress = () => {
    updateState({searchToggle: false});
    updateState({searchQuery: '',filterdata: data});
  };
  // --------------clear search field
  const onClear = () => {
    updateState({searchQuery: '',filterdata: data});

  };
  /// ---------------------

  const filterinput = value => {
    console.log(value, 'filterinputfilterinput');
    updateState({searchQuery: value});
    let arr = [...data];
    let filterarr = arr.filter((item, index) => {
      return (
        item.nameInContacts.search(value) != -1 ||
        item.phoneInContacts.search(value) != -1
      );
    });
    updateState({filterdata: !!value ? filterarr : data});
  };

  return (
    <WrapperContainer isLoading={loader}>
      <View style={styles.container}>
        {!!searchToggle ? (
          <View style={styles.header}>
            <TouchableOpacity onPress={onBackPress}>
              <Image source={imagePath.backIcon} />
            </TouchableOpacity>
            <TextInput
              placeholder="Search user or UCID by name..."
              placeholderTextColor={colors.lightgray}
              value={searchQuery}
              onChangeText={filterinput}
              style={styles.input}></TextInput>
            <TouchableOpacity onPress={onClear}>
              <Image source={imagePath.ic_gray_cross} />
            </TouchableOpacity>
          </View>
        ) : (
          <HeaderComp
            text={strings.send}
            image={imagePath.searchblack}
            imagestyle={{height: moderateScale(24), width: moderateScale(24)}}
            onBackPress={goBack}
            // onPress={() => navigation.navigate(navigationStrings.SEARCH)}
            onPress={() => {
              updateState({searchToggle: true});
            }}
            headerStyle={{marginVertical: moderateScale(16)}}
          />
        )}
        {!!searchToggle ? null : (
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
                  onPress={() =>
                    navigation.navigate(navigationStrings.SENDUCID)
                  }>
                  <Image source={imagePath.ucid} />
                  <Text style={styles.buttonTxt}>{strings.ucid}</Text>
                </Pressable>
              </View>
            </ImageBackground>
            {/* </View> */}
          </View>
        )}
        <View style={styles.flatList}>
          <FlatList
            data={filterdata.sort((a, b) =>
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
