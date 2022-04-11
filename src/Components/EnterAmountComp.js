import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from './HeaderComp'
import strings from '../constants/lang'
import imagePath from '../constants/imagePath'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import colors from '../styles/colors'

const EnterAmountComp = () => {
  return (
    <View style={styles.container}>
        <HeaderComp
        text={strings.name_Send}
        image={imagePath.profile3}
        imagestyle={styles.profile}
        headerStyle={{ marginVertical:moderateScaleVertical(16)}}/>

        <View style={styles.dropdown}>

        </View>
     
    </View>
  )
}

export default EnterAmountComp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
       
        

    },
    profile:{
        height:moderateScale(32),
        width:moderateScale(32),
        borderRadius:16
    },
    dropdown:{
        height:moderateScale(56),
        backgroundColor:colors.grayinput,
        marginHorizontal:moderateScale(24),
        borderRadius:16

    }
})