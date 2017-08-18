// Import a libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';

// Import components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create Components
// const App = () => (
//     <Header headerText={'Albums'}/>
//   );

class App extends React.Component {

  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

// Render to device
AppRegistry.registerComponent('albums', () => App);
