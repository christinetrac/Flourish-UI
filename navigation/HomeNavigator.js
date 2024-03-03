import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {HOME_STACK, SEARCH_STACK} from "../utils/constants";
import { HomeScreen } from "../screens/home/HomeScreen";
import {ProductScreen} from "../screens/search/ProductScreen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={HOME_STACK.home} component={HomeScreen} />
            <Stack.Screen name={SEARCH_STACK.product} component={ProductScreen} />
        </Stack.Navigator>
    );
};
