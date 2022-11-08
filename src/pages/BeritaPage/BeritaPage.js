/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import Indicator from '../../components/Indicator';
import CardNews from './components/CardNews';

const BeritaPage = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadNews = async () => {
    setLoading(true);
    await axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=30a3085dfea54609b4dfa04605e5c7d9',
      )
      .then(response => {
        let dataNews = response.data.articles;
        // console.log('DATANEWS', dataNews);

        setNews(dataNews);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <View style={{paddingHorizontal: 15, marginTop: 10}}>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
          keyExtractor={news => news.title}
          data={news}
          numColumns={2}
          renderItem={({item}) => (
            <CardNews
              item={item}
              onPress={() =>
                navigation.navigate('Detail Info & Berita', {item: item})
              }
            />
          )}
        />
      )}
    </View>
  );
};

export default BeritaPage;
