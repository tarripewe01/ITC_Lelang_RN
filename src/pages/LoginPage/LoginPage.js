/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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

import {Button, Divider, HelperText, TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Color/Colors';

const Logo = require('../../assets/image/logo.png');

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email === '') {
      setEmailError('Email tidak boleh kosong');
    } else if (password === '') {
      setPasswordError('Password tidak boleh kosong');
    }

    if (email !== '' && password !== '') {
      setLoading(true);
      try {
        const response = await axios.post('http://192.168.1.5:9000/api/auth', {
          email: email,
          password: password,
        });
        const data = response.data;
        console.log(data);
        if (response.status === 200) {
          await AsyncStorage.setItem('token', data.token);
          setLoading(false);
          // navigation.replace('AllScreen');
          console.log('BERHASIL LOGIN');
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.form}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.text}>masuk</Text>
          <View style={{marginHorizontal: 10}}>
            <TextInput
              mode="outlined"
              label="Email"
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <HelperText type="error">{emailError}</HelperText>
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              style={styles.textInput}
              activeOutlineColor={Colors.blue}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <HelperText type="error">{passwordError}</HelperText>
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
              style={styles.button}
              onPress={handleLogin}>
              {loading ? 'Loading...' : 'Masuk'}
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
