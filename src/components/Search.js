import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../utils/Color/Colors';

const Search = () => {
  return (
    <View style={styles.containSearch}>
      <TouchableOpacity>
        <View style={styles.boxSearch}>
          <Text style={styles.text}>Cari mobil atau motor</Text>
          <MaterialCommunityIcons
            name="magnify"
            color={Colors.blue}
            size={24}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containSearch: {
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 3,
    height: 40,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 10,
  },
  boxSearch: {flexDirection: 'row', justifyContent: 'space-between'},
  text: {color: 'grey', fontSize: 12},
});
