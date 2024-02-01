import React, { useState } from "react";
import { StyleSheet, View, Image } from 'react-native';
import { BoldText } from "../../components/CustomText";
import { BackButton } from "../../components/Buttons";

export const GroceryStoreGetManualLocationScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
            <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
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
    graphic: {
        width: 260,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 10
    },
});

