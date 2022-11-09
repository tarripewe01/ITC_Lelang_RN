/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../utils/Color/Colors';

import moment from 'moment';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
var currencyFormatter = require('currency-formatter');

const CardProdukLelang = ({item, onPress}) => {
  moment.locale('id');

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card
        style={{
          width: wp('46%'),
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
          height: 320,
        }}>
        <ImageBackground
          style={{width: '100%', height: 200}}
          source={{
            uri: 'https://itc-finance.herokuapp.com' + item?.photo_path[0],
          }}>
          {item.status_lelang === 'Selesai' ? (
            <Image
              source={require('../../../assets/image/sold.png')}
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 40,
              }}
            />
          ) : (
            ''
          )}
        </ImageBackground>
        {/* <Card.Cover
          source={{
            uri: 'https://itc-finance.herokuapp.com' + item?.photo_path[0],
          }}
        /> */}
        <Card.Content style={{paddingHorizontal: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 13}}>
            {item.nama_produk}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 3}}>
            <MaterialCommunityIcons
              name="calendar"
              color={Colors.grey}
              size={12}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                color: 'Colors.grey',
                marginLeft: 3,
              }}>
              {moment(item?.tanggal_mulai).format('DD/MM/YYYY')}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 3}}>
            <MaterialCommunityIcons
              name="map-marker"
              color={Colors.grey}
              size={12}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 10,
                color: Colors.grey,
                marginLeft: 3,
              }}>
              ITC {item.cabang}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: item.status_lelang === 'Selesai' ? '' : 'bold',
              fontSize: item.status_lelang === 'Selesai' ? 12 : 16,
              color: Colors.blue,
              marginTop: 10,
              textDecorationLine:
                item.status_lelang === 'Selesai' ? 'line-through' : '',
            }}>
            {currencyFormatter.format(item.harga, {code: 'IDR'})}
          </Text>
          {item.status_lelang === 'Selesai' ? (
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: 'red',
                marginTop: 3,
              }}>
              {currencyFormatter.format(item.bids[0].nominal_bid, {
                code: 'IDR',
              })}
            </Text>
          ) : (
            ''
          )}
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardProdukLelang;

const styles = StyleSheet.create({});
