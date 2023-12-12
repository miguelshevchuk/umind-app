import React from 'react';
import { View, Image, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import {styles} from "./styles"
import Home from '../../pages/Home';
import LoadImg from '../../pages/LoadImg';
import { COLORS } from '../../constants';
import Resultados from '../../pages/Resultados';
import TabBar from '../tabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = () => {
    const _goBack = () => console.log('Abriendo menu');

  return (
    <View>
        <Appbar.Header mode='center-aligned' style={[styles.headerContainer]}>
          <Image source={require("../../assets/TituloHeader.png")}  />
        </Appbar.Header>
    </View>
  );
};

const LoadImgStack = createNativeStackNavigator();

function LoadImgStackScreen() {
  return (
    <LoadImgStack.Navigator screenOptions={{ headerShown: false }}>
      <LoadImgStack.Screen name="LoadImg" component={LoadImg} />
      <LoadImgStack.Screen name="Resultados" component={Resultados} />
    </LoadImgStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const FeedStack = () => {
  return (
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            header: () => (
              <>
                <Header />
              </>
            ),
          }}
        tabBar={(props) => <TabBar {...props} />}
    >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ 
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => {
                return <Icon name="home" size={size} color={color} />;
              }
            }}            
          />
        <Tab.Screen
          name="LoadImg"
          component={LoadImgStackScreen}
          options={{ 
            tabBarLabel: 'Analizar',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="image" size={size} color={color} />;
            }
          }}  
        />
    </Tab.Navigator>
  );
};

export default FeedStack;