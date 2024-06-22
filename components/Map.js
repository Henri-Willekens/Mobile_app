import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { ThemeContext } from '../App';

function SettingsPage() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <Text style={[styles.title, { color: isDarkMode ? 'white' : 'black' }]}>Settings</Text>
      <Text style={{ color: isDarkMode ? 'white' : 'black' }}>Dark Mode</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        value={isDarkMode ? 1 : 0}
        onValueChange={(value) => setIsDarkMode(value === 1)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SettingsPage;
