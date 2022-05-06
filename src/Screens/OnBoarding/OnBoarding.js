//import liraries
import React, {Component, useState, useEffect} from 'react';
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
import { list_tutorials } from '../../redux/actions/auth';

// create a component
const OnBoarding = ({navigation}) => {

  const [data, setdata]= useState([])
useEffect(() => {
 list_tutorials().then
 (
   

   data=>{
     setdata(data.data)
    
    console.log(data.data)}
 )
 .catch(
   error=>console.log(error)
 )

  
}, [])




const [cindex, setCindex]=useState(0)

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
            onPageSelected={e =>  {setCindex(e.nativeEvent.position),   updateState({index: e.nativeEvent.position })}}
            // onPageScroll={abc=>{console.log(abc._dispatchInstances.index,'ashgavgh')}}
            style={styles.PagerView}
            initialPage={0}>
            {data.map((item, index) => (
              <View style={styles.onboardcontentView} key={index}>
                <Image style={styles.imgstyle} source={{uri:item.image}} />
                
                <View style={{marginTop:moderateScale(56)}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.content}>{item.description}</Text>
                </View>
              </View>
            ))}
          </PagerView>
        </View>
        <View style={styles.dotsView}>
          {
            indicator
            
          }
          {/* {index == 0 ? (
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
          )} */}
        </View>
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
