import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Color/Colors';

const DetailBeritaPage = ({route}) => {
  return (
    <View>
      <Image
        source={{uri: route.params.item.urlToImage}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{route.params.item.title}</Text>
        <Text style={styles.author}>
          {route.params.item?.author ? route.params.item?.author : ''}
        </Text>
        <Text style={styles.source}>
          {route.params.item?.source?.name
            ? route.params.item?.source?.name
            : ''}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.desc}>{route.params.item.description}</Text>
        <Text style={styles.desc}>{route.params.item?.content}</Text>
        <Text style={styles.source}>{route.params.item?.urlToImage}</Text>
      </View>
    </View>
  );
};

export default DetailBeritaPage;

const styles = StyleSheet.create({
  image: {width: '100%', height: 200},
  content: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginTop: 5,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
    color: Colors.blue,
  },
  author: {
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'justify',
    color: Colors.grey,
    marginTop: 5,
  },
  source: {
    fontSize: 12,
    textAlign: 'justify',
    color: Colors.blue,
    marginTop: 5,
  },
  desc: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 5,
  },
});
