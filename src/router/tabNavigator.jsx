import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART, FAVORITES, HOMESCREEN, PROFILE, TRENDYOLGO} from '../util/routes';

import TrendyolGo from '../screens/trendyolGo';
import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import TabIcon from '../components/router/tabIcon';
import HomeScreen from '../screens/home';
import AppColors from '../theme/colors';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={HOMESCREEN}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabIcon
              name={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={PROFILE} component={Profile} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
    </Tab.Navigator>
  );
}
