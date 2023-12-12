import React, { FC } from 'react';
import {
   ScrollView,
   View,
   Image
 } from 'react-native';
import { getEndpoints } from '../../api/config/config';
import { styles } from './styles';
import { Text, Button, Card } from 'react-native-paper';
import { COLORS } from '../../constants';

export default function Home({navigation}) {
   
   const analizarImagen = () => {
      navigation.navigate("LoadImg")
  };
   

   return(
      <ScrollView>
      <View style={{ marginTop: 20}}>
         <View style={{ alignItems: "center" }}>
            <Image
                  source={require("../../assets/TituloHome.png")}
                  style={{ display: "flex" }}
                  resizeMode="stretch"
               />
          </View>

          <View style={{ margin: 10, }}>
            <Text style={{ fontWeight: "bold", margin: 30, color:"black"}}>
               Con UMind, ahora podés realizar el test del dibujo de la figura humana de manera rápida y precisa. 
            </Text>
            <Button  onPress={analizarImagen} mode="contained"
                     buttonColor={COLORS.primary}
                     textColor={COLORS.grey}                
                     style={{marginTop:30 }}
                  >
                     Comenzar Ahora
                  </Button>
          </View> 
      </View>
      </ScrollView>
)};

