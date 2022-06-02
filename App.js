import React from 'react';
import {View, StatusBar} from 'react-native'

import Home from './src/pages/Home'

export default function App (){
  return(
    <View>
      <StatusBar backgroundColor= "#232630" barStyle="light-content" />
      <Home/>
    </View>
  )
}