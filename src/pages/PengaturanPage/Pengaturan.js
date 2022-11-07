import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import {Button} from 'react-native-paper';

const Pengaturan = () => {
  return (
    <View>
      <View style={{marginTop: 10}}>
        <Input placeholder="Nama Lengkap" title="Nama Lengkap :" />
        <Input placeholder="test@gmail.com" title="Email :" />
        <Input placeholder="+62812xxxxxxx" title="No. Hp :" />
        <Input placeholder="No. KTP" title="No. KTP :" />
        <Input placeholder="No. NPWP" title="No. NPWP :" />
        <Input placeholder="Bank" title="Bank :" />
        <Input placeholder="No. Rekening" title="No. Rekening :" />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        // onPress={() => navigation.navigate('MainApp')}
      >
        Simpan
      </Button>
    </View>
  );
};

export default Pengaturan;

const styles = StyleSheet.create({});
