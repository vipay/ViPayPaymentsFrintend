import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
 
} from 'react-native';
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
import { TextInput } from 'react-native-gesture-handler';



const Contact = ({navigation}) => {
  const {userData} = useSelector(state => state.auth);
  console.log(userData, 'userData');
  const [state, setState] = useState({
    contacts: [],
    data: [],
    id: '',
  });
  const updateState = data => {
    setState(state => ({...state, ...data}));
  };
  function isIOS() {
    return Platform.OS === 'ios' ? true : false;
  }
  // useEffect(() => {

  //   const unsubscribe = navigation.addListener('focus', async () => {
  //     listContats()
  //     })
      
  //     return unsubscribe;
    
  // }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      listContats();
      })
      
      return unsubscribe;
   
  }, []);

  useEffect(() => {
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
    listContats()
  }, []);

  const listContats = () => {
    listcontact()
      .then(res => {
        console.log(res.data);
        updateState({data: res.data});
      })
      .catch(error => {
        console.log(error);
        updateState({isLoading: false});
      });
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

  var newPerson = {
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
  };

  const addcontact = contactArray => {
    const aa = [];
    const bb = contactArray.map(item => {
      aa.push({
        mobile_number:
          item.phoneNumbers.length > 0 &&
          item.phoneNumbers[0].number.toString().replace(/-|  /g, '').trim(),
        name: item.givenName,
      });
    });
    // actions.
    let apidata = {data: aa};
    // return
    addContacts(apidata)
      .then(res => {
        console.log(res, 'abcsscs');
        // showSuccess('Contact sync successful ');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <ContactRenderList
        key={index}
        item={item}
        index={index}
        // onPress={() =>
        //   navigation.navigate(navigationStrings.SENDUSER)
        // }
      />
    );
  };

  const {data} = state;
  return (
    <WrapperContainer>
     <View>
       <Text style={styles.Contact}>{strings.Contacts}</Text>
       <View style={styles.search}>
         <TextInput
         placeholder={strings.SearchContact}
         placeholderTextColor={colors.lightgray}
         style={styles.input}
         ></TextInput>
         <Image source={imagePath.searchgrey} />

       </View>
       
      <FlatList
        data={state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // initialNumToRender={10}
        // contentContainerStyle={{flexGrow: 1}}
      />
      </View>
    </WrapperContainer>
  );
};

export default Contact;
