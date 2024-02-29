import {StyleSheet, SafeAreaView, Image, TextInput, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {RegularText} from "../../components/CustomText";
import {PrimaryButton} from "../../components/Buttons";
import {HOME_STACK, ONBOARDING_STACK} from "../../utils/constants";
import React, {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import {v4 as uuidv4} from "uuid";
import {BottomTabNavigator} from "../../navigation/BottomTabNavigator";
import {HomeNavigator} from "../../navigation/HomeNavigator";

export const HouseholdQScreen = ({ navigation, route }) => {
    const userId = route?.params?.userId;
    const name = route?.params?.name;
    const distance = route?.params?.distance;
    const unit = route?.params?.unit;

    const [numPeople, onChangeNumPeople] = useState("");

    useEffect(() => {
        console.log(typeof userId);
        console.log(typeof name);
        console.log(typeof distance);
        console.log(typeof numPeople);

        console.log(userId);
        console.log(name);
        console.log(distance);
        console.log(numPeople);
    }, [])

    const handleSubmit = async () => {
        // send user profile to backend and persist to local storage
        try {
            await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "UserID": userId,
                    "Name": name,
                    "Distance": parseInt(distance),
                    "HouseholdSize": parseInt(numPeople),
                }),
            })
        } catch (e) {
            console.log(e);
        } finally {
            // await SecureStore.setItemAsync('tester', userId.toString());
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} accessible={false}>
                <View>
                    <Image source={require('../../assets/graphics/house.png')} style={styles.graphic} />
                    <RegularText style={{ fontSize: 32, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 20, width: 330 }}>
                        How many people are you feeding including yourself?
                    </RegularText>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputLabel}>
                            <RegularText style={{ fontSize: 20 }}>
                                Household Size
                            </RegularText>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumPeople}
                            value={numPeople}
                            placeholder="Number"
                            keyboardType="numeric"
                            placeholderTextColor="#747474"
                        />
                    </View>
                    <PrimaryButton label="submit" onPress={handleSubmit} />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F6FFF1',
        justifyContent: 'center',
    },
    graphic: {
        width: 258,
        height: 258,
        alignSelf: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: -24,
        marginBottom: 40
    },
    inputLabel: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderRightWidth: 0,
        justifyContent: "center",
        paddingLeft: 18,
        width: 185
    },
    input: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        padding: 18,
        backgroundColor: "#FFF",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        color: "#747474",
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
        borderLeftWidth: 0,
        width: 120,
        zIndex: 99
    },
});
