import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import {styles} from "./styles"
import Home from '../../pages/Home';
import LoadImg from '../../pages/LoadImg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomDrawerContent } from '../DrawerContent';
import { COLORS, IMAGES } from '../../constants';
import Resultados from '../../pages/Resultados';

const Header = ({navigation}) => {
    const _goBack = () => console.log('Abriendo menu');

  return (
    <>
        <Appbar.Header mode='center-aligned' style={[styles.headerContainer]}>
        <TouchableOpacity
            onPress={() => {
                navigation.openDrawer();
            }}
            >
                <Appbar.Action icon="menu"/>
            </TouchableOpacity>
          <Appbar.Content title="UMind" color={COLORS.grey}/>
        </Appbar.Header>
    </>
  );
};




const Drawer = createDrawerNavigator();

const FeedStack = () => {
  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
            header: ({navigation }) => (
              <>
                <Header navigation={navigation} />
              </>
            ),
          }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    
    >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: 'Home' }}            
          />
        <Drawer.Screen
          name="LoadImg"
          component={LoadImg}
          options={{ headerTitle: 'Analizar Imagen' }}
        />
        <Drawer.Screen
          name="Resultados"
          component={Resultados}
          options={{ headerTitle: 'Resultados' }}
        />
    </Drawer.Navigator>
  );
};

export default FeedStack;