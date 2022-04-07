import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import {
    height,
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';

import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';

const Send=()=>
{
    const data=[
        {profilepic:imagePath.profile,
        name:'Alfred Wolfe',
        phoneNo:'+971 568 256 8874',
        user:true,
    }
    ]
    return(
        <WrapperContainer>
            <View style={styles.container}>
                <HeaderComp text={strings.send}
                image={imagePath.searchblack}
                imagestyle={{height:moderateScale(24),width:moderateScale(24)}}
                />

                <View style={styles.sendBg}>
                    <View>
                    <ImageBackground 
                    style={styles.bgImg}
                    source={imagePath.sendBg}>

                        <View style={styles.ButtonsView}>
                            <Pressable style={styles.pressable}>
                            <Image source={imagePath.ic_wallet_white}/>
                            <Text style={styles.buttonTxt}>{strings.Wallet}</Text>
                            </Pressable>
                            <Pressable style={styles.pressable}>
                            <Image source={imagePath.scan}/>
                            <Text style={styles.buttonTxt}>{strings.scan}</Text>
                            </Pressable>
                            <Pressable style={styles.pressable}>
                            <Image source={imagePath.ucid}/>
                            <Text style={styles.buttonTxt}>{strings.ucid}</Text>
                            </Pressable>
                            
                        </View>
                    </ImageBackground>
                    </View>
                </View>

            </View>
        </WrapperContainer>
    )
}
export default Send;