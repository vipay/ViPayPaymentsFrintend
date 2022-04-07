import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import styles from './styles'
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';



const TermsConditions= ({navigation})=>
{

    const goBack = () => {
        navigation.goBack();
      };
    return(
      <WrapperContainer>
        <View style={styles.container}>
              <HeaderComp
            text={strings.Termsconditions}
            onBackPress={goBack}

            />
            <View style={styles.subconainer}>
            <Text style={{fontFamily:fontFamily.RocGroteskBold,color:colors.OBSIDIAN}}>
               coming soon 
            </Text>
            </View>
        </View>
        </WrapperContainer>
    )
}
export default TermsConditions;
