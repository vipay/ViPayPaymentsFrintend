import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import styles from './styles';

const Search = () => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <WrapperContainer>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={imagePath.backIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search user or UCID by name..."
            placeholderTextColor={colors.lightgray}
            style={styles.input}></TextInput>
          <TouchableOpacity>
            <Image source={imagePath.ic_gray_cross} />
          </TouchableOpacity>
        </View>
        <Text style={styles.recent}>Recent search</Text>

        <FlatList />
      </View>
    </WrapperContainer>
  );
};

export default Search;
