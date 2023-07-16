import { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, Inter_900Black, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BottomTabNavigator style={styles.tab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF1',
  },
  tab: {
    zIndex: -1,
  }
});
