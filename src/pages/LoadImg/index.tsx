import React, { useState } from 'react';
import {
   Image,
   View,
 } from 'react-native';
 import { Text, Button } from 'react-native-paper';
 import * as ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './styles';
import {COLORS} from "../../constants"
import { actions } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';
 
 export default function LoadImg({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [err, setErr] = useState("");
  const dispatch = useAppDispatch();
  

   const openImagePicker = async () => {

    await launchImageLibrary({
          mediaType: 'photo'
        }, (response) => {
          setErr("");
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image picker error: ', response.errorCode);
        } else {
          let imageUri = response.assets?.[0]?.uri;
          setSelectedImage(imageUri);
        }
      });
    };

    const handleCameraLaunch = async () => {
    
      await ImagePicker.launchCamera({
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      }, response => {
        setErr("");
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorCode);
        } else {
          // Process the captured image
          let imageUri = response.assets?.[0]?.uri;
          setSelectedImage(imageUri);
          console.log(imageUri);
        }
      });
    }

    const realizarAnalisis = async () => {
      setErr("");

      if(!selectedImage){
        setErr(`Debe seleccionar una imagen para procesar`)
      }else{
        await dispatch(await actions.umind.analizarImagen(selectedImage))
        .then((payload) => {
          if(payload.error){
            setErr(`Ocurrio un error al procesar la imagen: ${payload.error.message}`)
          }else{
            navigation.navigate("Resultados")
          }
        })
      }
        //setErr(JSON.stringify(e))
        //<Text style={{color: 'black'}}>{err}</Text>
        //navigation.navigate("Resultados")
    }
    
    return(
      <View style={{ flex: 1}}>
       <View style={{ alignItems: "center"}} >
        <Text variant="displayMedium" style={styles.title}>Analizar Imagen</Text>
        
          <View style={{ marginTop: 20, flex: 0, flexDirection: 'row'}}>
            
              <Button onPress={openImagePicker} mode="contained" 
                icon="file-image"
                style={{ width: "40%", marginLeft: 10}}
                buttonColor={COLORS.primary}
                textColor={COLORS.grey}
              >
                Galeria
              </Button>
              <Button onPress={handleCameraLaunch} mode="contained" 
                icon="camera"
                style={{ width: "40%", marginLeft: 10}}
                buttonColor={COLORS.primary}
                textColor={COLORS.grey}
              >
                Camara
              </Button>
            </View>      
          
      </View>
        <View style={{ marginTop: 20, flex: 1}}>
        {selectedImage && (
                  <Image
                    source={{ uri: selectedImage }}
                    style={{ flex: 1 }}
                    resizeMode="contain"
                  />
            )}
          
            <Button onPress={realizarAnalisis} mode="contained"
                buttonColor={COLORS.primary}
                textColor={COLORS.grey}                
                style={{marginTop:30 }}
              >
                Analizar
            </Button>
            <Text style={{marginTop:10, marginBottom: 50, color: 'red'}}>{err}</Text>
          </View>
      
      </View>
 )};

