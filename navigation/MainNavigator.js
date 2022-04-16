import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FenceScreen from '../screens/FenceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ArtistScreen from '../screens/ArtistsScreen2';
import HomeStack from './DrawerNavigator';

const Stack = createStackNavigator();

export default function MainNav(props) {
    
      return (
        
            <Stack.Navigator
                initialRouteName="Fence"
                screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Fence" component={FenceScreen} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="ArtistStack" component={ArtistScreen} />
              <Stack.Screen name="HomeStack" component={HomeStack} />
            </Stack.Navigator>
         
      );
}