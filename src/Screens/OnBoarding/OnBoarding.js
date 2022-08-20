//import liraries
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import {list_tutorials} from '../../redux/actions/auth';
import {moderateScale} from '../../styles/responsiveSize';
import styles from './styels';

const OnBoarding = ({navigation}) => {
  const [data, setdata] = useState([{id: 1}, {id: 2}, {id: 3}]);

  const [cindex, setCindex] = useState(0);

  var indicator = [];
  for (let i = 0; i < data.length; i++)
    indicator.push(
      <View
        style={cindex == i ? styles.activeStyle : styles.inactiveStyle}></View>,
    );

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
            onPageSelected={e => {
              setCindex(e.nativeEvent.position),
                updateState({index: e.nativeEvent.position});
            }}
            style={styles.PagerView}
            initialPage={0}>
            {data.map((item, index) => (
              <View style={styles.onboardcontentView} key={index}>
                <Image style={styles.imgstyle} source={imagePath.onboardImg1} />

                <View style={{marginTop: moderateScale(56)}}>
                  <Text style={styles.title}>{strings.onBoardingTitle}</Text>
                  <Text style={styles.content}>
                    {strings.onBoardingContent}
                  </Text>
                </View>
              </View>
            ))}
          </PagerView>
        </View>
        <View style={styles.dotsView}>{indicator}</View>
        <View style={styles.btngetstart}>
          <ButtonComp
            btnText={strings.getstarted}
            style={styles.getstartedbtn}
            onPress={() => navigation.replace(navigationStrings.LOGIN)}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default OnBoarding;
