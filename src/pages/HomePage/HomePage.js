/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import Bar from '../../components/Bar';
import Search from '../../components/Search';
import {Colors} from '../../utils/Color/Colors';
import Banner from './components/Banner';
import CardProduk from './components/CardProduk';

const images = [
  'https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png',
];

const HomePage = () => {
  return (
    <View style={styles.pages}>
      <Bar />
      <Banner />
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <Search />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              Jadwal Lelang Mobil Terdekat
            </Text>
            <TouchableOpacity>
              <Text style={{color: Colors.blue, fontSize: 13}}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
              <CardProduk />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  pages: {backgroundColor: Colors.whiteSnow, flex: 1},
  page: {
    width: 130,
    height: 220,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    shadowColor: '#000',
    marginRight: 10,
  },
});
