import React, {useRef} from 'react';
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

// import { Image } from 'react-native-svg';

const heightt = Dimensions.get('window').height;

const SendUCIDEnterAmount = ({navigation}) => {
  //   const refRBSheet = useRef();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.SendBitcoin} onBackPress={goBack} />
        <View style={styles.subcontin}>
          <Text style={styles.Recipientaddress}>
            {strings.UCIDaddress}
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
          <View style={styles.verfiedView}>
            <Text style={styles.verified}>Verified:</Text>
            <Text style={styles.name}> Liani Fesso</Text>
            <Image source={imagePath.ic_green_check}/>
          </View>

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
        <View style={styles.buttonView}>
          <View style={styles.bottomView}>
            <Text style={styles.Available}>{strings.Available}</Text>
            <Text style={styles.AvailableValue}>{strings.AvailableValue}</Text>
          </View>
          
        </View>
       
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
export default SendUCIDEnterAmount;
