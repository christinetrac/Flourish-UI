import React from "react";
import {BackButton, PrimaryButton, PrimaryButtonXS} from "../../components/Buttons";
import {BoldText, RegularText} from "../../components/CustomText";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import {TAB_OPTIONS} from "../../utils/constants";

export const ProductScreen = ({ navigation, route }) => {
    const item = route?.params?.item;

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <View style={styles.card}>
                <Image source={require("../../assets/images/orange.png")} style={styles.image} />
            </View>
            <RegularText style={{ fontSize: 40, alignSelf: 'flex-start', paddingTop: 30 }}>{item.ProductName}</RegularText>
            <RegularText style={{ fontSize: 20, alignSelf: 'flex-start', paddingTop: 18, paddingBottom: 20 }}>Price: {item.Price}</RegularText>
            <PrimaryButton label="add to list" onPress={() => navigation.navigate(TAB_OPTIONS.list)} />
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
        paddingHorizontal: 40,
    },
    card: {
        width: 310,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 14,
        shadowColor: '#DCDCDC',
        shadowOffset: {
            width: 10,
            height: 9
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 200,
        width: 220,
    },
});
