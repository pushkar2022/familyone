import React from 'react';
import { AppRegistry, SafeAreaView, Text } from 'react-native';
import WebView from 'react-native-webview';
const AppClip = () => (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <WebView source={{ uri: 'https://app2.family.one/' }} /> */}
        <Text style={{ color: 'teal', fontSize: 30 }}>Hello world from App Clip</Text>
    </SafeAreaView>
);

AppRegistry.registerComponent('AppClip', () => AppClip);
