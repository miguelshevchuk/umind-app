import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Home from '../../pages/Home';
import LoadImg from '../../pages/LoadImg';

export default function TabBar({ navigation, state, descriptors, insets }) {
    

  return (
        <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
                navigation.navigate(route.name);
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
  );
}
