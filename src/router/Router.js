/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  AkunPage,
  BeritaPage,
  BidPage,
  DetailBeritaPage,
  DisukaiPage,
  HomePage,
  LelangPage,
  LoginPage,
  PengaturanPage,
  RegisterPage,
  RiwayatPage,
  SemuaKendaraan,
  SplashPage,
} from '../pages';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailKendaraan from '../pages/DetailKendaraan/DetailKendaraan';
import {Colors} from '../utils/Color/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Router = () => {
  const [isLogin, setIsLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // const token = AsyncStorage.getItem('token');
  // // console.log('TOKEN', token);

  const isLoggedIn = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      console.log('TOKEN', token);
      setIsLogin(token);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [isLogin]);

  return (
    <Stack.Navigator>
      {/* {!isLogin ? ( */}
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      {/* ) : ( */}
      <>
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Semua Kendaraan"
          component={SemuaKendaraan}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Info & Berita"
          component={BeritaPage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Detail Kendaraan"
          component={DetailKendaraan}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail Info & Berita"
          component={DetailBeritaPage}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Bid"
          component={BidPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pengaturan Akun"
          component={PengaturanPage}
          options={{
            headerShown: true,
          }}
        />
      </>
      {/* )} */}
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AllScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Semua Kendaraan"
        component={SemuaKendaraan}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Info & Berita"
        component={BeritaPage}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Detail Kendaraan"
        component={DetailKendaraan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail Info & Berita"
        component={DetailBeritaPage}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Bid"
        component={BidPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pengaturan Akun"
        component={PengaturanPage}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.white}
      barStyle={{backgroundColor: Colors.blue}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Lelang"
        component={LelangPage}
        options={{
          tabBarLabel: 'Lelang',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="university" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={RiwayatPage}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="history" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Disukai"
        component={DisukaiPage}
        options={{
          tabBarLabel: 'Disukai',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={AkunPage}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;
