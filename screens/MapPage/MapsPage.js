import React, { useState } from 'react';
import { View } from 'react-native';
import LocationHandler from './LocationHandler';
import MapRenderer from './MapRenderer';
import { GOOGLE_MAPS_API_KEY } from '../../config'; // Import the API key
import { useTheme } from '@react-navigation/native';

const MapsPage = ({ route }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const { destination, favoriteLocations } = route.params || {};
  const { colors, dark } = useTheme();
  const theme = dark ? 'dark' : 'light';

  return (
    <View style={{ flex: 1 }}>
      <LocationHandler onLocationUpdate={setCurrentLocation} />
      <MapRenderer
        currentLocation={currentLocation}
        destination={destination}
        apiKey={GOOGLE_MAPS_API_KEY}
        theme={theme}
        favoriteLocations={favoriteLocations}
      />
    </View>
  );
};

export default MapsPage;
