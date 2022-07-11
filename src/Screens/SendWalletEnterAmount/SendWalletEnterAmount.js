import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import EnterAmountComp from '../../Components/EnterAmountComp';
import ButtonComp from '../../Components/ButtonComp';
import RBSheet from 'react-native-raw-bottom-sheet';
import HeaderComp from '../../Components/HeaderComp';
import colors from '../../styles/colors';
import AddAddress from '../../Components/AddAddress';


// import { Image } from 'react-native-svg';

const heightt = Dimensions.get('window').height;

const SendWalletEnterAmount = ({navigation}) => {
const [isVisbile, setisVisbile] = useState(false);

  //   const refRBSheet = useRef();
  const goBack = () => {
    navigation.goBack();
  };
  const onaddnew = () => {
    setisVisbile(!isVisbile);
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.SendBitcoin} onBackPress={goBack}/>
        <View style={styles.subcontin}>
          <Text style={styles.Recipientaddress}>
            {strings.Recipientaddress}
          </Text>
          <View style={styles.inputfield}>
            <TextInput
              placeholder='Address'
              style={styles.input}
              placeholderTextColor={colors.grayprice}></TextInput>
            <TouchableOpacity>
              <Image source={imagePath.ic_scanner} />
            </TouchableOpacity>
          </View>
        <AddAddress isvisible={isVisbile} close={onaddnew} />

          <TouchableOpacity style={styles.addAdress} onPress={onaddnew}>
            <Text style={styles.add}>Add this address to wallet list</Text>
            <Image source={imagePath.ic_wallet_blue} />
          </TouchableOpacity>

          <Text style={styles.amountBTC}>Amount BTC</Text>

          <View style={styles.EnterAmountView}>
            <Text style={styles.EnterAmount}>Enter amount</Text>
            <Text style={styles.value}>$520.23 Max</Text>
          </View>

          <View style={styles.inputfield}>
            <TextInput
            placeholder='Amount'
            keyboardType='numeric'
            placeholderTextColor={colors.grayprice}
            style={styles.input}>
              

            </TextInput>
            <Text>BTC</Text>
          </View>
        </View>
        <View style={styles.bottomView1}>
            <Text style={styles.current}>{'Current Price'}</Text>
            <View>
            <Text style={styles.AvailableValue}>{"20,086.70 $ "+"10043.35 $"}</Text>
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
      <View style={{marginHorizontal:moderateScale(24), marginBottom:moderateScale(24)}}>
      <ButtonComp
            btnText={strings.send}
            // onPress={() => refRBSheet.current.open()}
          />
      </View>
    </WrapperContainer>
  );
};
export default SendWalletEnterAmount;
