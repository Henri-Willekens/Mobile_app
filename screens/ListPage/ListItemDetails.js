import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItemDetails = ({ details }) => {
  return (
    <View style={styles.details}>
      <Text>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default ListItemDetails;
