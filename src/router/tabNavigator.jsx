import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART, FAVORITES, HOMESCREEN, PROFILE, TRENDYOLGO} from '../util/routes';

import HomeScreen from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';
import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import {Home} from 'iconsax-react';
import TabIcon from '../components/router/tabIcon';
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <TabIcon size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={PROFILE} component={Profile} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
    </Tab.Navigator>
  );
}
