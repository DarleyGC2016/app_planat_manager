import {Feather } from '@expo/vector-icons';
import React from 'react';
import {
       Text,
       SafeAreaView,
       Image,
       StyleSheet,
       TouchableOpacity,
       Dimensions,
       View,
       TextInput
      } from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';



export  function UserIdentification(): JSX.Element{

  return (
          <SafeAreaView style={style.container}>   
            <View style={style.content}>  
                <View style={style.form}>  
                  <Text style={style.emoji}>
                        😄
                    </Text>
                   <Text style={style.title}>
                        Como podemos{'\n'}
                         chamar você?
                    </Text>

                    <TextInput
                       style={style.input}
                    />

                   
                    
     
                </View> 
             </View>  
            </SafeAreaView>
        );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    width:'100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
 
  content:{
    flex: 1,
    width:'100%',
  },
  form:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  title:{
    fontSize:24,
    lineHeight: 32,
    textAlign:'center',
    color:colors.heading,
    fontFamily:fonts.heading,
    marginTop: 20
  },
  emoji:{
    fontSize:44,
  },
  input:{
      borderBottomWidth: 1,
      borderColor: colors.gray,
      color: colors.heading,
      width:'100%',
      fontSize: 18,
      marginTop: 50,
      padding: 10,
      textAlign: 'center'
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
/**               <TouchableOpacity 
                        style={style.button}
                        activeOpacity={0.7}
                        >
                        <Feather
                            name="chevron-right" 
                            style={style.buttonIcon}/>
                    </TouchableOpacity> */