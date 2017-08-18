import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AlbumList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("componentWillMount in Albums!!");
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
