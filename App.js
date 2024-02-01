import {StyleSheet, View} from 'react-native';
import {BottomTabNavigator} from "./navigation/BottomTabNavigator";
import {Inter_400Regular, Inter_700Bold, useFonts} from '@expo-google-fonts/inter';
import {OnboardingNavigator} from "./navigation/OnboardingNavigator";
import {NavigationContainer} from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const getUserId = async () => {
    return await SecureStore.getItemAsync('userId');
  }

  const showOnboarding = false;

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
