
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const contactSync = async () => {
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
     let tsttt= Contacts.getAll()
        .then(res => {
          console.log('contacts+++', res);
          var availNumber = res.filter((item, i) => {
            if (item.phoneNumbers?.length > 0) {
              return item;
            }
          });
          console.log('avail number', availNumber);
          return addcontact(availNumber);
        })
        .catch(e => {
          console.log(e, 'errorcontacts');
        });
        console.log(tsttt,'datadstadstadstd')
        return tsttt
    } else {
      console.log('Contacts permission denied');
    }
  } catch (error) {}
};

const addcontact = contactArray => {
  const Contactdata = [];
  const bb = contactArray.map(item => {
    Contactdata.push({
      phone:
        item.phoneNumbers.length > 0 &&
        item.phoneNumbers[0].number.toString().replace(/-| /g, '').trim(),
      name: item.givenName,
    });
  });
  console.log(Contactdata, 'aaaaaaaaaaaaaaa');
  return Contactdata;

  //   addContacts({list: aa})
  //     .then(res => {
  //       console.log(res, 'contacts from api');
  //       return res.data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
};

export default contactSync;
