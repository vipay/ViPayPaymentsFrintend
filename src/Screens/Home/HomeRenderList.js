import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import { color } from 'react-native-reanimated';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const HomeRenderList = ({item, index,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={item.logo} />
      <View style={styles.subcontainer}>
        <View style={styles.headingView}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>

        <View style={styles.priceView}>
          <Text style={{...styles.price}}>{item.price}</Text>
          <Text style={
            item?.status!==1?(
           item?.status >2 ?({...styles.change}) : {...styles.change, color:colors.low_red}):
           {...styles.change, color:colors.grayprice}}>
           
         
            
            {item.change}
          </Text>
          {item?.status !==1 ? (
            <Image
              source={
                item?.status > 2
                  ? imagePath.ic_up_green
                  : imagePath.ic_down_red
              }
            />
          ) : (
            <Image source={imagePath.ic_stable} />
          )}
        </View>
        <View style={styles.line} />
      </View>
    </Pressable>
  );
};
export default HomeRenderList;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(8),
    flexDirection: 'row',
  },
  subcontainer: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceView: {
    flexDirection: 'row',
  },
  name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  value: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  price: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
  change: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsMedium,
    color: colors.up_green,
    marginLeft: moderateScale(8),
  },
  line: {
    height: moderateScale(1),
    width: '100%',
    backgroundColor: colors.F1F1F2,
    marginTop: moderateScale(16),
  },
});
