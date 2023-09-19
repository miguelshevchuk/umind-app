import ImgToBase64 from 'react-native-image-base64-png';

export const localImageToBase64 = async (
  images: string,
): Promise<string> => {
  const base64 = await ImgToBase64.getBase64String(images);
  const extension = images.split('.').pop();
  return `data:image/${extension};base64,${base64}`;
};
