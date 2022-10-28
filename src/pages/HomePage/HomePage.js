/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Animated,
  FlatList,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  YellowBox,
} from 'react-native';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bar from '../../components/Bar';
import Search from '../../components/Search';
import {Colors} from '../../utils/Color/Colors';
import Banner from './components/Banner';
import TitleLelang from './components/TitleLelang';
import CardProduk from './components/CardProduk';

const Data = [
  {
    id: 1,
    title: 'MITSUBISHI STRADA TRITON 2.5 GLS',
    image: 'https://picsum.photos/700',
    date: '30 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Jakarta',
    harga: 'Rp. 188.000.000',
  },
  {
    id: 2,
    title: 'HONDA REVO FIT 110 FI',
    image: 'https://picsum.photos/700',
    date: '30 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Jakarta',
    harga: 'Rp. 7.000.000',
  },
  {
    id: 3,
    title: 'TOYOTA KIJANG INNOVA 2.0 G',
    image: 'https://picsum.photos/700',
    date: '25 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Medan',
    harga: 'Rp. 263.000.000',
  },
];

const HomePage = ({navigation}) => {
  const [data, setData] = useState(Data);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <ScrollView style={styles.pages} showsVerticalScrollIndicator={false}>
      <Bar />
      <Banner />
      <Search />

      <View style={{paddingLeft: 15, marginTop: 10}}>
        <TitleLelang
          title="Jadwal Lelang Terdekat"
          onPress={() => navigation.navigate('Lelang')}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
          </View>
        </ScrollView>
      </View>

      <View style={{paddingLeft: 15, marginTop: 10}}>
        <TitleLelang
          title="Info dan Berita"
          onPress={() => navigation.navigate('Info & Berita')}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
            <CardProduk type="mobil" />
          </View>
        </ScrollView>
      </View>

      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <TitleLelang
          title="Kendaraan Lelang"
          onPress={() => navigation.navigate('Semua Kendaraan')}
        />
        <ScrollView horizontal={true} style={{width: '100%'}}>
          <FlatList
            keyExtractor={data => data.id}
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Card
                  style={{
                    width: 180,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    height: 300,
                  }}>
                  <Card.Cover source={{uri: item.image}} />
                  <Card.Content style={{paddingHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold', fontSize: 13}}>
                      {item.title}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 3}}>
                      <MaterialCommunityIcons
                        name="calendar"
                        color={Colors.blackJet}
                        size={12}
                      />
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 10,
                          color: Colors.blackJet,
                          marginLeft: 3,
                        }}>
                        {item.date}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 3}}>
                      <MaterialCommunityIcons
                        name="map-marker"
                        color={Colors.blackJet}
                        size={12}
                      />
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 10,
                          color: Colors.blackJet,
                          marginLeft: 3,
                        }}>
                        ITC {item.cabang}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: Colors.blue,
                        marginTop: 10,
                      }}>
                      {item.harga}
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  pages: {backgroundColor: Colors.whiteSnow, flex: 1},
  page: {
    width: 130,
    height: 220,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    shadowColor: '#000',
    marginRight: 10,
  },
});
