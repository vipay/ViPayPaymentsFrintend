import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AddAddress from '../../Components/AddAddress';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import styles from './styles';

const SelectWallet = ({navigation, route}) => {
  const data = route?.params.data;

  console.log(data, 'datattttttaaaaa');
  //<---------------static data for listing--------------------------->
  const [isVisbile, setisVisbile] = useState(false);
  // const data = [
  //   {
  //     name: 'Liani Fesso',
  //     profile: imagePath.profile,
  //     address: '139ZVZumF************GvfqwFG3GdTZ8',
  //   },
  //   {
  //     name: 'Josef Fransis',
  //     profile: imagePath.profile2,
  //     address: '465RFHtyT************DjgetEY7HiQS7',
  //   },
  //   {
  //     name: 'Adrim Dhoke',
  //     profile: imagePath.profile3,
  //     address: '594THUkeG************YwapjRQ5JfHW5',
  //   },
  //   {
  //     name: 'Anni Nikola',
  //     profile: imagePath.profile4,
  //     address: '279YWHopQ************GwqttWG7KqFJ9',
  //   },
  //   {
  //     name: 'Rushan Janne',
  //     profile: imagePath.profile5,
  //     address: '564YWQheU************KqtslRU5YwKR5',
  //   },
  // ];

  const goBack = () => {
    navigation.goBack();
  };
  const onaddnew = () => {
    setisVisbile(!isVisbile);
  };

  const renderItem = item => {
    console.log(item, 'kkkkffffkkk');
    return (
      <TouchableOpacity>
        <View style={styles.main}>
          <View style={styles.subview}>
            <Text style={styles.name}>{item.item.userId}</Text>
            {/* <Image style={styles.profile} source={item.item.profile} /> */}
          </View>
          <Text numberOfLines={1} style={styles.address}>
            {item.item.walletAddress}
          </Text>
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

export default SelectWallet;
