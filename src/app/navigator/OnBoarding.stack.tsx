import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';

import {OnBoardingRoutes} from './Routes';
import OnboardingDashboardScreen from '../screens/OnBoarding/OnboardingDashboard.screen';
import HeaderScreens from '../components/Header';

const Stack = createStackNavigator();

const customHeader = (title: string, colorGradient: string[]) => (
  <HeaderScreens title={title} colorsGradient={colorGradient} />
);

export default function DashboardStack() {
  const theme = useTheme();

  const colorGradient = [theme.color.primary, theme.color.secondary];

  return (
    <Stack.Navigator
      initialRouteName={OnBoardingRoutes.OnboardingDashboard}
      screenOptions={{
        header: ({route}) => customHeader(route.name, colorGradient),
      }}>
      <Stack.Screen
        name={OnBoardingRoutes.OnboardingDashboard}
        component={OnboardingDashboardScreen}
        i18nIsDynamicList
      />
    </Stack.Navigator>
  );
}
