import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ButtonComp';
import AddAddress from '../../Components/AddAddress';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {useFocusEffect} from '@react-navigation/native';

const SavedWallet = ({navigation}) => {
  //<---------------static data for listing--------------------------->
  const [isVisbile, setisVisbile] = useState(false);

  const [state, setState] = useState({
    data: [],
  });

  const {data} = state;
  const updateState = data => {
    setState(state => ({...state, ...data}));
  };

  useFocusEffect(
    useCallback(() => {
      listwallet();
    }, []),
  );

  const listwallet = () => {
    actions
      .listsavedwallet()
      .then(res => {
        updateState({data: res.data});
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const goBack = () => {
    navigation.goBack();
  };
  const onaddnew = () => {
    setisVisbile(!isVisbile);
  };

  const renderItem = item => {
    console.log(item, 'kkkkkkk');
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(navigationStrings.SELECTWALLET, {
            data: item?.item?.wallets,
          })
        }>
        <View style={styles.main}>
          <View>
            <Text style={styles.name}>{item?.item?._id + ' wallet'}</Text>
            <Text style={styles.adress}>
              {'Added address : ' + item?.item?.wallets.length}
            </Text>
          </View>
          <Image source={imagePath.ic_gray_arrow} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <View style={{flex: 0.9}}>
        <HeaderComp
          text={'My wallet'}
          image={imagePath.searchblack}
          imagestyle={styles.search}
          onBackPress={goBack}
        />
        <View>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
        <AddAddress isvisible={isVisbile} close={onaddnew} />
      </View>
      <TouchableOpacity style={styles.addbtn} onPress={onaddnew}>
        <Image source={imagePath.ic_add_new_white} />
        <Text style={styles.add}>{'Add New'}</Text>
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default SavedWallet;
