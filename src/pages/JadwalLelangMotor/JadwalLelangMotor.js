/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../utils/Color/Colors';

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
    date: '1 November 2022',
    time: '13:00 WIB',
    cabang: 'Medan',
    harga: 'Rp. 263.000.000',
  },
];

const JadwalLelangMotor = () => {
  const [data, setData] = useState(Data);

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          <Card style={{marginBottom: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
              <View style={styles.content}>
                <View>
                  <Text style={styles.title}>ITC {item.cabang}</Text>
                  <View style={styles.containIcon}>
                    <MaterialCommunityIcons
                      name="calendar"
                      color={Colors.grey}
                      size={15}
                    />
                    <Text style={styles.textIcon}>{item.date}</Text>
                  </View>
                  <View style={styles.containIcon}>
                    <MaterialCommunityIcons
                      name="timer"
                      color={Colors.grey}
                      size={15}
                    />
                    <Text style={styles.textIcon}>{item.time}</Text>
                  </View>
                </View>
                <View style={styles.containLive}>
                  <Text style={styles.textLive}>LIVE</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      ))}
    </View>
  );
};

export default JadwalLelangMotor;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 10,
  },
  textIcon: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.grey,
    marginLeft: 3,
  },
  containIcon: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 10,
    color: Colors.grey,
    marginLeft: 3,
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.blue,
  },
  containLive: {
    borderWidth: 1,
    borderColor: 'red',
    height: 30,
    width: 60,
    padding: 5,
    alignItems: 'center',
  },
  textLive: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'red',
  },
});
