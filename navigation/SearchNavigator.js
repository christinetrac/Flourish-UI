import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SEARCH_STACK } from "../utils/constants";
import { SearchScreen } from "../screens/search/SearchScreen";

const Stack = createStackNavigator();

export const SearchNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SEARCH_STACK.search} component={SearchScreen} />
        </Stack.Navigator>
    );
};
