import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const { secondary80, secondary100 } = theme.colors;

  return(
    <Navigator
      screenOptions={{
        cardOverlay: () => (
          <LinearGradient 
            colors={[secondary80, secondary100]}
            style={{height: '100%'}}
          />
        ),
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
          }
        }
      }
    >
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}
