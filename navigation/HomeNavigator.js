import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { STACK_NAMES } from "../utils/constants";
import { HomeScreen } from "../screens/home/HomeScreen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACK_NAMES.home} component={HomeScreen} />
        </Stack.Navigator>
    );
};
