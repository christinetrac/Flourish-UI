import { StyleSheet, View } from 'react-native';
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

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
