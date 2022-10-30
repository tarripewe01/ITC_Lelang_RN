/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../utils/Color/Colors';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.containHeader}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          style={{color: 'white'}}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containHeader: {
    marginTop: 40,
    backgroundColor: Colors.blue,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
});
