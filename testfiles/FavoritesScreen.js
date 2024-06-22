

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = ({ route }) => {
  const { favorites } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.map((favorite, index) => (
        <Text key={index}>{favorite}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default FavoritesScreen;
