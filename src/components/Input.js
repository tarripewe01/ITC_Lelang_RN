/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Color/Colors';

const Input = ({placeholder, title, editable, onChangeText, value}) => {
  return (
    <View style={{paddingHorizontal: 15, marginTop: 10}}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: Colors.blue,
          borderRadius: 5,
          marginTop: 5,
        }}
        editable={editable}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
