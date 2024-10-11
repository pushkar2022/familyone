/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Linking
} from 'react-native';
import WebView from 'react-native-webview';

function App() {
  const [url, setUrl] = useState('https://app2.family.one/');

  useEffect(() => {
    try {
      const handleDeepLink = (event: { url: string }) => {
        const deepLinkUrl = event.url;
        if (deepLinkUrl.startsWith('https://app2.family.one/#login_link?')) {
          // Parse the URL manually
          const hashIndex = deepLinkUrl.indexOf('#');
          if (hashIndex !== -1) {
            const loginLink = deepLinkUrl.slice(hashIndex + 1);
            const fullUrl = `https://app2.family.one/#${loginLink}`;
            setUrl(fullUrl);
          }
        }
        else{
          setUrl('https://app2.family.one/main');
        }
      };
  
      // Add event listener for deep links
      const linkingSubscription = Linking.addEventListener('url', handleDeepLink);
  
      // Check for any initial URL when the app is opened
      Linking.getInitialURL().then((initialUrl) => {
        if (initialUrl) {
          handleDeepLink({ url: initialUrl });
        }
      });
  
      // Clean up the event listener
      return () => {
        linkingSubscription.remove();
      };
      
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );
}

export default App;