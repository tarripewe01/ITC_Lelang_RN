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

const CardNews = ({type, onPress, image, title, subtitle}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style={styles.imageMobil} />

          <View style={styles.contentCard}>
            <View style={{width: 130, paddingRight: 15}}>
              <Text style={styles.text}>{title}</Text>
            </View>
            <View>
              <Text style={styles.sumber}>{subtitle} </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  imageMobil: {
    resizeMode: 'cover',
    width: 70,
    height: 70,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  card: {
    width: 200,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.blue,
  },
  contentCard: {paddingHorizontal: 10, justifyContent: 'space-between'},
  text: {
    fontWeight: '500',
    marginTop: 10,
    color: 'white',
    fontSize: 11,
    textAlign: 'justify',
  },
  sumber: {fontSize: 10, textAlign: 'right', color: 'white', marginBottom: 5},
});
