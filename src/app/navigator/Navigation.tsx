import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingStack from './OnBoarding.stack';
import TabsDashboard from './TabsDashboard.tabs';
import {MainRoutes} from './Routes';

export type RootRoutes = {
  MainRoutes: undefined;
};

const Stack = createStackNavigator();

interface IProps {
  initialRouteName: MainRoutes;
}

function Navigation({initialRouteName}: IProps): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          name={MainRoutes.Onboarding}
          component={OnBoardingStack}
        />
        <Stack.Screen
          name={MainRoutes.MainNavigator}
          component={TabsDashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
