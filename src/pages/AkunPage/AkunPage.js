/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Gap from '../../components/Gap';
import Indicator from '../../components/Indicator';
import ListOption from './components/ListOption';

const AkunPage = ({navigation}) => {
  const [dataUser, setDataUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState(false);

  useEffect(() => {
    loadDataUser();
  }, []);

  const loadDataUser = async () => {
    setLoading(true);

    let token = await AsyncStorage.getItem('token');
    console.log('TOKEN', token);

    const config = {
      headers: {
        'x-auth-token ': token,
      },
    };

    await axios
      .get('https://itc-finance.herokuapp.com/api/profile/me', config)
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          setDataUser(response.data);
          setLoading(false);
        }
      });
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('token');
      setToken(null);
      setLoading(false);
      // navigation.replace('Auth');
    } catch (e) {
      console.log(e);
    }
  };

  console.log(token);

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        flex: 1,
        paddingTop: 20,
      }}>
      {loading ? (
        <Indicator />
      ) : (
        <>
          <View>
            <Image
              source={{
                uri: dataUser?.user?.avatar,
              }}
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 30,
              }}
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
              {dataUser?.user?.name}
            </Text>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              {dataUser?.user?.email}
            </Text>
          </View>
        </>
      )}

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
