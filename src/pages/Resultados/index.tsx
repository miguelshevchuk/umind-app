import React from 'react'
import { Text, Card, Button } from 'react-native-paper';
import { useAppSelector } from '../../redux';
import { ScrollView, View } from 'react-native';
import { COLORS } from '../../constants';

export default function Resultados({navigation}) {
    const {resultados} =  useAppSelector(
        state => state.umind     
    );
    
    const back = () => {
        navigation.navigate("LoadImg")
    };
  return (
    <ScrollView>
    <View style={{ marginTop: 30, flex: 1, alignItems: "center"}}>
        <Text variant="displaySmall" >Resultados</Text>
        { (resultados != null) ? resultados.map( (resultado, index) => {return(
            <Card mode='outlined' style={{width: "80%", marginTop: 30}}>
                <Card.Content>
                    <Text variant="titleLarge">{resultado.Indicador}</Text>
                    <Text variant="bodySmall">{resultado.Descripcion}</Text>
                </Card.Content>
            </Card>)}
            ) :
            <Text variant="displaySmall" >No hay Resultados</Text>
        }

        <Button onPress={back} mode="contained" 
            style={{ width: "80%", marginTop: 30}}
            buttonColor={COLORS.primary}
            textColor={COLORS.grey}
        >Nuevo analisis</Button>
    </View>
    </ScrollView>
  )
}
