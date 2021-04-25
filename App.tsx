
import React from 'react';

import { Welcome } from './src/pages/Welcome';
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { UserIdentification } from './src/pages/UserIdentification';

export default function App(){
  /**fragremento serve para enpacotar os elementoss como unico elemento = <>
             <Text>Olá</Text>
             <Text>NLW5</Text>
             <Text>Darley</Text>
           </> */
  const [fontsLoaded] = useFonts({
         Jost_400Regular,
         Jost_600SemiBold
  });
  if(!fontsLoaded){
        return <AppLoading/>
  }
  return (<UserIdentification/> );
}

