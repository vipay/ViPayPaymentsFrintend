import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import WrapperContainer from '../../Components/WrapperContainer';
import {addContacts, listcontact} from '../../redux/actions/auth';
import {useSelector} from 'react-redux';
import colors from '../../styles/colors';
import ContactRenderList from '../../Components/ContactRenderList';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';
import {TextInput} from 'react-native-gesture-handler';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import actions from '../../redux/actions';
import contactSync from '../../utils/contactSync';

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

  const contactdata = useSelector(state => state?.contactsaved?.data);
  useEffect(() => {
    contactdata?.length > 0 ? getContactREDUX() : getCont();
  }, []);

  const getContactREDUX = () => {
    updateState({data: contactdata, filterdata: contactdata});
  };
  //==========>>>>>>>>> contact sync========>>>>>>>>
  const getCont = async () => {
    updateState({loader: true});
    const contact = await contactSync();
    contactApi(contact);
  };

  // contact sync api

  const contactApi = data => {
    let apiData = {list: data};
    console.log(apiData, 'apiDataapiData');
    addContacts(apiData)
      .then(res => {
        console.log(res, 'contacts from api');
        updateState({data: res.data, filterdata: res.data, loader: false});
        actions.contactsaved(res.data);
      })
      .catch(error => {
        console.log(error);
        updateState({loader: false});
        // setloader(false);
      });
  };

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

  //------------------render itemmm--------------->>>>>>
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
        <View style={styles.header}>
          <Text style={styles.Contact}>{strings.Contacts}</Text>
          <TouchableOpacity onPress={getCont}>
            <Image source={imagePath.ic_refresh} />
          </TouchableOpacity>
        </View>
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
