/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, View} from 'react-native';

import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;

const images = [
  'https://asset.kompas.com/crops/xukIKvs5In2V8TEl_p60r4Rfrkg=/0x24:700x491/750x500/data/photo/2020/03/30/5e8187bbe2097.jpg',
  'https://cdn-2.tstatic.net/wartakota/foto/bank/images/ilustrasi-toyota-starlet-gt-turbo.jpg',
  'https://s3.ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2021/10/13172813/e5230c9bfbc0af17cb3dfacc03f67ceb.jpg',
];

const PhotoProduk = () => {
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
    </View>
  );
};

export default PhotoProduk;
