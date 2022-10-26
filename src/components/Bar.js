import React from 'react';
import {StatusBar} from 'react-native';

const Bar = () => {
  return (
    <StatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="default"
    />
  );
};

export default Bar;
