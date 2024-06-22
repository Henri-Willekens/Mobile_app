import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import ListItem from './ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../../components/data.json';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../SettingsPage/ThemeContext';

const ListPage = () => {
  const { theme } = useTheme();
  const [expandedItemIds, setExpandedItemIds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getExpandedState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('@expanded_item_ids');
        if (storedState) {
          setExpandedItemIds(JSON.parse(storedState));
        }
      } catch (e) {
        console.error('Failed to fetch the expanded state from storage', e);
      }
    };

    getExpandedState();
  }, []);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('@favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (e) {
        console.error('Failed to load favorites from storage', e);
      }
    };

    loadFavorites();
  }, []);

  const handleToggleExpansion = async (id) => {
    const newExpandedItemIds = expandedItemIds.includes(id)
      ? expandedItemIds.filter((itemId) => itemId !== id)
      : [...expandedItemIds, id];

    setExpandedItemIds(newExpandedItemIds);

    try {
      await AsyncStorage.setItem('@expanded_item_ids', JSON.stringify(newExpandedItemIds));
    } catch (e) {
      console.error('Failed to save the expanded state to storage', e);
    }
  };

  const handleToggleFavorite = async (item) => {
    const newFavorites = favorites.some((fav) => fav.id === item.id)
      ? favorites.filter((fav) => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(newFavorites);

    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));
    } catch (e) {
      console.error('Failed to save favorites to storage', e);
    }
  };

  const handlePressNavigation = (location) => {
    if (location) {
      navigation.navigate('MapsPage', { destination: location });
    } else {
      Alert.alert('No location specified for this item.');
    }
  };

  const navigateToFavorites = () => {
    const favoriteLocations = favorites.filter((fav) => fav.location);
    navigation.navigate('MapsPage', { favoriteLocations });
  };

  return (
    <ScrollView style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
    <Button title="Show Favorites on Map" onPress={navigateToFavorites} />
      {data.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          expanded={expandedItemIds.includes(item.id)}
          onToggleExpansion={handleToggleExpansion}
          onPressNavigation={handlePressNavigation}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={favorites.some(fav => fav.id === item.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
});

export default ListPage;
