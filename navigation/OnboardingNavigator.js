import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ONBOARDING_STACK } from "../utils/constants";
import { GetStartedScreen } from "../screens/onboarding/GetStartedScreen";
import { NameQScreen } from "../screens/onboarding/NameQScreen";
import { HouseholdQScreen } from "../screens/onboarding/HouseholdQScreen";
import { DistanceQScreen } from "../screens/onboarding/DistanceQScreen";
import {BottomTabNavigator} from "./BottomTabNavigator";

const Stack = createStackNavigator();

export const OnboardingNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ONBOARDING_STACK.getStarted} component={GetStartedScreen} />
            <Stack.Screen name={ONBOARDING_STACK.name} component={NameQScreen} />
            <Stack.Screen name={ONBOARDING_STACK.distance} component={DistanceQScreen} />
            <Stack.Screen name={ONBOARDING_STACK.household} component={HouseholdQScreen} />
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};
