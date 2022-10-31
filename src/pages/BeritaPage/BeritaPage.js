/* eslint-disable no-shadow */
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CardNews from './components/CardNews';

const BeritaPage = () => {
  const [news, setNews] = useState([]);

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

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <View style={{paddingHorizontal: 15, marginTop: 10}}>
      <FlatList
        keyExtractor={news => news.title}
        data={news}
        numColumns={2}
        renderItem={({item}) => <CardNews item={item} />}
      />
    </View>
  );
};

export default BeritaPage;

const styles = StyleSheet.create({});
