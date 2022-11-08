/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../utils/Color/Colors';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Axios from 'axios';
import moment from 'moment';
import Indicator from '../../components/Indicator';

var currencyFormatter = require('currency-formatter');

const MotorPage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    await Axios.get(
      'https://itc-finance.herokuapp.com/api/product/filter/lelang?kategori=Motor',
    ).then(response => {
      // console.log(response.data);
      setData(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contaiSearch}>
        <TextInput placeholder="Cari Mobil ..." />
        <MaterialCommunityIcons name="magnify" color={Colors.blue} size={24} />
      </View>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
          keyExtractor={data => data.id}
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('Detail Kendaraan', {item: item});
              }}>
              <Card style={styles.card}>
                <Card.Cover
                  source={{
                    uri:
                      'https://itc-finance.herokuapp.com' + item.photo_path[0],
                  }}
                />
                <Card.Content style={{paddingHorizontal: 5}}>
                  <Text style={styles.text}>{item.nama_produk}</Text>
                  <View style={{flexDirection: 'row', marginTop: 3}}>
                    <MaterialCommunityIcons
                      name="calendar"
                      color={Colors.blackJet}
                      size={12}
                    />
                    <Text style={styles.text}>
                      {moment(item?.tanggal_mulai).format('DD/MM/YYYY')}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 3}}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      color={Colors.blackJet}
                      size={12}
                    />
                    <Text style={styles.text}>ITC {item.cabang}</Text>
                  </View>
                  <Text style={styles.harga}>
                    {currencyFormatter.format(item?.harga, {
                      code: 'IDR',
                    })}
                  </Text>
                </Card.Content>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </View>
  );
};

export default MotorPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 20,
    flex: 1,
  },
  contaiSearch: {
    borderWidth: 1,
    borderColor: Colors.blue,
    height: 40,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: wp('46%'),
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
  },
  title: {fontWeight: 'bold', fontSize: 13},
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: Colors.blackJet,
    marginLeft: 3,
  },
  harga: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.blue,
    marginTop: 10,
  },
});
