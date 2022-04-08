import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const CryptoDetailsRenderList = ({item, index, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image  style={styles.profilepic}source={item.profilepic} />
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.subcontainer}>
          <View style={styles.headingView}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={{...styles.time}}>{item.time}</Text>
            <View style={styles.status}>
              <Text style={
                item?.status !== 'Sent' ?({...styles.change}) : {...styles.change, color:colors.low_red}}
               >{item.status}</Text>
            <Image
            style={styles.indicator}
                  source={
                    item?.status !== 'Sent' ? imagePath.ic_received : imagePath.ic_send
                  }
                />
              
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    </Pressable>
  );
};
export default CryptoDetailsRenderList;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    paddingTop: moderateScale(8),
    flexDirection: 'row',
    paddingLeft: moderateScale(24),
  },
  subcontainer: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: moderateScale(24)
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: moderateScale(24)
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
  time: {
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
  status: {
    flexDirection: 'row',
  },
  indicator:{
    marginLeft:moderateScale(8)
  },
  profilepic:{
    height:moderateScale(48),
    width:moderateScale(48),
    borderRadius:24
  }
});
