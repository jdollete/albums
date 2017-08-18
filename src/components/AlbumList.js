import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {

  // state = {
  //   albums: []
  // };

  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <View>
        <Text>Album List!!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default AlbumList;
