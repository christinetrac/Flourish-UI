import {StyleSheet, View} from 'react-native';
import {BottomTabNavigator} from "./navigation/BottomTabNavigator";
import {Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts} from '@expo-google-fonts/inter';
import {OnboardingNavigator} from "./navigation/OnboardingNavigator";
import {NavigationContainer} from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';
import {useEffect, useState} from "react";

export default function App() {
  let [storedId, setStoredId] = useState(null);
  const doesIdExist = async () => {
    SecureStore.getItemAsync('tester').then(id => {
      console.log("promise: " + id)
      if(id !== null){
        setStoredId(id);
      }
    });
  }
  useEffect(() => {
    doesIdExist();
  }, [doesIdExist()])

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  console.log("state: " + storedId)
  return (
      <View style={styles.container}>
        {storedId === null ? (
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
