/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, Divider, HelperText, TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Color/Colors';

const Logo = require('../../assets/image/logo.png');

const RegisterPage = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Pria', value: 'Pria'},
    {label: 'Wanita', value: 'Wanita'},
  ]);
  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.form}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.text}>Buat Akun</Text>
          <View style={{marginHorizontal: 10}}>
            <TextInput
              mode="outlined"
              label="Nama Lengkap"
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
            />
            <HelperText type="error" visible={hasErrors()}>
              Nama Lengkap harus diisi
            </HelperText>
            <TextInput
              mode="outlined"
              label="Email"
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
              onChangeText={onChangeText}
            />
            <HelperText type="error" visible={hasErrors()}>
              Email harus diisi
            </HelperText>

            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Gender"
              style={{borderColor: 'grey', color: 'grey'}}
              key={value}
            />
            <HelperText type="error" visible={hasErrors()}>
              Gender harus diisi
            </HelperText>

            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
            />
            <HelperText type="error" visible={hasErrors()}>
              Password harus diisi
            </HelperText>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.containSyarat}>
                Anda telah mengetahui dan menyetujui{' '}
                <TouchableOpacity>
                  <Text style={styles.link}>Syarat & Ketentuan</Text>
                </TouchableOpacity>{' '}
                serta{' '}
                <TouchableOpacity>
                  <Text style={styles.link}>Kebijakan Privasi</Text>
                </TouchableOpacity>{' '}
                dari ITC
              </Text>
            </View>
            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={styles.button}>
              Daftar
            </Button>
            <View style={styles.containTanya}>
              <Text>Sudah memiliki akun?</Text>
              <TouchableOpacity onPress={() => navigation.replace('Login')}>
                <Text style={styles.linkMasuk}>Masuk</Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <View style={styles.containCS}>
              <Text>Mengalami Kendala Saat Mendaftar ?</Text>
              <TouchableOpacity style={{marginBottom: 20}}>
                <Text style={styles.linkCS}>Hubungi Customer Center</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.blackJet,
    marginBottom: 10,
    textTransform: 'uppercase',
    lineHeight: 30,
    letterSpacing: 5,
    textAlign: 'center',
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: Colors.whiteBabyPowder,
    paddingVertical: 5,
    paddingTop: -10,
    paddingBottom: -10,
  },
  containSyarat: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 12,
  },
  link: {
    color: Colors.blue,
    fontWeight: '700',
    fontSize: 11,
    marginTop: 5,
  },
  button: {marginVertical: 20, backgroundColor: Colors.blue},
  containTanya: {
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  linkMasuk: {
    color: Colors.blue,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  containCS: {alignSelf: 'center', marginVertical: 10},
  linkCS: {
    textAlign: 'center',
    color: Colors.blue,
    fontWeight: '500',
  },
});
