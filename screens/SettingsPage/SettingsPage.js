import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={theme === 'dark' ? styles.darkText : styles.lightText}>Dark Mode</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default SettingsPage;