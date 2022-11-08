/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {Button, Card} from 'react-native-paper';

import TextTicker from 'react-native-text-ticker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import {Colors} from '../../utils/Color/Colors';

var currencyFormatter = require('currency-formatter');

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const BidPage = ({navigation, route}) => {
  const [nominal_bid, setNominalBid] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    const token = await AsyncStorage.getItem('token');
    const data = {
      nominal_bid: nominal_bid,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token ': token,
      },
    };

    try {
      const response = await axios.post(
        'https://itc-finance.herokuapp.com/api/product/bid/' +
          route.params.item._id,
        data,
        config,
      );
      // const data = response.data;
      console.log(response.data);
      if (response.status === 200) {
        setNominalBid('');
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <Header
        title="Live Auction"
        onPress={() => {
          navigation.goBack('Detail Kendaraan');
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <Card>
            <View style={styles.containCabang}>
              <MaterialCommunityIcons
                name="map-marker"
                color={Colors.blue}
                size={25}
              />
              <Text style={styles.textCabang}>
                ITC {route.params.item?.cabang}
              </Text>
            </View>
          </Card>
          <View style={styles.containLot}>
            <Text style={styles.textLot}>Lot. {route.params.item?.no_lot}</Text>
          </View>

          <Card style={{marginTop: 15}}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}>
              {route.params.item?.photo_path.map((image, idx) => (
                <View key={idx}>
                  <Image
                    style={{width: BannerWidth, height: BannerHeight}}
                    source={{uri: 'https://itc-finance.herokuapp.com' + image}}
                  />
                </View>
              ))}
            </Carousel>

            <View>
              <Text style={styles.title}>
                {' '}
                {route.params.item?.nama_produk}
              </Text>
            </View>
            <View style={styles.content}>
              <View>
                <Text style={styles.textHarga}>Harga Dasar</Text>
                <Text style={styles.textNominal}>
                  {currencyFormatter.format(route.params.item?.harga, {
                    code: 'IDR',
                  })}
                </Text>
              </View>
              <View>
                <Text style={styles.textHarga}>Harga Penawaran Sekarang</Text>
                <Text style={styles.textNominal}>
                  {currencyFormatter.format(
                    route.params.item?.bids[0]?.nominal_bid,
                    {
                      code: 'IDR',
                    },
                  )}
                </Text>
              </View>
            </View>
          </Card>

          <Card style={styles.contentRate}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.rate}>MESIN</Text>
                <Text style={styles.rateText}>
                  {route.params.item?.kondisi_mesin}
                </Text>
              </View>
              <View>
                <Text style={styles.rate}>EKSTERIOR</Text>
                <Text style={styles.rateText}>
                  {route.params.item?.kondisi_exterior}
                </Text>
              </View>
              <View>
                <Text style={styles.rate}>INTERIOR</Text>
                <Text style={styles.rateText}>
                  {route.params.item?.kondisi_interior}
                </Text>
              </View>
            </View>
          </Card>

          <View style={styles.containBidder}>
            <Text
              style={{fontWeight: 'bold', color: Colors.blue, fontSize: 16}}>
              Total Bidder: {route.params.item?.bids?.length}
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <MaterialCommunityIcons
            name="alert-circle"
            style={{color: Colors.blue}}
            size={18}
          />
          <TextTicker
            style={styles.textTicker}
            duration={20000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={1000}>
            Tawar Dengan Kelipatan Rp 500.000 . Tidak Boleh Lebih Rendah Dari
            Harga Penawaran Terbaru
          </TextTicker>
        </View>

        <View style={{paddingHorizontal: 15}}>
          <TextInput
            placeholder="ex: 15000000"
            style={styles.input}
            onChangeText={text => setNominalBid(text)}
          />
          <Button mode="contained" style={styles.button} onPress={handleSubmit}>
            {loading ? 'Proses...' : 'Bid Sekarang'}
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default BidPage;

const styles = StyleSheet.create({
  contentRate: {
    paddingHorizontal: 15,
    marginVertical: 15,
    paddingVertical: 15,
    backgroundColor: Colors.blue,
    marginHorizontal: 10,
  },
  rate: {textAlign: 'center', color: 'white'},
  rateText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.blue,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  containCabang: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
  },
  textCabang: {fontWeight: 'bold', fontSize: 18, marginLeft: 5},
  containLot: {
    backgroundColor: Colors.blue,
    paddingVertical: 10,
    width: 70,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 10,
  },
  textLot: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.blue,
    marginTop: 10,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textHarga: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  textNominal: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.blue,
  },
  info: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.yellowOrange,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  textTicker: {color: Colors.blue, fontWeight: '500', marginLeft: 5},
  input: {
    borderWidth: 1,
    borderColor: Colors.blue,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
  },
  containBidder: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
  },
});
