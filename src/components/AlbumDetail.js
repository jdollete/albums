import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  // Destructuring for refactor
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
});

export default AlbumDetail;
