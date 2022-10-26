/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {Colors} from '../../../utils/Color/Colors';

const CardProduk = () => {
  return (
    <TouchableOpacity
    // onPress={() => navigation.navigate('Detail Trainer')}
    >
      <Card style={styles.card}>
        <Image
          source={{
            uri: 'https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png',
          }}
          style={styles.imageCourse}
        />
        <View style={styles.contentCard}>
          <View style={styles.containLive}>
            <Text style={styles.textLive}>LIVE</Text>
          </View>
          <Text style={styles.text}>30 Oktober 2022</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>13:00 </Text>
            <Text style={{fontSize: 10}}>WIB</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CardProduk;

const styles = StyleSheet.create({
  imageCourse: {resizeMode: 'contain', width: 170, height: 170, marginTop: -70},
  card: {width: 160, marginTop: 40, marginRight: 10},
  contentCard: {marginTop: -20, paddingHorizontal: 10},
  containLive: {
    backgroundColor: Colors.redRuby,
    padding: 3,
    width: 35,
  },
  textLive: {color: 'white', fontWeight: 'bold', fontSize: 12},
  text: {fontWeight: '500'},
});
