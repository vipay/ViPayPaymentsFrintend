import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import WrapperContainer from '../../Components/WrapperContainer';
import {addContacts, listcontact} from '../../redux/actions/auth';
import actions from '../../redux/actions';
import {showSuccess, showError} from '../../helper/helperFunctions';
import {useSelector} from 'react-redux';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import ContactRenderList from '../../Components/ContactRenderList';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import {TextInput} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';

const Contact = ({navigation}) => {
  const {userData} = useSelector(state => state.auth);
  console.log(userData, 'userData');
  const [state, setState] = useState({
    contacts: [],
    data: [],
    id: '',
    loader: false,
    filterdata: [],
  });

  const {contacts, data, id, loader, filterdata} = state;
  const updateState = data => {
    setState(state => ({...state, ...data}));
  };

  function isIOS() {
    return Platform.OS === 'ios' ? true : false;
  }

  let isFocused = useIsFocused();

  useEffect(() => {
    updateState({loader: true});
    if (isIOS()) {
      Contacts.getAll().then(contacts => {
        updateState({
          contacts: contacts,
        });
        addcontact(contacts);
      });
    } else {
      test();
    }
  }, [isFocused]);
  console.log(data, 'ebcjhbjhbjbhjbj');

  const filterinput = value => {
    console.log(value, 'filterinputfilterinput');
    let arr = [...data];
    let filterarr = arr.filter((item, index) => {
      return (
        item.nameInContacts.search(value) != -1 ||
        item.phoneInContacts.search(value) != -1
      );
    });
    updateState({filterdata: filterarr});
  };

  const test = async () => {
    try {
      const andoidContactPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app would like to view your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (andoidContactPermission === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll()
          .then(res => {
            console.log('contacts+++', res);
            var availNumber = res.filter((item, i) => {
              if (item.phoneNumbers?.length > 0) {
                return item;
              }
            });
            console.log('avail number', availNumber);
            addcontact(availNumber);
          })
          .catch(e => {
            console.log(e, 'errorcontacts');
          });
      } else {
        console.log('Contacts permission denied');
      }
    } catch (error) {}
  };
  const addcontact = contactArray => {
    const aa = [];
    const bb = contactArray.map(item => {
      aa.push({
        phone:
          item.phoneNumbers.length > 0 &&
          item.phoneNumbers[0].number.toString().replace(/-| /g, '').trim(),
        name: item.givenName,
      });
    });

    addContacts({list: aa})
      .then(res => {
        console.log(res, 'abcsscs');
        updateState({data: res.data, loader: false, filterdata: res.data});
      })
      .catch(error => {
        console.log(error);
        updateState({
          loader: false,
        });
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
      <ContactRenderList
        key={index}
        item={item}
        index={index}
        char={item.nameInContacts.substring(0, 1)}
        show={showalphabet()}
      />
    );
  };

  return (
    <WrapperContainer isLoading={loader}>
      <View>
        <Text style={styles.Contact}>{strings.Contacts}</Text>
        <View style={styles.search}>
          <TextInput
            placeholder={strings.SearchContact}
            placeholderTextColor={colors.lightgray}
            style={styles.input}
            onChangeText={filterinput}></TextInput>
          <Image source={imagePath.searchgrey} />
        </View>

        <FlatList
          data={filterdata.sort((a, b) =>
            a.nameInContacts.localeCompare(b.nameInContacts),
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 140}} />}
        />
      </View>
    </WrapperContainer>
  );
};

export default Contact;
