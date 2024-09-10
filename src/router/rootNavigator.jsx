import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TABMENU} from '../util/routes';
import {TabNavigator} from './tabNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={TABMENU}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </>
  );
}
