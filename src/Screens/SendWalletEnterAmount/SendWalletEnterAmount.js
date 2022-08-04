import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions, Image, Text, TextInput,
  TouchableOpacity, View
} from 'react-native';
import AddAddress from '../../Components/AddAddress';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import {
  moderateScale
} from '../../styles/responsiveSize';
import styles from './styles';

// import { Image } from 'react-native-svg';

const heightt = Dimensions.get('window').height;

const SendWalletEnterAmount = ({navigation, route}) => {
  const [isVisbile, setisVisbile] = useState(false);

  //   const refRBSheet = useRef();
  const goBack = () => {
    navigation.goBack();
  };
  const onaddnew = () => {
    setisVisbile(!isVisbile);
  };

  const [walletAddress, setwalletAddress] = useState();

  const focus = useIsFocused();
  useEffect(() => {
    !!route.params?.Address ? setwalletAddress(route.params?.Address) : null;
  }, [focus, route.params?.Address]);

  // const walletAddress = route.params.Address;
  console.log(walletAddress, 'walletAddresswalletAddress');
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.SendBitcoin} onBackPress={goBack} />
        <View style={styles.subcontin}>
          <Text style={styles.Recipientaddress}>
            {strings.Recipientaddress}
          </Text>
          <View style={styles.inputfield}>
            <TextInput
              placeholder="Address"
              style={styles.input}
              placeholderTextColor={colors.grayprice}
              onChangeText={value => setwalletAddress(value)}
              value={walletAddress}></TextInput>
            <TouchableOpacity>
              <Image source={imagePath.ic_scanner} />
            </TouchableOpacity>
          </View>
          <AddAddress isvisible={isVisbile} close={onaddnew} />

          <View style={styles.walletlisting}>
            <TouchableOpacity style={styles.addAdress} onPress={onaddnew}>
              <Text style={styles.add}>Add this address to wallet list</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wallet}
              onPress={() => navigation.navigate(navigationStrings.WALLETLIST)}>
              <Image source={imagePath.ic_wallet_blue} />
            </TouchableOpacity>
          </View>

          <Text style={styles.amountBTC}>Amount BTC</Text>

          <View style={styles.EnterAmountView}>
            <Text style={styles.EnterAmount}>Enter amount</Text>
            <Text style={styles.value}>$520.23 Max</Text>
          </View>

          <View style={styles.inputfield}>
            <TextInput
              placeholder="Amount"
              keyboardType="numeric"
              placeholderTextColor={colors.grayprice}
              style={styles.input}></TextInput>
            <Text>BTC</Text>
          </View>
        </View>
        <View style={styles.bottomView1}>
          <Text style={styles.current}>{'Current Price'}</Text>
          <View>
            <Text style={styles.AvailableValue}>
              {'20,086.70 $ ' + '10043.35 $'}
            </Text>
          </View>
        </View>
        {/* <View style={styles.buttonView}>
          
          
        </View> */}
        {/* <View style={styles.buttonView}> */}
        <View style={styles.bottomView}>
          <Text style={styles.Available}>{strings.Available}</Text>
          <Text style={styles.AvailableValue}>{strings.AvailableValue}</Text>
        </View>

        {/* </View> */}

        {/* <RBSheet
          ref={refRBSheet}
          closeOnDragDown={false}
          closeOnPressMask={true}
          height={heightt / 1.2}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.6)',
            },
            container: {
              borderTopLeftRadius: 20,
              paddingTop: moderateScale(14),
              borderTopRightRadius: 20,
            },
          }}> */}
        {/* <ConfirmTransaction
            onCrossPress={() => refRBSheet.current.close()}
            onSendPress={() => navigation.navigate(navigationStrings.SENDUSER)}
          />
        </RBSheet> */}
      </View>
      <View
        style={{
          marginHorizontal: moderateScale(24),
          marginBottom: moderateScale(24),
        }}>
        <ButtonComp
          btnText={strings.send}
          // onPress={() => refRBSheet.current.open()}
        />
      </View>
    </WrapperContainer>
  );
};
export default SendWalletEnterAmount;
