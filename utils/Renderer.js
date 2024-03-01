import {NavigationContainer} from "@react-navigation/native";
import {OnboardingNavigator} from "../navigation/OnboardingNavigator";
import {BottomTabNavigator} from "../navigation/BottomTabNavigator";
import {StyleSheet} from "react-native";

export const Renderer = ({storedId}) => {
    return (
        <NavigationContainer>
            {storedId === null ? (
                <OnboardingNavigator />
            ) : (
                <BottomTabNavigator style={styles.tab} />
            )}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tab: {
        zIndex: -1,
    }
});
