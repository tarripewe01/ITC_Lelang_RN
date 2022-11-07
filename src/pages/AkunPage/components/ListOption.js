/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Divider from '../../../components/Divider';

const ListOption = ({title, onPress}) => {
  return (
    <>
      <Divider />
      <View style={{justifyContent: 'center', paddingTop: 5}}>
        <TouchableOpacity onPress={onPress}>
          <Text>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListOption;

const styles = StyleSheet.create({});
