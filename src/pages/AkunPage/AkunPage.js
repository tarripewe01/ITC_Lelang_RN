/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Gap from '../../components/Gap';
import ListOption from './components/ListOption';

const AkunPage = ({navigation}) => {
  const handleLogout = async () => {
    console.log('click');
    try {
      await AsyncStorage.removeItem('token');
      navigation.replace('Splash');
    } catch (e) {
      console.log(e);
    }
  };

  // const handleLogout = () => {
  //   removeToken();
  // };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        flex: 1,
        paddingTop: 20,
      }}>
      <View>
        <Image
          source={{
            uri: 'https://www.arch-edil.it/cms/wp-content/uploads/2014/03/icon-account.png',
          }}
          style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30}}
        />
      </View>

      <View style={{alignSelf: 'center'}}>
        <Text>TARRI PERITHA WESTI</Text>
        <Text>tarripewe01@gmail.com</Text>
      </View>

      <View>
        <Gap height={20} />
        <ListOption
          title="Pengaturan Akun"
          onPress={() => navigation.navigate('Pengaturan Akun')}
        />
        <Gap height={10} />
        <ListOption title="Ubah Password" />
        <Gap height={10} />
        <ListOption title="Pusat Bantuan" />
        <Gap height={10} />
        <ListOption title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default AkunPage;
