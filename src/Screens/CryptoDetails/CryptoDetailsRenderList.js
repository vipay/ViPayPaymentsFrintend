import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
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

const CryptoDetailsRenderList = ({item, index}) => {
  return (
    <Pressable style={styles.container}>
      <Image source={item.profilepic} />
      <View style={styles.subcontainer}>
        <View style={styles.headingView}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>

        <View style={styles.priceView}>
          <Text style={{...styles.price}}>{item.time}</Text>
          {/* {item?.status !==1 ?(

          )} */}
          <Text style={styles.change}>{item.status}</Text>
       
          {item?.status !==1 ? (
            <Image
              source={
                item?.status > 2
                  ? imagePath.ic_received
                  : imagePath.ic_send
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
export default CryptoDetailsRenderList ;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    // backgroundColor:'red',
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(8),
    flexDirection: 'row',
    // marginTop: moderateScale(24),
  },
  subcontainer: {
    // backgroundColor:'black',
    flex: 1,
    marginLeft: moderateScale(16),
  },
  headingView: {
    flexDirection: 'row',
    // backgroundColor:'yellow',
    justifyContent: 'space-between',
  },
  priceView: {
    flexDirection: 'row',
    // backgroundColor:'green',
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
