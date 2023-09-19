import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { COLORS } from '../../constants';

export function CustomDrawerContent({navigation}) {
    const [active, setActive] = React.useState('Home');

    const navegar = (page) => {
        setActive(page);
        navigation.navigate(page);
    }

  return (
    <DrawerContentScrollView>
      <Drawer.Section title="Menu">
        <Drawer.Item
            icon="home"
            label="Home"
            active = {active === "Home"}
            onPress={() => {navegar("Home")}}
        />
        <Drawer.Item
            icon="image"
            label="Analizar Imagen"
            active = {active === "LoadImg"}
            onPress={() => {navegar("LoadImg")}}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}