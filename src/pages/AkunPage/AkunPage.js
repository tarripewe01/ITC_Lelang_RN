/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Gap from '../../components/Gap';
import ListOption from './components/ListOption';

const AkunPage = ({navigation}) => {
  const [dataUser, setDataUser] = React.useState({});
  console.log('USER', dataUser);
  useEffect(() => {
    loadDataUser();
  }, []);

  const loadDataUser = async () => {
    let token = await AsyncStorage.getItem('token');
    console.log('TOKEN', token);

    const config = {
      headers: {
        'x-auth-token ': token,
      },
    };

    await axios
      .get('http://192.168.1.5:9000/api/profile/me', config)
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          setDataUser(response.data);
        }
      });
  };

  const handleLogout = async () => {
    console.log('click');
    try {
      await AsyncStorage.removeItem('token');
      navigation.replace('Splash');
    } catch (e) {
      console.log(e);
    }
  };

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
            uri: dataUser?.user?.avatar,
          }}
          style={{width: 100, height: 100, alignSelf: 'center', marginTop: 30}}
        />
      </View>

      <View style={{alignSelf: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          {dataUser?.user?.name}
        </Text>
        <Text style={{fontSize: 14, textAlign: 'center'}}>
          {dataUser?.user?.email}
        </Text>
      </View>

      <View>
        <Gap height={20} />
        <ListOption
          title="Pengaturan Akun"
          onPress={() =>
            navigation.navigate('Pengaturan Akun', {data: dataUser})
          }
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
