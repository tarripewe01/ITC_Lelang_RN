/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../utils/Color/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from 'react-native-paper';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
    title: 'TOYOTA KIJANG INNOVA 2.0 G',
    image: 'https://picsum.photos/700',
    date: '25 Oktober 2022',
    time: '13:00 WIB',
    cabang: 'Medan',
    harga: 'Rp. 263.000.000',
  },
];

const MobilPage = () => {
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
        <TextInput placeholder="Cari Mobil ..." />
        <MaterialCommunityIcons name="magnify" color={Colors.blue} size={24} />
      </View>
      <FlatList
        keyExtractor={data => data.id}
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity>
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MobilPage;

const styles = StyleSheet.create({});
