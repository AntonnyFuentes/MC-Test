import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import {useTranslation} from 'react-i18next';

import {MainDashboardRoutes} from './Routes';
import {TAB_SELECTED, TAB_NO_SELECTED} from '../constants/images';

import HomeStack from './Home.stack';
import RewardsScreen from '../screens/Rewards/Rewards.screen';
import PFMScreen from '../screens/PFM/PFM.screen';
import MoreScreen from '../screens/More/More.screen';
import HeaderScreens from '../components/Header';

const Tab = createBottomTabNavigator();

const customIcon = ({focused}: {focused: boolean}) => {
  const icon = focused ? TAB_SELECTED : TAB_NO_SELECTED;

  return <Image source={icon} />;
};

const customHeader = (title: string, colorGradient: string[]) => (
  <HeaderScreens title={title} colorsGradient={colorGradient} />
);

export default function MainDashboardTabs() {
  const {t} = useTranslation();
  const theme = useTheme();

  const colorGradient = [theme.color.primary, theme.color.secondary];

  return (
    <Tab.Navigator
      initialRouteName={MainDashboardRoutes.Home}
      screenOptions={({route}: any) => ({
        tabBarActiveTintColor: theme.color.primary,
        tabBarInactiveTintColor: theme.color.noSelectedTab,
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 12,
        },
        tabBarIcon: customIcon,
        header: () => customHeader(route.name, colorGradient),
        headerShown: route.name === MainDashboardRoutes.Home ? false : true,
        title: t(route.name),
      })}>
      <Tab.Screen name={MainDashboardRoutes.Home} children={HomeStack} />
      <Tab.Screen
        name={MainDashboardRoutes.Rewards}
        component={RewardsScreen}
      />
      <Tab.Screen name={MainDashboardRoutes.PFM} component={PFMScreen} />
      <Tab.Screen name={MainDashboardRoutes.More} component={MoreScreen} />
    </Tab.Navigator>
  );
}
