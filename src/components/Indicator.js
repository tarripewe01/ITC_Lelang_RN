import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from '../utils/Color/Colors';

const Indicator = () => {
  return (
    <>
      <ActivityIndicator animating={true} color={Colors.blue} />
    </>
  );
};

export default Indicator;
