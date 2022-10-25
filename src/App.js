/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Router from './router/Router';

import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
};

export default App;
