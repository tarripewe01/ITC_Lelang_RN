/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

const Data = [
  {
    id: 1,
    title: 'HONDA REVO FIT 110 FI',
    image: 'https://picsum.photos/700',
    date: '30 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Jakarta',
    harga: 'Rp. 7.000.000',
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
];

const MotorPage = ({navigation}) => {
  const [data, setData] = useState(Data);
  return (
    <View
      style={{
        paddingHorizontal: 15,
        marginTop: 20,
        flex: 1,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.blue,
          height: 40,
          padding: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput placeholder="Cari Motor ..." />
        <MaterialCommunityIcons name="magnify" color={Colors.blue} size={24} />
      </View>
      <FlatList
        keyExtractor={data => data.id}
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Detail Kendaraan', {item: item});
            }}>
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
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default MotorPage;

const styles = StyleSheet.create({});
