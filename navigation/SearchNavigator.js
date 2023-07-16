import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { STACK_NAMES } from "../utils/constants";
import { SearchScreen } from "../screens/search/SearchScreen";

const Stack = createStackNavigator();

export const SearchNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACK_NAMES.search} component={SearchScreen} />
        </Stack.Navigator>
    );
};
