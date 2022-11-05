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
import axios from 'axios';

const HomePage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);

  // console.log('NEWS', news);
  // console.log('DATA', data);

  const loadNews = async () => {
    await axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=30a3085dfea54609b4dfa04605e5c7d9',
      )
      .then(response => {
        let dataNews = response.data.articles;
        // console.log('DATANEWS', dataNews);

        setNews(dataNews);
      });
  };

  const loadData = async () => {
    await axios
      .get('https://itc-finance.herokuapp.com/api/product')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      });
  };

  useEffect(() => {
    loadNews();
    loadData();
  }, []);

  const excerpt = str => {
    if (str.length > 40) {
      str = str.substring(0, 40) + '...';
    }
    return str;
  };

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
            {news.map((item, index) => {
              return (
                <View key={index}>
                  <CardNews
                    image={{
                      uri: item.urlToImage,
                    }}
                    title={excerpt(item.title, 5)}
                    onPress={() => {
                      navigation.navigate('Detail Info & Berita', {item: item});
                    }}
                  />
                </View>
              );
            })}
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
