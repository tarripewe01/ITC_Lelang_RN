/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Carousel from 'react-native-banner-carousel';
import {Colors} from '../../../utils/Color/Colors';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;

const images = [
  'https://mmc.kalteng.go.id/files/berita/22032022040304_0.jpeg',
  'https://infolelang.bri.co.id/resources/img/Banner1.png',
  'https://pbs.twimg.com/media/C27J5ZJUQAA4qdP.jpg',
];

const Banner = () => {
  return (
    <View>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}>
        {images.map((image, idx) => (
          <View key={idx}>
            <Image
              style={{width: BannerWidth, height: BannerHeight}}
              source={{uri: image}}
            />
          </View>
        ))}
      </Carousel>
      <TouchableOpacity>
        <Text style={styles.text}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  text: {
    textAlign: 'right',
    paddingRight: 15,
    color: Colors.blue,
    fontWeight: '500',
    fontSize: 12,
    marginTop: -20,
  },
});
