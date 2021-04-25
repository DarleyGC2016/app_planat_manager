import {Feather } from '@expo/vector-icons';
import React from 'react';
import {
       Text,
       SafeAreaView,
       Image,
       StyleSheet,
       TouchableOpacity,
       Dimensions,
       View
      } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export  function Welcome(): JSX.Element{

  return (
          <SafeAreaView style={style.container}>   
            <View style={style.wrapper}>       
                <Text style={style.title}>
                  Gerencie{'\n'}
                  suas plantas de{'\n'}
                    forma fácil
                  </Text>
                  <Image 
                        source={wateringImg} 
                        style={style.image}
                        resizeMode="contain"/>

                <Text style={style.subTitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                
                <TouchableOpacity 
                      style={style.button}
                      activeOpacity={0.7}
                      >
                      <Feather
                        name="chevron-right" 
                        style={style.buttonIcon}/>
                </TouchableOpacity>
             </View>  
            </SafeAreaView>
        );
}

const style = StyleSheet.create({
  container:{
    flex: 1,

  },
  wrapper:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    color:colors.heading,
    marginTop:38,
    fontFamily:fonts.heading,
    lineHeight: 34
  },
  subTitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily:fonts.text,
  },
  
  image:{
    height: Dimensions.get('window').width *0.7
  },
  button:{
    backgroundColor:colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
    height:56,
    width:56
  },
  buttonIcon:{
    color:colors.white,
    fontSize:32
  }
})

/**<Button title={'Mostrar Imagem'} onPress={handleVisibility}/>*/
/**              
 *   const [visible,setVisible] = useState(false);
  function handleVisibility(){
      setVisible(true)
  }
 * </Text>
               {
                 visible &&
                 <Image source={wateringImg} style={style.image}/>
               } */