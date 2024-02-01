import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LIST_STACK } from "../utils/constants";
import { GroceryListScreen } from "../screens/list/GroceryListScreen";
import { GroceryStoreGetLocationOptionsScreen } from "../screens/list/GroceryStoreGetLocationOptionsScreen";
import { GroceryStoreLocationConfirmationScreen } from "../screens/list/GroceryStoreLocationConfirmationScreen";
import { GroceryStoreGetManualLocationScreen } from "../screens/list/GroceryStoreGetManualLocationScreen";
import { GroceryStoreSelectionScreen } from "../screens/list/GroceryStoreSelectionScreen";
import { GroceryStoreConfirmationScreen } from "../screens/list/GroceryStoreConfirmationScreen";
import { GroceryStoreSuccessScreen } from "../screens/list/GroceryStoreSuccessScreen";

import {MapScreen} from "../screens/map/MapScreen";

const Stack = createStackNavigator();

export const ListNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={LIST_STACK.list} component={GroceryListScreen} />
            <Stack.Screen name={LIST_STACK.storeGetLocationOptions} component={GroceryStoreGetLocationOptionsScreen} />

            <Stack.Screen name={LIST_STACK.map} component={MapScreen} />

            <Stack.Screen name={LIST_STACK.storeGetManualLocation} component={GroceryStoreGetManualLocationScreen} />

            <Stack.Screen name={LIST_STACK.storeLocationConfirmation} component={GroceryStoreLocationConfirmationScreen} />
            <Stack.Screen name={LIST_STACK.storeSelection} component={GroceryStoreSelectionScreen} />
            <Stack.Screen name={LIST_STACK.storeConfirmation} component={GroceryStoreConfirmationScreen} />
            <Stack.Screen name={LIST_STACK.listSuccess} component={GroceryStoreSuccessScreen} />
        </Stack.Navigator>
    );
};
