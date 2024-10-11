import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
const AppClip = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://app2.family.one/' }} />
    </SafeAreaView>
);

AppRegistry.registerComponent('AppClip', () => AppClip);
