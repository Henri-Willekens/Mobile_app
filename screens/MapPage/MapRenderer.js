import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import darkMapStyle from './darkMapStyle.json'; // Import the dark mode style JSON
import { useTheme } from '../SettingsPage/ThemeContext';

const MapRenderer = ({ currentLocation, destination, apiKey, favoriteLocations }) => {
const { theme } = useTheme();
  const mapStyle = theme === 'dark' ? darkMapStyle : [];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        region={currentLocation ? {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : (destination && {
          latitude: destination.latitude,
          longitude: destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })}
        showsUserLocation={true}
      >
        {favoriteLocations && favoriteLocations.map((location, index) => (
          <Marker
            key={index}
            coordinate={location.location}
            title={location.title}
          />
        ))}
        {destination && <Marker coordinate={destination} title={destination.title} />}
        {currentLocation && destination && (
          <MapViewDirections
            origin={currentLocation}
            destination={destination}
            apikey={apiKey}
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapRenderer;
