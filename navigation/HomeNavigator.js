import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME_STACK } from "../utils/constants";
import { HomeScreen } from "../screens/home/HomeScreen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={HOME_STACK.home} component={HomeScreen} />
        </Stack.Navigator>
    );
};
