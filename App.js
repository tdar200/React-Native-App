/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GameEngine
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}></GameEngine>
      <StatusBar style="auto" hidden />
    </SafeAreaView>
  );
}

// export default App;
