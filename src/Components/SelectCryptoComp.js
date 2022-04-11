import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import HeaderComp from './HeaderComp';
import strings from '../constants/lang';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

const FlatListRender = ({item, index, onlistpress}) => {
  return (
    <Pressable onPress={onlistpress}>
      <View style={styles.R_container}>
        <Image source={item.logo} />
        <View style={styles.R_subconatiner}>
          <View style={styles.R_textview}>
            <Text style={styles.R_name}>{item.name}</Text>
            <Text style={styles.R_available}>{item.available}</Text>
          </View>
          <Image style={styles.R_img} source={item.icon} />
        </View>
      </View>
    </Pressable>
  );
};

const SelectCryptoComp = ({data, onlistpress, onBackPress}) => {
  const renderItem = ({item, index}) => {
    return (
      <FlatListRender
        key={index}
        item={item}
        index={index}
        // onPress={() => navigation.navigate(navigationStrings.CRYPTODETAILS)}
        onlistpress={onlistpress}
      />
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComp
      onBackPress={onBackPress}
        text={strings.Selectcrypto}
        headerStyle={{marginVertical: moderateScaleVertical(16)}}
      />
      <View style={styles.Searchbar}>
        <View style={styles.searchinput}>
          <TextInput
            placeholder={strings.select_placeholer}
            placeholderTextColor={colors.lightgray}
            style={styles.inputfield}></TextInput>
        </View>
        <TouchableOpacity>
          <Image source={imagePath.searchgrey} />
        </TouchableOpacity>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={data}
          style={{marginTop: moderateScale(24)}}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default SelectCryptoComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  Searchbar: {
    marginHorizontal: moderateScale(24),
    height: moderateScale(56),
    backgroundColor: colors.grayinput,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
  },
  searchinput: {
    flex: 0.9,
  },
  inputfield: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.OBSIDIAN,
  },
  flatlist: {
    flex: 1,
    marginTop: moderateScale(8),
  },
  // flat list render styles

  R_container: {
    // height:moderateScale(72),

    flexDirection: 'row',
    marginLeft: moderateScale(24),

    marginTop: moderateScale(8),
  },
  R_subconatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: moderateScale(16),
    borderBottomWidth: 0.8,
    borderColor: colors.F1F1F2,
    alignItems: 'center',
    paddingBottom: moderateScale(16),
    paddingTop: moderateScale(8),
  },
  R_textview: {
    // marginRight:moderateScale(24)
  },
  R_img: {
    marginRight: moderateScale(24),
  },
  R_name: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.RocGroteskBold,
    color: colors.OBSIDIAN,
  },
  R_available: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.grayprice,
  },
});
