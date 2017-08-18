// Import a libraries
import React from 'react';
import { Text, AppRegistry } from 'react-native';

import Header from './src/components/Header'


// Create Components
// const App = () => (
//     <Header />
//   );

class App extends React.Component {

  render() {
    return (
      <Header />
    );
  }
}

// Render to device
AppRegistry.registerComponent('albums', () => App);
