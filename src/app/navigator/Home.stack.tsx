import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';

import HeaderScreens from '../components/Header';
import HomeScreen from '../screens/Home/Home.screen';
import CardControls from '../screens/CardControls/CardControls.screen';
import {CardRoutes} from './Routes';

const Stack = createStackNavigator();

const customHeader = (title: string, colorGradient: string[]) => {
  const showBackArrow = title !== CardRoutes.Cards;

  return (
    <HeaderScreens
      title={title}
      colorsGradient={colorGradient}
      backArrow={showBackArrow}
    />
  );
};

export default function HomeStack() {
  const theme = useTheme();

  const colorGradient = [theme.color.primary, theme.color.secondary];

  return (
    <Stack.Navigator
      initialRouteName={CardRoutes.Cards}
      screenOptions={{
        header: ({route}) => customHeader(route.name, colorGradient),
      }}>
      <Stack.Screen name={CardRoutes.Cards} component={HomeScreen} />
      <Stack.Screen name={CardRoutes.CardControls} component={CardControls} />
    </Stack.Navigator>
  );
}
