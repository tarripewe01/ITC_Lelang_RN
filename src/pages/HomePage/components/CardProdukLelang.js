/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../utils/Color/Colors';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CardProdukLelang = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <Card
        style={{
          width: wp('46%'),
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
          height: 300,
        }}>
        <Card.Cover source={{uri: item.image}} />
        <Card.Content style={{paddingHorizontal: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 13}}>{item.title}</Text>
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
              {item.date}
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
              fontWeight: 'bold',
              fontSize: 16,
              color: Colors.blue,
              marginTop: 10,
            }}>
            {item.harga}
          </Text>
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardProdukLelang;

const styles = StyleSheet.create({});
