import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { BackButton } from "../../components/Buttons";
import { BoldText } from "../../components/CustomText";

export const GroceryStoreConfirmationScreen = ({ navigation, store }) => {
    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        paddingTop: 90,
        paddingBottom: 20,
        position: 'relative',
        alignItems: 'center',
    },
});
