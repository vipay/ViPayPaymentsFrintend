import React, {useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
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


const heightt = Dimensions.get('window').height;

const RequestEnterAmount = ({navigation})=> {
  // const refRBSheet = useRef();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <EnterAmountComp onBackPress={goBack}  Send_Request_Txt={strings.Enterrequestamount}/>
        <View style={styles.buttonView}>
          {/* <View style={styles.bottomView}>
            <Text style={styles.Available}>{strings.Available}</Text>
            <Text style={styles.AvailableValue}>{strings.AvailableValue}</Text>
          </View> */}
          <ButtonComp
            btnText={strings.request}
            onPress={() => refRBSheet.current.open()}
          />
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
          }}>
          <ConfirmTransaction
            onCrossPress={() => refRBSheet.current.close()}
            onSendPress={() => navigation.navigate(navigationStrings.SENDUSER)}
          />
        </RBSheet> */}
      </View>
    </WrapperContainer>
  );
}
export default RequestEnterAmount;