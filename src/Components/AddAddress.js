import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from './WrapperContainer';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import ButtonComp from './ButtonComp';
import {showError, showSuccess} from '../helper/helperFunctions';
import actions from '../redux/actions';

const AddAddress = ({isvisible, close}) => {
  const [selectindex, setselectindex] = useState(-1);
  const [state, setState] = useState({
    walletAddress: '',
    walletlable: '',
    selected: '',
  });

  const {walletAddress, walletlable, selected} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const networks = [
    {
      name: 'Bitcoin',
    },
    {
      name: 'ERC20',
    },
    {
      name: 'BEP20',
    },
    {
      name: 'TRC20',
    },
    {
      name: 'polygon',
    },
    {
      name: 'Ripple',
    },
    {
      name: 'Syscoin',
    },
  ];

  const selectedNetwork = (index, item) => {
    setselectindex(index);
    updateState({selected: item.name});
  };

  const onSave = () => {
    if (walletAddress.length == 0) {
      showError(`Wallet Address can't be empty`);
    } else if (walletlable.length == 0) {
      showError(`Wallet Lable can't be empty`);
    } else if (selected.length == 0) {
      showError(`select a network`);
    } else {
      let Apidata = {
        walletAddress: walletAddress,
        walletLabel: walletlable,
        network: selected,
      };
      actions
        .SaveAddress(Apidata)
        .then(res => {
          console.log(res, 'SaveAddressSaveAddress');
          showSuccess('Address Saved Successfully');
          close();
          setselectindex(-1);
          updateState({
            walletAddress: '',
            walletlable: '',
          });
        })
        .catch(error => {
          console.log(error, 'errorerrorerror at save address');
          showError('Something went wrong try again later');
          close();
        });
    }
  };

  return (
    <WrapperContainer>
      <Modal visible={isvisible} transparent>
        <Pressable style={styles.container} onPress={() => close()}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            keyboardDismissMode={'interactive'}>
            <Pressable style={styles.main}>
              <View style={styles.heading}>
                <Text style={styles.header}>{'Add new address'}</Text>
                <TouchableOpacity onPress={() => close()}>
                  <Image source={imagePath.ic_gray_cross} />
                </TouchableOpacity>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.inputxt}
                  placeholder="Wallet address"
                  placeholderTextColor={colors.lightgray}
                  onChangeText={value => updateState({walletAddress: value})}
                  value={walletAddress}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.inputxt}
                  placeholder="Wallet label"
                  placeholderTextColor={colors.lightgray}
                  onChangeText={value => updateState({walletlable: value})}
                  value={walletlable}
                />
              </View>

              <Text style={styles.title}>Select Network</Text>

              <View style={styles.list}>
                {networks.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.tiles}
                      onPress={() => selectedNetwork(index, item)}>
                      <Text
                        style={
                          selectindex == index
                            ? styles.networksdark
                            : styles.networks
                        }>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <ButtonComp
                btnText="Save"
                btnStyle={styles.btn}
                onPress={onSave}
              />
            </Pressable>
          </ScrollView>
        </Pressable>
      </Modal>
    </WrapperContainer>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackOpacity50,
    justifyContent: 'center',
  },
  main: {
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(24),
    borderRadius: 20,
    padding: 24,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  input: {
    height: moderateScale(56),
    width: '100%',
    backgroundColor: colors.grayinput,
    marginTop: moderateScale(16),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
  },
  inputxt: {
    marginHorizontal: moderateScale(16),
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  btn: {
    marginTop: moderateScale(32),
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: moderateScale(16),
  },
  networks: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 8,
    borderColor: colors.C4C4C6,
    lineHeight: 24,
    paddingVertical: 8,
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
  },
  networksdark: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.white,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 8,
    borderColor: colors.Blue,
    backgroundColor: colors.Blue,
    lineHeight: 24,
    paddingVertical: 8,
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
  },
  tiles: {
    // backgroundColor:'red',
    paddingHorizontal: moderateScale(2),
    paddingVertical: moderateScale(4),
  },
  title: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
    marginTop: moderateScale(32),
  },
});
