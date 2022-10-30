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

const CardNews = ({type, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png',
            }}
            style={styles.imageMobil}
          />

          <View style={styles.contentCard}>
            <Text style={styles.text}>Berita Utama</Text>
            <View>
              <Text style={styles.sumber}>CNN </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  imageMobil: {resizeMode: 'contain', width: 80, height: 80},
  card: {
    width: 200,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.blue,
  },
  contentCard: {paddingHorizontal: 10, justifyContent: 'space-between'},
  text: {fontWeight: '500', marginTop: 15, color: 'white'},
  sumber: {fontSize: 12, textAlign: 'right', color: 'white', marginBottom: 5},
});
