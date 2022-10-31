/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {Card} from 'react-native-paper';
import {Colors} from '../../../utils/Color/Colors';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardNews = ({item}) => {
  const excerpt = str => {
    if (str.length > 80) {
      str = str.substring(0, 80) + '...';
    }
    return str;
  };
  return (
    <TouchableWithoutFeedback>
      <Card style={styles.containCard}>
        <Card.Cover source={{uri: item.urlToImage}} />
        <Card.Content style={{paddingHorizontal: 10}}>
          <Text style={styles.textAuthor}>
            {item.author ? item.author : '-'}
          </Text>
          <Text style={styles.textTitle}>{excerpt(item.title, 20)}</Text>
          <Text style={styles.textSource}>{item.source.name}</Text>
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  containCard: {
    width: wp('46%'),
    marginTop: 10,
    marginBottom: 5,
    height: 307,
    marginRight: 10,
  },
  textAuthor: {
    fontWeight: 'bold',
    fontSize: 10,
    color: Colors.grey,
    marginTop: 5,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
    color: Colors.blue,
  },
  textSource: {
    fontWeight: '500',
    fontSize: 10,
    color: Colors.grey,
    marginTop: 5,
  },
});
