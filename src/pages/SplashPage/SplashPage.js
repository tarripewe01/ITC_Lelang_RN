import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Color/Colors';

const Logo = require('../../assets/image/logo.png');

const SplashPage = () => {
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
