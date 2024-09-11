import React from 'react';
import {
  CART,
  FAVORITES,
  HOMESCREEN,
  PROFILE,
  TRENDYOLGO,
} from '../../util/routes';
import {Google, Heart, Home2, Profile2User, ShoppingCart} from 'iconsax-react';
import Profile from '../../screens/profile';

const TabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case HOMESCREEN:
      return (
        <Home2
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    case TRENDYOLGO:
      return (
        <Google
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case FAVORITES:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case CART:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case PROFILE:
      return (
        <Profile2User
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
      break;
    default:
      <Home2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />;
      break;
  }
};
export default TabIcon;
