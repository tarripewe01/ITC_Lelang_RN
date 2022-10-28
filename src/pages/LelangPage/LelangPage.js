/* eslint-disable react-native/no-inline-styles */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import Search from '../../components/Search';
import {Colors} from '../../utils/Color/Colors';
import {JadwalLelangMobil, JadwalLelangMotor} from '../index';

const Tab = createMaterialTopTabNavigator();

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const LelangPage = () => {
  return (
    <>
      <View>
        <Image
          style={{width: BannerWidth, height: BannerHeight}}
          source={{
            uri: 'https://ims2storage.blob.core.windows.net/cms-image/news/WhatsApp-Image-2022-10-19-at-17.27.33-(1).jpeg',
          }}
        />
      </View>
      <Search />
      <Tab.Navigator
        style={{marginTop: 10}}
        screenOptions={{
          tabBarActiveTintColor: Colors.whiteBabyPowder,
          tabBarLabelStyle: {fontSize: 12, color: 'white'},
          tabBarStyle: {backgroundColor: Colors.blue},
          tabBarIndicatorContainerStyle: 'white',
          tabBarIndicatorStyle: {backgroundColor: Colors.yellowOrange},
        }}>
        <Tab.Screen name="Mobil" component={JadwalLelangMobil} />
        <Tab.Screen name="Motor" component={JadwalLelangMotor} />
      </Tab.Navigator>
    </>
  );
};

export default LelangPage;
