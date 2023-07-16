import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { STACK_NAMES } from "../utils/constants";
import { ProfileScreen } from "../screens/profile/ProfileScreen";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={STACK_NAMES.profile} component={ProfileScreen} />
        </Stack.Navigator>
    );
};
