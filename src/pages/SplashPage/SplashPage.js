/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';

import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Color/Colors';

const Logo = require('../../assets/image/logo.png');

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);
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
