/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import Input from '../../components/Input';
import {Colors} from '../../utils/Color/Colors';

const Pengaturan = () => {
  const [nama, setNama] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [ktp, setKtp] = React.useState('');
  const [npwp, setNpwp] = React.useState('');
  const [bank, setBank] = React.useState('');
  const [rek, setRek] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const token = await AsyncStorage.getItem('token');

    const formData = {
      nama,
      email,
      phone,
      ktp,
      npwp,
      bank,
      rek,
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
        formData,
        config,
      );
      // const data = response.data;
      console.log(response);
      // if (response.status === 200) {
      //   await AsyncStorage.setItem('token', data.token);
      //   setLoading(false);
      //   navigation.replace('MainApp');
      //   console.log('BERHASIL LOGIN');
      // }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 10}}>
        <Input
          placeholder="Nama Lengkap"
          title="Nama Lengkap :"
          onChangeText={text => setNama(text)}
          value={nama}
        />
        <Input placeholder="test@gmail.com" title="Email :" value={email} />
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
          placeholder="No. NPWP"
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
          onChangeText={text => setRek(text)}
          value={rek}
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        // onPress={() => navigation.navigate('MainApp')}
        onPress={handleSubmit}>
        Simpan
      </Button>
    </View>
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
