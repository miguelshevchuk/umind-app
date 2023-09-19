import React, { useState } from 'react';
import {
   Image,
   View,
 } from 'react-native';
 import { Text, Button } from 'react-native-paper';
 import * as ImagePicker from 'react-native-image-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { styles } from './styles';
import {COLORS} from "../../constants"
import { actions } from '../../redux';
import { useAppDispatch } from '../../redux/store';
 
 export default function LoadImg({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useAppDispatch();

   const openImagePicker = async () => {

    await launchImageLibrary({
          mediaType: 'photo'
        }, (response) => {
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
      await dispatch(actions.umind.analizarImagen(selectedImage));
      navigation.navigate("Resultados")
      
    }
    
    return(
      <View style={{ flex: 1}}>
       <View style={{ flex: 1, alignItems: "center"}} >
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
            <View>
            {selectedImage && (
                  <Image
                    source={{ uri: selectedImage }}
                    style={{ flex: 1 }}
                    resizeMode="contain"
                  />
            )}
            </View>
            
          
          
      </View>
        <View>
            <Button onPress={realizarAnalisis} mode="contained"
                buttonColor={COLORS.primary}
                textColor={COLORS.grey}
                disabled={selectedImage != null}
                style={{marginBottom: 50, marginTop:30 }}
              >
                Analizar
            </Button>
          </View>
      
      </View>
 )};

