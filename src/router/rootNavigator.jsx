import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOMESCREEN, TABMENU} from '../util/routes';
import TabNavigator from './tabNavigator';
import {Pressable, Text, View} from 'react-native';
import {Notification} from 'iconsax-react';
import AppColors from '../theme/colors';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerRight: props => (
            <View>
              <Pressable>
                <Notification size="32" color={AppColors.BLACK} />
              </Pressable>
            </View>
          ),
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name={TABMENU}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </>
  );
}
