/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../utils/Color/Colors';
import DetailBarang from './components/DetailBarang';
import PhotoProduk from './components/PhotoProduk';

const DetailKendaraan = ({route, navigation}) => {
  return (
    <>
      <View style={styles.containHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('Home');
          }}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            style={{color: 'white'}}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{route.params.item.title}</Text>
      </View>
      <ScrollView>
        <PhotoProduk />

        <Card style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="heart"
                  style={{color: Colors.blue}}
                />
                <Text style={{color: Colors.blue, marginLeft: 5, fontSize: 12}}>
                  Favorite : 123
                </Text>
              </View>
              <Text style={styles.title}>{route.params.item?.title}</Text>
              <Text>Harga Dasar</Text>
              <Text style={styles.harga}>{route.params.item?.harga}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 10}}>Jadwal Lelang</Text>
                <Text>: {route.params.item?.date}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 52}}>Cabang</Text>
                <Text>: ITC {route.params.item?.cabang}</Text>
              </View>
            </View>
            <View style={styles.containLot}>
              <Text style={{fontWeight: '600'}}>Lot No.</Text>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>56</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.contentRate}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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

        <Card style={styles.content}>
          <Text style={styles.title}>Spesifikasi Kendaraan</Text>
          <DetailBarang title="Merk" subtitle="MITSUBISHI" />
          <DetailBarang title="Jenis" subtitle="FE 84 G" />
          <DetailBarang title="Transmisi" subtitle="AT" />
          <DetailBarang title="Kapasitas Mesin" subtitle="3908 CC" />
          <DetailBarang title="Odometer" subtitle="999,999 KM" />
          <DetailBarang title="Nomor Rangka" subtitle="MHMFE84P736JG" />
          <DetailBarang title="Nomor Mesin" subtitle="MHMFE84P736JG" />
        </Card>

        <Card style={styles.content}>
          <Text style={styles.title}>Dokumen Kendaraan</Text>
          <DetailBarang title="Nomor Polisi" subtitle="KT 7801 EG" />
          <DetailBarang title="Tahun" subtitle="2017" />
          <DetailBarang title="STNK" subtitle="Ada" />
          <DetailBarang title="BPKB" subtitle="14 Hari Kerja" />
          <DetailBarang title="Fotokopi KTP" subtitle="Tidak Ada" />
          <DetailBarang title="Form A" subtitle="Tidak Ada" />
          <DetailBarang title="KEUR" subtitle="Tidak Ada" />
          <DetailBarang title="Warna" subtitle="PUTIH" />
          <DetailBarang title="Exp STNK" subtitle="09/04/2020" />
          <DetailBarang title="Faktur" subtitle="Ada" />
          <DetailBarang title="Kwitansi Blanko" subtitle="Tidak Ada" />
          <DetailBarang title="SPH" subtitle="Tidak Ada" />
        </Card>

        <Card style={styles.content}>
          <Text style={styles.title}>Catatan Tambahan</Text>
          <Text>
            UNIT DI POOL JBA BALIKPAPAN // PIC ADE 0813-5024-8976 & PUTRA
            0896-1893-4994 // WAJIB CEK UNIT & DOKUMEN SECARA LANGSUNG
          </Text>
        </Card>

        <Button
          mode="contained"
          style={styles.button}
          // onPress={() => navigation.navigate('MainApp')}
        >
          Bid Sekarang
        </Button>
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
  containHeader: {
    marginTop: 40,
    backgroundColor: Colors.blue,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
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
