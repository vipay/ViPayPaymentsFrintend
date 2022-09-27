import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import Share from 'react-native-share';
import {useSelector} from 'react-redux';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import ReferralsRenderList from './ReferralsRenderList';
import styles from './styles';

export function generateDeepLink(userid) {
  try {
    dynamicLinks()
      .buildShortLink({
        link: `https://vipaywallet.page.link?userid=${userid}`,
        domainUriPrefix: 'https://vipaywallet.page.link',
        android: {
          packageName: 'com.vipay',
        },
      })
      .then(link => {
        Share.open({
          title: 'Share Title',
          message: 'Vipay share your referral link',
          url: link,
        });
      })
      .catch(error => {
        console.log(error, 'promise error');
      });
  } catch (err) {
    console.log(err);
  }
}

const Referrals = ({navigation}) => {
  const [state, setState] = useState({
    data: [],
  });
  const {data} = state;
  const updateState = data => {
    setState(state => ({...state, ...data}));
  };

  useFocusEffect(
    useCallback(() => {
      listreferrals();
    }, []),
  );

  const listreferrals = () => {
    actions
      .listreferred()
      .then(res => {
        updateState({data: res.data});
        console.log(res, 'litttttts');
      })
      .catch(err => {
        console.log(err, 'errrrrrrrr');
      });
  };

  const goBack = () => {
    navigation.goBack();
  };
  const userid = useSelector(state => state.auth.userData._id);
  const renderItem = ({item, index}) => {
    return (
      <ReferralsRenderList
        key={index}
        item={item}
        index={index}
        // onPress={() =>
        //   navigation.navigate(navigationStrings.TRANSA)
        // }
      />
    );
  };

  const emptylist = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptylist}>No Referrls</Text>
      </View>
    );
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <HeaderComp text={strings.Referrals} onBackPress={goBack} />

        <View style={styles.bgimgView}>
          <ImageBackground
            style={styles.bgimg}
            source={imagePath.referrals_card}>
            <View style={styles.card}>
              <Text style={styles.Totalrewards}>{strings.Totalrewards}</Text>
              <Text style={styles.reward}>{strings.TotalrewardsValue}</Text>
              <Image style={styles.logo} source={imagePath.reward_logo} />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.flatList}>
          <FlatList
            // data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={emptylist}
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>

        <View style={styles.btn}>
          <ButtonComp
            btnText={strings.Referralsbtn}
            onPress={() => generateDeepLink(userid)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};
export default Referrals;
