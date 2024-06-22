import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ListPage from './screens/ListPage/ListPage';
import MapsPage from './screens/MapPage/MapsPage';
import SettingsPage from './screens/SettingsPage/SettingsPage';
import { ThemeProvider, useTheme } from './screens/SettingsPage/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
};

const MainTabs = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        tabBarLabelStyle: {
          color: theme === 'dark' ? '#fff' : '#000',
        },
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: theme === 'dark' ? '#fff' : '#000',
      }}
    >
        <Tab.Screen
          name="ListPage"
          component={ListPage}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MapsPage"
          component={MapsPage}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="earth" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsPage"
          component={SettingsPage}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};


const SettingsPageStack = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <Stack.Screen name="SettingsPage" component={SettingsPage} options={{ title: 'Settings Page' }} />
    </Stack.Navigator>
  );
};

export default App;
