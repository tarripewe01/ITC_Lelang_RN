/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Divider, HelperText, TextInput } from 'react-native-paper';
import { Colors } from '../../utils/Color/Colors';
import axios from 'axios';

const Logo = require('../../assets/image/logo.png');

const LoginPage = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [email, setEmail] = useState('220155201001');
  const [password, setPassword] = useState('12345678');

  const onChangeText = text => setText(text);

  const onLogin = (value) => {
    axios
      .post('http://36.66.35.11:9500/sipa/request_token', {
        username: value.email,
        password: value.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const handleLogin = async (value) => {
  //   const data = {
  //     username: value.email,
  //     password: value.password,
  //   };
  //   console.log('data', data);

  //   const url = 'http://36.66.35.11:9500/sipa/request_token'
  //   const res = await axios.post(
  //     url,
  //     {
  //       username: value.email,
  //       password: value.password,
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     }
  //   );
  //   console.log('res', res);


  // };
  // const handleLogin = (value) => {
  //   console.log('value', value);

  //   const data = {
  //     email: value.email,
  //     password: value.password,
  //   };
  //   const url = 'http://36.66.35.11:9500/sipa/request_token';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: {
  //       username: value.email,
  //       password: value.password,
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log('json', json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const hasErrors = () => {
    return !text.includes('@');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.form}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.text}>masuk</Text>
          <View style={{ marginHorizontal: 10 }}>
            <TextInput
              mode="outlined"
              label="Email"
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
              onChangeText={email => setEmail(email)}
              value={email}
            />
            <HelperText type="error" visible={hasErrors()}>
              Email harus diisi
            </HelperText>
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
              onChangeText={password => setPassword(password)}
              value={password}
            />
            <HelperText type="error" visible={hasErrors()}>
              Password harus diisi
            </HelperText>
            <View style={{ flexDirection: 'row' }}>
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
              style={styles.button}
              onPress={async () => {
                await onLogin({ email, password });
              }}>
              masuk
            </Button>
            <View style={styles.containTanya}>
              <Text>Belum memiliki akun?</Text>
              <TouchableOpacity onPress={() => navigation.replace('Register')}>
                <Text style={styles.linkMasuk}>Daftar</Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <View style={styles.containCS}>
              <Text>Mengalami Kendala Saat Mendaftar ?</Text>
              <TouchableOpacity style={{ marginBottom: 20 }}>
                <Text style={styles.linkCS}>Hubungi Customer Center</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

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
  button: { marginVertical: 20, backgroundColor: Colors.blue },
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
  containCS: { alignSelf: 'center', marginVertical: 10 },
  linkCS: {
    textAlign: 'center',
    color: Colors.blue,
    fontWeight: '500',
  },
});
