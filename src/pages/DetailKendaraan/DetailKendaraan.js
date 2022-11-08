/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import {Button, Card} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import {Colors} from '../../utils/Color/Colors';
import DetailBarang from './components/DetailBarang';
import moment from 'moment';

var currencyFormatter = require('currency-formatter');

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;

const DetailKendaraan = ({route, navigation}) => {
  return (
    <>
      <Header
        title={route.params.item.nama_produk}
        onPress={() => {
          navigation.goBack('Home');
        }}
      />

      <ScrollView>
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

        <Card style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="heart"
                  style={{color: Colors.blue}}
                />
                <Text style={{color: Colors.blue, marginLeft: 5, fontSize: 12}}>
                  Favorite : {route.params.item?.favorites.length}
                </Text>
              </View>
              <Text style={styles.title}>{route.params.item?.nama_produk}</Text>
              {route.params.item?.status_lelang === 'Selesai' ? (
                <>
                  <Text>Harga Terbentuk</Text>
                  <Text style={styles.harga2}>
                    {' '}
                    {currencyFormatter.format(
                      route.params.item?.bid?.nominal_bid[0],
                      {
                        code: 'IDR',
                      },
                    )}
                  </Text>
                </>
              ) : (
                <>
                  <Text>Harga Dasar</Text>
                  <Text style={styles.harga}>
                    {' '}
                    {currencyFormatter.format(route.params.item?.harga, {
                      code: 'IDR',
                    })}
                  </Text>
                </>
              )}

              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 10}}>Jadwal Lelang</Text>
                <Text>
                  :
                  {moment(route.params.item?.tanggal_mulai).format(
                    'DD/MM/YYYY',
                  )}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 52}}>Cabang</Text>
                <Text>: ITC {route.params.item?.cabang}</Text>
              </View>
            </View>
            <View style={styles.containLot}>
              <Text style={{fontWeight: '600'}}>Lot No.</Text>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {route.params.item?.no_lot}
              </Text>
            </View>
          </View>
        </Card>

        <Card style={styles.contentRate}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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

        <Card style={styles.content}>
          <Text style={styles.title}>Spesifikasi Kendaraan</Text>
          <DetailBarang
            title="Merk"
            subtitle={route.params.item?.merk_produk}
          />
          <DetailBarang
            title="Jenis"
            subtitle={route.params.item?.model_produk}
          />
          <DetailBarang
            title="Transmisi"
            subtitle={route.params.item?.transmisi}
          />
          <DetailBarang
            title="Kapasitas Mesin"
            subtitle={route.params.item?.kapasitas_mesin + ' CC'}
          />
          <DetailBarang
            title="Odometer"
            subtitle={route.params.item?.odometer + ' KM'}
          />
          <DetailBarang
            title="Nomor Rangka"
            subtitle={route.params.item?.no_rangka}
          />
          <DetailBarang
            title="Nomor Mesin"
            subtitle={route.params.item?.no_mesin}
          />
        </Card>

        <Card style={styles.content}>
          <Text style={styles.title}>Dokumen Kendaraan</Text>
          <DetailBarang
            title="Nomor Polisi"
            subtitle={route.params.item?.no_polisi}
          />
          <DetailBarang
            title="Tahun"
            subtitle={route.params.item?.tahun_produk}
          />
          <DetailBarang title="STNK" subtitle={route.params.item?.stnk} />
          <DetailBarang title="BPKB" subtitle={route.params.item?.bpkb} />
          <DetailBarang
            title="Fotokopi KTP"
            subtitle={route.params.item?.ktp}
          />
          <DetailBarang title="Form A" subtitle={route.params.item?.form_A} />
          <DetailBarang title="KEUR" subtitle={route.params.item?.keur} />
          <DetailBarang title="Warna" subtitle={route.params.item?.warna} />
          <DetailBarang
            title="Exp STNK"
            subtitle={route.params.item?.exp_stnk}
          />
          <DetailBarang title="Faktur" subtitle={route.params.item?.faktur} />
          <DetailBarang
            title="Kwitansi Blanko"
            subtitle={route.params.item?.kwitansi}
          />
          <DetailBarang title="SPH" subtitle={route.params.item?.sph} />
        </Card>

        <Card style={styles.content}>
          <Text style={styles.title}>Catatan Tambahan</Text>
          <Text style={{textTransform: 'uppercase'}}>
            {route.params.item?.catatan}
          </Text>
        </Card>

        {route.params.item?.status_lelang === 'Aktif' ? (
          <Button
            mode="contained"
            style={styles.button}
            onPress={() =>
              navigation.navigate('Bid', {item: route.params.item})
            }>
            Bid Sekarang
          </Button>
        ) : (
          ''
        )}
      </ScrollView>
    </>
  );
};

export default DetailKendaraan;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15,
    marginTop: 3,
    paddingBottom: 15,
    paddingTop: 10,
  },
  contentRate: {
    paddingHorizontal: 15,
    marginVertical: 5,
    paddingVertical: 15,
    backgroundColor: Colors.blue,
    marginHorizontal: 10,
  },
  title: {fontSize: 16, fontWeight: '600'},
  harga: {fontSize: 20, fontWeight: 'bold', color: Colors.blue},
  harga2: {fontSize: 20, fontWeight: 'bold', color: 'red'},
  button: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: Colors.blue,
    marginHorizontal: 15,
  },
  rate: {textAlign: 'center', color: 'white'},
  rateText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containLot: {
    backgroundColor: Colors.yellowOrange,
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginTop: 10,
  },
});
