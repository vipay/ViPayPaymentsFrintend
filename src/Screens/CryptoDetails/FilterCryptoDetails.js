import React from 'react';
import {Text, Image, StyleSheet, View, Pressable} from 'react-native';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';
import Filterlist from './Filterlist';

const FilterCryptoDetails = ({onpress, item}) => {
  const data = [
    {
      id: 1,
      image: imagePath.ic_all,
      title: strings.all,
      activeIcon: imagePath.activeFilter,
      inActiveIcon: imagePath.inactiveFilter,
    },
    {
      id: 2,
      image: imagePath.ic_all,
      title: strings.all,
      activeIcon: imagePath.activeFilter,
      inActiveIcon: imagePath.inactiveFilter,
    },
    {
      id: 3,
      image: imagePath.ic_all,
      title: strings.all,
      activeIcon: imagePath.activeFilter,
      inActiveIcon: imagePath.inactiveFilter,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.filtertxt}>{strings.Filter_by}</Text>
        <Pressable onPress={onpress}>
          <Image source={imagePath.ic_gray_cross} />
        </Pressable>
      </View>
      <Filterlist
        icon={imagePath.ic_all}
        title={strings.all}
        onfilterClick={onpress}
      />
      <Filterlist
        icon={imagePath.ic_send_gray}
        title={strings.sent}
        onfilterClick={onpress}
      />
      <Filterlist
        icon={imagePath.ic_received_gray}
        title={strings.Received}
        onfilterClick={onpress}
      />
    </View>
  );
};
export default FilterCryptoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    paddingTop: moderateScale(8),
    //   flexDirection: 'row',
    padding: moderateScale(24),
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  filtertxt: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
});
