// Import a libraries
import React from 'react';
import { AppRegistry } from 'react-native';

// Import components
import Header from './src/components/Header'


// Create Components
const App = () => (
    <Header />
  );

// Render to device
AppRegistry.registerComponent('albums', () => App);
