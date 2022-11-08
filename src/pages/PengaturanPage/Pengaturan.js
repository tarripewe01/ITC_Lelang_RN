/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Input from '../../components/Input';
import {Colors} from '../../utils/Color/Colors';

const Pengaturan = ({route, navigation}) => {
  const [address, setAddress] = React.useState(route.params.data?.address);
  const [phone, setPhone] = React.useState(route.params.data?.phone);
  const [ktp, setKtp] = React.useState(route.params.data?.ktp);
  const [npwp, setNpwp] = React.useState(route.params.data?.npwp);
  const [bank, setBank] = React.useState(route.params.data?.bank);
  const [bank_account, setRek] = React.useState(
    route.params.data?.bank_account,
  );

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const token = await AsyncStorage.getItem('token');
    const data = {
      phone: phone,
      address: address,
      ktp: ktp,
      npwp: npwp,
      bank: bank,
      bank_account: bank_account,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token ': token,
      },
    };
    try {
      const response = await axios.post(
        'http://192.168.1.5:9000/api/profile',
        data,
        config,
      );
      // const data = response.data;
      console.log(response.data);
      if (response.status === 200) {
        if (response.data !== null) {
          navigation.navigate('Home');
        }
        await AsyncStorage.setItem('profile', response.data);
        setLoading(false);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setKtp(response.data.ktp);
        setNpwp(response.data.npwp);
        setBank(response.data.bank);
        setRek(response.data.bank_account);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 10}}>
        <Input
          placeholder="Alamat Lengkap"
          title="Alamat Lengkap :"
          onChangeText={text => setAddress(text)}
          value={address}
        />
        <Input
          placeholder="+62812xxxxxxx"
          title="No. Hp :"
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <Input
          placeholder="No. KTP"
          title="No. KTP :"
          onChangeText={text => setKtp(text)}
          value={ktp}
        />
        <Input
          placeholder="ex: 21.09.365.37883"
          title="No. NPWP :"
          onChangeText={text => setNpwp(text)}
          value={npwp}
        />
        <Input
          placeholder="Bank"
          title="Bank :"
          onChangeText={text => setBank(text)}
          value={bank}
        />
        <Input
          placeholder="No. Rekening"
          title="No. Rekening :"
          onChange={text => setRek(text)}
          value={bank_account}
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        // onPress={() => navigation.navigate('MainApp')}
        onPress={handleSubmit}>
        {loading ? 'Loading...' : 'Simpan'}
      </Button>
    </ScrollView>
  );
};

export default Pengaturan;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.blue,
  },
});
