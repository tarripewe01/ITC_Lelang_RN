/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';

import Router from './router/Router';

import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isLogin, setIsLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      setIsLogin(token);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log('ISLOGIN', isLogin);

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
