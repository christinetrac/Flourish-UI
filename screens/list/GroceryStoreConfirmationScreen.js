import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {BackButton, PrimaryButtonXS} from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";
import { ScrollBlur } from "../../components/ScrollBlur";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export const GroceryStoreConfirmationScreen = ({ navigation, route }) => {
    const store = route?.params?.store;
    const optimizedGroceries = route?.params?.optimizedGroceries;

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 20 }}>Optimize your groceries</BoldText>
            <Image source={require('../../assets/images/map.png')} style={styles.map} />
            <View style={styles.summaryContainer}>
                <ScrollBlur>
                    <ScrollView style={{ display: 'flex', width: 270 }} showsVerticalScrollIndicator={false}>
                        <View style={[styles.flexText, {paddingBottom: 16}]}>
                            <RegularText style={{ fontSize: 36 }}>{store.name}</RegularText>
                            <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>{store.distance}</RegularText>
                        </View>
                        {optimizedGroceries.map(grocery => (
                            <View key={grocery.name} style={styles.flexText}>
                                <RegularText style={{ fontSize: 16, color: '#6A6A6A', textTransform: 'capitalize' }}>{grocery.name}</RegularText>
                                <RegularText style={{ fontSize: 16, color: '#6A6A6A' }}>${grocery.price}</RegularText>
                            </View>
                        ))}
                    </ScrollView>
                </ScrollBlur>
                <BoldText style={{ fontSize: 20, paddingBottom: 15, paddingTop: 8 }}>Total:  ${store.total}</BoldText>
                <PrimaryButtonXS label="select this store" onPress={() => console.log("hi")} />
            </View>
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
    map: {
        width: '100%',
        height: '100%',
    },
    summaryContainer: {
        height: 340,
        width: 310,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        shadowColor: '#DCDCDC',
        shadowOffset: {
            width: 10,
            height: 0
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 18
    },
    flexText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 7
    }
});
