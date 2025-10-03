import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WekcomeScreens'; 
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';``

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Shrikhand': require('./assets/font/Shrikhand-Regular.ttf'),
    });
  }, []);

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  
}
