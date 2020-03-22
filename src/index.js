import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import '~/config/ReactotronConfig';
import FlashMessage from 'react-native-flash-message';

import Routes from '~/routes';

const App = () => (
  <NavigationContainer>
    <Routes />
    <FlashMessage position="top" duration={4000} />
  </NavigationContainer>
);

export default App;
