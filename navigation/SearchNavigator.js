import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SEARCH_STACK } from "../utils/constants";
import { SearchScreen } from "../screens/search/SearchScreen";
import { ProductScreen } from "../screens/search/ProductScreen";
import { BestProductScreen } from "../screens/search/BestProductScreen";

const Stack = createStackNavigator();

export const SearchNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SEARCH_STACK.search} component={SearchScreen} />
            <Stack.Screen name={SEARCH_STACK.product} component={ProductScreen} />
            <Stack.Screen name={SEARCH_STACK.bestProductScreen} component={BestProductScreen} />
        </Stack.Navigator>
    );
};
