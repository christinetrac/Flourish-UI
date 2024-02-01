import {StyleSheet, SafeAreaView, Image} from 'react-native';
import {BoldText} from "../../components/CustomText";
import React from "react";
import {ONBOARDING_STACK} from "../../utils/constants";
import {PrimaryButton} from "../../components/Buttons";
import * as SecureStore from "expo-secure-store";
import uuid from "react-native-uuid";

export const GetStartedScreen = ({ navigation }) => {
    const createNewUserId = async () => {
        let userId = uuid.v4();
        await SecureStore.setItemAsync('userId', userId.toString());
    }

    return (
        <SafeAreaView style={styles.container}>
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40, width: 270 }}>
                Flourish: saving your groceries
            </BoldText>
            <Image source={require('../../assets/graphics/piggy.png')} style={styles.graphic} />
            <PrimaryButton label="get started" onPress={() => navigation.navigate(ONBOARDING_STACK.name, {userId: createNewUserId()})} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    graphic: {
        width: 291,
        height: 278,
        alignSelf: 'center',
        marginBottom: 115,
        marginTop: 25
    },
});
