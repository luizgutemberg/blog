import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

 export default function App(){
   return(

     <View style={style.container}>
       <Text style={style.title}>Meu primeiro app</Text>

       <Text style={style.title}>Segundo texto</Text>
     </View>

   )
 }

 const style = StyleSheet.create({
   container:{
     backgroundColor: '#121212',
     flex:1,
     justifyContent: 'center',
     alignItems: 'center'
     
   },

   
   title:{
     color:'#FFF',
     fontSize: 24
   }
 })