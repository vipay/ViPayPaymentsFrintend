//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import styles from './styels';
import PagerView from 'react-native-pager-view';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../Components/ButtonComp';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import {moderateScale} from '../../styles/responsiveSize';

// create a component
const OnBoarding = ({navigation}) => {
  let [state, setState] = useState({
    index: 0,
  });
  const {index} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={styles.onboardView}>
          <PagerView
            onPageSelected={e => updateState({index: e.nativeEvent.position})}
            style={styles.PagerView}
            initialPage={0}>
            {[{}, {}, {}].map((_, index) => (
              <View style={styles.onboardcontentView} key={index}>
                <Image style={styles.imgstyle} source={imagePath.onboardImg1} />
                <Text style={styles.title}>{strings.onBoardingTitle}</Text>
                <Text style={styles.content}>{strings.onBoardingContent}</Text>
              </View>
            ))}
          </PagerView>
        </View>
        <View style={styles.dotsView}>
          {index == 0 ? (
            <View
              style={{
                flexDirection: 'row',
                marginLeft: moderateScale(24),
                width: '18%',
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.activeStyle} />
              <View style={styles.inactiveStyle} />
              <View style={styles.inactiveStyle} />
            </View>
          ) : index == 1 ? (
            <View
              style={{
                flexDirection: 'row',
                marginLeft: moderateScale(24),
                width: '18%',
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.inactiveStyle}></View>
              <View style={styles.activeStyle}></View>
              <View style={styles.inactiveStyle}></View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                marginLeft: moderateScale(24),
                width: '18%',
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.inactiveStyle}></View>
              <View style={styles.inactiveStyle}></View>
              <View style={styles.activeStyle}></View>
            </View>
          )}
        </View>
        <View style={styles.btngetstart}>
          <ButtonComp
            btnText={strings.getstarted}
            style={styles.getstartedbtn}
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default OnBoarding;
