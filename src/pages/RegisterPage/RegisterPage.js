/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Color/Colors';

const Logo = require('../../assets/image/logo.png');

const RegisterPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'BNI', value: 'BNI'},
    {label: 'BRI', value: 'BRI'},
    {label: 'BCA', value: 'BCA'},
    {label: 'BTN', value: 'BTN'},
    {label: 'Mandiri', value: 'Mandiri'},
  ]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Register</Text>
        <View style={{marginHorizontal: 10}}>
          <TextInput
            label="Nama Lengkap"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <TextInput
            label="Email"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <TextInput
            label="Telepon"
            placeholder="+62 812 XXXX XXXX"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <TextInput
            label="Alamat Lengkap"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <TextInput
            label="No. KTP"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <TextInput
            label="No. NPWP"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Pilih Bank"
            style={{borderColor: 'grey', color: 'grey'}}
            key={value}
          />
          <TextInput
            label="Nomor Rekening"
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <TextInput
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            style={styles.textInput}
            activeUnderlineColor={Colors.blue}
          />
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={{marginVertical: 20, backgroundColor: Colors.blue}}>
            Daftar
          </Button>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              alignSelf: 'center',
              marginBottom: 30,
            }}>
            <Text>Sudah memiliki akun?</Text>
            <TouchableOpacity>
              <Text
                style={{color: Colors.blue, fontWeight: 'bold', marginLeft: 5}}>
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
  },
  form: {
    backgroundColor: Colors.whiteBabyPowder,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.blackJet,
    marginBottom: 10,
    textTransform: 'uppercase',
    lineHeight: 30,
    letterSpacing: 10,
    textAlign: 'center',
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: Colors.whiteBabyPowder,
    paddingVertical: 5,
    paddingTop: -10,
    paddingBottom: -10,
  },
});
