/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';


function App(){

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <WebView source={{ uri: 'https://app2.family.one/' }} /> */}
      <Text style={{color:'teal',fontSize:30}}>Hello world from Main App</Text>
    </SafeAreaView>
  );
}


export default App;
