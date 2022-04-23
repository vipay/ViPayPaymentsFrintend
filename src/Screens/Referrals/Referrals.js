import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderComp from '../../Components/HeaderComp';
import {ProfileListComp} from '../../Components/ProfileListComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import ReferralsRenderList from './ReferralsRenderList';

const Referrals = ({navigation}) => {

    const data=[
        {   id:1,
            profilepic:imagePath.profile2,
            name:'Abriel Ramirez',
            time:'Today  •  9:41 am',
            value:'75.00',
        },
        {   id:2,
            profilepic:imagePath.profile3,
            name:'Liani Fesso',
            time:'Today  •  8:00 am',
            value:'50.25',
        },
        {   id:3,
            profilepic:imagePath.profile4,
            name:'Josef Fransis',
            time:'Yesterday  •  7:13 pm',
            value:'10.85',
        },
        {   id:4,
            profilepic:imagePath.profile5,
            name:'Adrim Dhoke',
            time:'19 Feb, 2022  •  2:30 pm',
            value:'100.87',
        },
        
        {   id:5,
            profilepic:imagePath.profile6,
            name:'Anni Nikola',
            time:'19 Feb, 2022  •  12:59 pm',
            value:'275.48',
        },
        {   id:6,
            profilepic:imagePath.profile2,
            name:'Adrim Dhoke',
            time:'19 Feb, 2022  •  2:30 pm',
            value:'100.87',
        },
        {   id:7,
            profilepic:imagePath.profile6,
            name:'Anni Nikola',
            time:'19 Feb, 2022  •  12:59 pm',
            value:'275.48'
        },
        {   id:8,
            profilepic:imagePath.profile3,
            name:'Liani Fesso',
            time:'Today  •  8:00 am',
            value:'50.25',
        },

    ]
  const goBack = () => {
    navigation.goBack();

  };

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
  return (
    <WrapperContainer>
      <View style={styles.container}>
       <HeaderComp text={strings.Referrals}
       onBackPress={goBack}/>
       
       <View style={styles.bgimgView}>
           <ImageBackground style={styles.bgimg}
            source={imagePath.referrals_card}>
                <View style={styles.card}>
                    <Text style={styles.Totalrewards}>{ strings.Totalrewards}</Text>
                    <Text style={styles.reward}>{ strings.TotalrewardsValue}</Text>
                    <Image  style={styles.logo} source={imagePath.reward_logo}/>
                </View>
           </ImageBackground>
       </View>

       <View style={styles.flatList}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
        
       <View style={styles.btn}>
           <ButtonComp
           btnText={strings.Referralsbtn}/>
       </View>
      </View>
    </WrapperContainer>
  );
};
export default Referrals;
