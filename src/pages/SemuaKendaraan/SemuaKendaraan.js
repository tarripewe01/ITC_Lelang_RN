import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Colors} from '../../utils/Color/Colors';
import {MobilPage, MotorPage} from '../index';

const Tab = createMaterialTopTabNavigator();

const SemuaKendaraan = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.whiteBabyPowder,
        tabBarLabelStyle: {fontSize: 12, color: 'white'},
        tabBarStyle: {backgroundColor: Colors.blue},
        tabBarIndicatorContainerStyle: 'white',
        tabBarIndicatorStyle: {backgroundColor: Colors.yellowOrange},
      }}>
      <Tab.Screen name="Mobil" component={MobilPage} />
      <Tab.Screen name="Motor" component={MotorPage} />
    </Tab.Navigator>
  );
};

export default SemuaKendaraan;
