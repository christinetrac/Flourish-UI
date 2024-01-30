import { StyleSheet, View } from 'react-native';
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import {OnboardingNavigator} from "./navigation/OnboardingNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const showOnboarding = true;

  return (
    <View style={styles.container}>
      {showOnboarding ? (
          <NavigationContainer>
            <OnboardingNavigator />
          </NavigationContainer>
      ):(
          <BottomTabNavigator style={styles.tab} />
      )}
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
