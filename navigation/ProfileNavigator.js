import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PROFILE_STACK } from "../utils/constants";
import { ProfileScreen } from "../screens/profile/ProfileScreen";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={PROFILE_STACK.profile} component={ProfileScreen} />
        </Stack.Navigator>
    );
};
