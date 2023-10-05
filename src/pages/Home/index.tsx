import React, { FC } from 'react';
import {
   Text,
   View,
 } from 'react-native';
import { getEndpoints } from '../../api/config/config';

export default function Home() {
   
   const urls = getEndpoints().apiHostUrl;

   return(
   <View>
      <Text>Home page</Text>
   </View>
)};

