import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { STACK_NAMES } from "../utils/constants";
import { GroceryListScreen } from "../screens/list/GroceryListScreen";

const Stack = createStackNavigator();

export const ListNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACK_NAMES.list} component={GroceryListScreen} />
        </Stack.Navigator>
    );
};
