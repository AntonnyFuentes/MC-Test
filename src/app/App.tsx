import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './config/store';
import Navigation from './navigator/Navigation';
import {ThemeProvider} from 'styled-components/native';
import {CommonTheme} from '../atomic/theme';
import {MainRoutes} from './navigator/Routes';

import './localization/config';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CommonTheme}>
        <StatusBar
          animated={true}
          showHideTransition="fade"
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Navigation initialRouteName={MainRoutes.Onboarding} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
