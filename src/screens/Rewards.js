import React from 'react';
import { View, Text, Image } from 'react-native';
import postcards from '../components/postcardsData'; // Import the postcards array

const Rewards = () => {
  return (
    <View>
      {postcards.map(postcard => (
        <View key={postcard.id}>
          <Image source={postcard.imageSource} />
          <Text>{postcard.title}</Text>
          <Text>{postcard.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default Rewards;
