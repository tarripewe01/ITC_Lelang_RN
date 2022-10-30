/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import {Colors} from '../../../utils/Color/Colors';

const CardProduk = ({type, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card style={styles.card}>
        {type === 'mobil' ? (
          <Image
            source={{
              uri: 'https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png',
            }}
            style={styles.imageMobil}
          />
        ) : (
          <Image
            source={{
              uri: 'https://www.freepnglogos.com/uploads/motor-png/tmax-yamaha-motor-canada-1.png',
            }}
            style={styles.imageMotor}
          />
        )}

        <View style={styles.contentCard}>
          <View style={styles.containLive}>
            <Text style={styles.textLive}>LIVE</Text>
          </View>
          <Text style={styles.text}>30 Oktober 2022</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>13:00 </Text>
            <Text style={{fontSize: 10, marginBottom: 10}}>WIB</Text>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardProduk;

const styles = StyleSheet.create({
  imageMobil: {resizeMode: 'contain', width: 170, height: 170, marginTop: -70},
  imageMotor: {resizeMode: 'contain', width: 140, height: 140, marginTop: -50},
  card: {width: 160, marginTop: 40, marginRight: 10, marginBottom: 10},
  contentCard: {marginTop: -20, paddingHorizontal: 10},
  containLive: {
    backgroundColor: Colors.redRuby,
    padding: 3,
    width: 35,
  },
  textLive: {color: 'white', fontWeight: 'bold', fontSize: 12},
  text: {fontWeight: '500'},
});
