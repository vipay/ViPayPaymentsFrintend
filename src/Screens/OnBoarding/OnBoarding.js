//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily'
import styles from './styels';
import PagerView from 'react-native-pager-view';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';

// create a component
const OnBoarding = ({navigation}) => {
    return (
        <WrapperContainer>
        <View style={styles.container}>
            {/* <View style={styles.PagerView}> */}
           <PagerView style={styles.PagerView} initialPage={0} >
               <View style={styles.viewpager}key="1">
                   <View style={styles.viewonboardingimg}>
                   <Image style={styles.imgstyle} source={imagePath.onboardImg1}/>
                   </View>
                   <Text style={styles.title}>{strings.onBoardingTitle}</Text>
                   <Text style={styles.content}>{strings.onBoardingContent}</Text>
               </View>
               <View style={styles.viewpager} key="2">
                   <Image style={styles.imgstyle} source={imagePath.onboardImg1}/>
                   <Text style={styles.title}>{strings.onBoardingTitle}</Text>
                   <Text style={styles.content}>{strings.onBoardingContent}</Text>
               </View>
               <View style={styles.viewpager} key="3">
                   <Image style={styles.imgstyle} source={imagePath.onboardImg1}/>
                   <Text style={styles.title}>{strings.onBoardingTitle}</Text>
                   <Text style={styles.content}>{strings.onBoardingContent}</Text>
               </View>
            
           </PagerView>
        
        
           <View style={styles.btngetstart}>
              <ButtonComp btnText={strings.getstarted}
              style={styles.getstartedbtn}
               onPress={()=> navigation.navigate(navigationStrings.LOGIN)} />
           </View>
        </View>
        </WrapperContainer>
    );
};



export default OnBoarding;
