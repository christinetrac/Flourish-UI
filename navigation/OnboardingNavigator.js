import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ONBOARDING_STACK } from "../utils/constants";
import { GetStartedScreen } from "../screens/onboarding/GetStartedScreen";
import { HouseholdQScreen } from "../screens/onboarding/HouseholdQScreen";
import { DistanceQScreen } from "../screens/onboarding/DistanceQScreen";

const Stack = createStackNavigator();

export const OnboardingNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ONBOARDING_STACK.getStarted} component={GetStartedScreen} />
            <Stack.Screen name={ONBOARDING_STACK.household} component={HouseholdQScreen} />
            <Stack.Screen name={ONBOARDING_STACK.distance} component={DistanceQScreen} />
        </Stack.Navigator>
    );
};
