import ImgToBase64 from 'react-native-image-base64-png';
import RNFS from 'react-native-fs';
import base from 'react-native-base64'

export const transformarImagen = async (
  images: string,
) => {
  RNFS.readFile(images, 'base64')
  .then(res =>{
    return base.encode(res);
  })
  .catch(error => console.log(error.message));
};



export const localImageToBase64 = async (
  images: string[],
): Promise<string[]> => {
  const base64Images = await Promise.all(
    images.map(async file => {
      const base64 = await ImgToBase64.getBase64String(file);
      const extension = file.split('.').pop();
      return `data:image/${extension};base64,${base64}`;
    }),
  );

  return base64Images;
};

export const buildRequest = async (
  images: string,
): Promise<string> => {

  const base64 = await ImgToBase64.getBase64String(images);
  const extension = images.split('.').pop();
  
  const base64Images = JSON.stringify(
    {
      imagen: `data:image/${extension};base64,${base64}`
    }
  )

  return base64Images;
};