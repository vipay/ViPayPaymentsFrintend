import React, { useState } from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
// import styles from 'react-native-indicators/src/components/ball-indicator/styles';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const Filterlist=({icon,title,indicator, onfilterClick=()=>{}})=>


{
    const [active] =useState(true)
    return(
        <View style={styles.main} >
            <Image source={icon}/>
            <View style={styles.sub}>
            <Text style={styles.title}>{title}
            </Text>
            <Pressable onPress={onfilterClick} >
            <Image source={
                    active !== true ? imagePath.activeFilter : imagePath.inactiveFilter
                  } />
                   </Pressable>
            </View>
           
        </View>
    )
}
export default Filterlist

const styles = StyleSheet.create({
main:{
    
    flexDirection:'row',
    // backgroundColor:'red',
    marginTop:moderateScale(24)

},
sub:{
    flexDirection:'row',
    justifyContent:'space-between',
    flex:1
},
title:{
    marginLeft:moderateScale(16),
    ...commonStyles.fontSize16,
    fontFamily:fontFamily.poppinsRegular,
    color:colors.OBSIDIAN
}
})