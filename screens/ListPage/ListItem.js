import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import ListItemDetails from './ListItemDetails';
import FavoriteButton from './FavoriteButton';

const ListItem = ({ item, onPressFavorite, onToggleExpansion, onPressNavigation, onToggleFavorite, isFavorite }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpansion = () => {
    setExpanded(!expanded);
    onToggleExpansion(item.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleExpansion}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          {!expanded && <Text>Click here for more information</Text>}
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.expandedContent}>
          <ListItemDetails details={item.details} />
          <Button title="Navigate" onPress={() => onPressNavigation(item.location)} />
        </View>
      )}
      <FavoriteButton onPress={() => onToggleFavorite(item)} isFavorite={isFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  header: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  expandedContent: {
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
});

export default ListItem;
