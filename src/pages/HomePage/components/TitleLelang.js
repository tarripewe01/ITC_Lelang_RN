import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/Color/Colors';

const TitleLelang = ({title, onPress}) => {
  return (
    <View style={styles.containTitle}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleLelang;

const styles = StyleSheet.create({
  containTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginRight: 15,
  },
  title: {fontWeight: 'bold', fontSize: 15},
  button: {color: Colors.blue, fontSize: 13},
});
