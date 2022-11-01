/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {Colors} from '../../utils/Color/Colors';

const AkunPage = () => {
  return (
    <>
      <Header title="Akun" />
      <ScrollView>
        <View
          style={{backgroundColor: 'white', paddingHorizontal: 15, flex: 1}}>
          <View>
            <Image
              source={{
                uri: 'https://www.arch-edil.it/cms/wp-content/uploads/2014/03/icon-account.png',
              }}
              style={{width: 100, height: 100, alignSelf: 'center'}}
            />
          </View>
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
      </ScrollView>
    </>
  );
};

export default AkunPage;

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    backgroundColor: Colors.blue,
  },
});
