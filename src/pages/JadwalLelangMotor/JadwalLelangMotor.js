/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../utils/Color/Colors';
import Axios from 'axios';

const JadwalLelangMotor = ({navigation}) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    await Axios.get(
      'https://itc-finance.herokuapp.com/api/product/filter/lelang?kategori=Motor',
    ).then(response => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => navigation.navigate('Detail Kendaraan', {item: item})}>
          <Card style={{marginBottom: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={{
                    uri:
                      'https://itc-finance.herokuapp.com' + item.photo_path[0],
                  }}
                  style={styles.image}
                />
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
                    <Text style={styles.textIcon}>{item.tanggal_mulai}</Text>
                  </View>
                  <View style={styles.containIcon}>
                    <MaterialCommunityIcons
                      name="timer"
                      color={Colors.grey}
                      size={15}
                    />
                    <Text style={styles.textIcon}>{item.waktu_mulai} WIB</Text>
                  </View>
                </View>
                <View style={styles.containLive}>
                  <Text style={styles.textLive}>LIVE</Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableWithoutFeedback>
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
