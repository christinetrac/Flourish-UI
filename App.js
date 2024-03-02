import {Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts} from '@expo-google-fonts/inter';
import * as SecureStore from 'expo-secure-store';
import {useEffect, useState} from "react";
import {Renderer} from "./utils/Renderer";

export default function App() {
  let [storedId, setStoredId] = useState(null);
  const getId = async () => {
    SecureStore.getItemAsync('demo').then(id => {
      console.log("promise: " + id)
      if(id !== null){
        setStoredId(id);
      }
    });
  }
  useEffect(() => {
    getId();
  }, [])

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
      <Renderer storedId={storedId} />
  );
}
