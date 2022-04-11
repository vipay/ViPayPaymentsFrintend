import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../../styles/responsiveSize';

import styles from './styles'

const PrivacyPolicy=({navigation})=>{

    const goBack = () => {
        navigation.goBack();
      };
    return(
        <WrapperContainer>
        <View style={styles.container}>
            <HeaderComp
            text={strings.Privacypolicy}
            onBackPress={goBack}
            headerStyle={{marginVertical:moderateScaleVertical(16)}}
            />
            <View style={styles.subconainer}>
            <Text style={{fontFamily:fontFamily.RocGroteskBold, color:colors.OBSIDIAN}}>coming soon </Text>
            </View>
        </View>
        </WrapperContainer>
    )
}
export default PrivacyPolicy;
