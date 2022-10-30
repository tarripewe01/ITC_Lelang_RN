/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Card} from 'react-native-paper';

import TextTicker from 'react-native-text-ticker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import {Colors} from '../../utils/Color/Colors';
import PhotoProduk from '../DetailKendaraan/components/PhotoProduk';

const BidPage = ({navigation, route}) => {
  return (
    <>
      <Header
        title="Live Auction"
        onPress={() => {
          navigation.goBack('Detail Kendaraan');
        }}
      />
      <ScrollView>
        <View>
          <Card>
            <View style={styles.containCabang}>
              <MaterialCommunityIcons
                name="map-marker"
                color={Colors.blue}
                size={25}
              />
              <Text style={styles.textCabang}>
                ITC {route.params.item.cabang}
              </Text>
            </View>
          </Card>
          <View style={styles.containLot}>
            <Text style={styles.textLot}>Lot. {route.params.item.id}</Text>
          </View>

          <Card style={{marginTop: 15}}>
            <PhotoProduk />
            <View>
              <Text style={styles.title}> {route.params.item.title}</Text>
            </View>
            <View style={styles.content}>
              <View>
                <Text style={styles.textHarga}>Harga Dasar</Text>
                <Text style={styles.textNominal}>
                  {route.params.item.harga}
                </Text>
              </View>
              <View>
                <Text style={styles.textHarga}>Harga Penawaran Sekarang</Text>
                <Text style={styles.textNominal}>Rp 0</Text>
              </View>
            </View>
          </Card>

          <Card style={styles.contentRate}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.rate}>MESIN</Text>
                <Text style={styles.rateText}>B</Text>
              </View>
              <View>
                <Text style={styles.rate}>EKSTERIOR</Text>
                <Text style={styles.rateText}>C</Text>
              </View>
              <View>
                <Text style={styles.rate}>INTERIOR</Text>
                <Text style={styles.rateText}>B</Text>
              </View>
            </View>
          </Card>
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
          <TextInput placeholder="ex: 15000000" style={styles.input} />
          <Button
            mode="contained"
            style={styles.button}
            //   onPress={() => navigation.navigate('Bid', {item: route.params.item})}
          >
            Bid Sekarang
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
    marginTop: 5,
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
});
