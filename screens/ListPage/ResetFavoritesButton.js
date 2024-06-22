import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetFavoritesButton = ({ setFavorites }) => {
  const resetFavorites = async () => {
    try {
      await AsyncStorage.removeItem('@favorites');
      setFavorites([]);
      Alert.alert('Favorites reset successfully');
    } catch (e) {
      console.error('Failed to reset favorites', e);
      Alert.alert('Failed to reset favorites');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={resetFavorites}>
      <Text>Reset Favorites</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default ResetFavoritesButton;