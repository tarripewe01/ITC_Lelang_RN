/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Color/Colors';

const Logo = require('../../assets/image/logo.png');

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      if (isLogin) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('Login');
      }
    }, 3000);
  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsLogin(token);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} />
    </SafeAreaView>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteSnow,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
