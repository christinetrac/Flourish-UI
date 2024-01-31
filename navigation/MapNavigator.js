import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MAP_STACK } from "../utils/constants";
import { MapScreen } from "../screens/map/MapScreen";

const Stack = createStackNavigator();

export const MapNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MAP_STACK.map} component={MapScreen} />
    </Stack.Navigator>
  );
};
