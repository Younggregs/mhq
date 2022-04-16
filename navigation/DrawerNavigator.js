import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import AboutScreen from '../screens/AboutScreen';

import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

const INITIAL_ROUTE_NAME = 'Home';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#282C35'
        }}
        drawerContentOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff'
        }}>
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Home',
            drawerIcon: ({ focused }) => 
            <TabBarIcon
              focused={focused}
              name={
              Platform.OS === 'ios'
                ? `ios-home`
                : 'md-home'
            }
          />,
          }}
        />
        <Drawer.Screen 
          name="Artists" 
          component={ArtistsScreen} 
          options={{
            title: 'Artists',
            drawerIcon: ({ focused }) => 
            <TabBarIcon
              focused={focused}
              name={
              Platform.OS === 'ios'
                ? `ios-people`
                : 'md-people'
            }
          />,
          }}
          />
        <Drawer.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            title: 'About',
            drawerIcon: ({ focused }) => 
            <TabBarIcon
              focused={focused}
              name={
              Platform.OS === 'ios'
                ? `ios-journal`
                : 'md-journal'
            }
          />,
          }}
          />
      </Drawer.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Music Heroes Quotes';
    case 'Artists':
      return 'Artists';
  }
}
