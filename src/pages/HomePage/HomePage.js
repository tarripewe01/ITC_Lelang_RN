/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, LogBox, ScrollView, StyleSheet, View} from 'react-native';

import {Colors} from '../../utils/Color/Colors';
import Bar from '../../components/Bar';
import Search from '../../components/Search';
import Banner from './components/Banner';
import CardProduk from './components/CardProduk';
import TitleLelang from './components/TitleLelang';
import CardNews from './components/CardNews';
import CardProdukLelang from './components/CardProdukLelang';

const Data = [
  {
    id: 1,
    title: 'MITSUBISHI STRADA TRITON 2.5 GLS',
    image: 'https://picsum.photos/700',
    date: '30 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Jakarta',
    harga: 'Rp. 188.000.000',
  },
  {
    id: 2,
    title: 'HONDA REVO FIT 110 FI',
    image: 'https://picsum.photos/700',
    date: '30 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Jakarta',
    harga: 'Rp. 7.000.000',
  },
  {
    id: 3,
    title: 'TOYOTA KIJANG INNOVA 2.0 G',
    image: 'https://picsum.photos/700',
    date: '25 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Medan',
    harga: 'Rp. 263.000.000',
  },
];

const HomePage = ({navigation}) => {
  const [data, setData] = useState(Data);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <ScrollView style={styles.pages} showsVerticalScrollIndicator={false}>
      <Bar />
      <Banner />
      <Search />

      <View style={{paddingLeft: 15, marginTop: 10}}>
        <TitleLelang
          title="Jadwal Lelang Terdekat"
          onPress={() => navigation.navigate('Lelang')}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
          </View>
        </ScrollView>
      </View>

      <View style={{paddingLeft: 15, marginTop: 10}}>
        <TitleLelang
          title="Info dan Berita"
          onPress={() => navigation.navigate('Info & Berita')}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
          </View>
        </ScrollView>
      </View>

      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <TitleLelang
          title="Kendaraan Lelang"
          onPress={() => navigation.navigate('Semua Kendaraan')}
        />
        <ScrollView horizontal={true} style={{width: '100%'}}>
          <FlatList
            keyExtractor={data => data.id}
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <CardProdukLelang
                item={item}
                onPress={() => {
                  navigation.navigate('Detail Kendaraan', {item: item});
                }}
              />
            )}
          />
        </ScrollView>
      </View>
    </ScrollView>
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
