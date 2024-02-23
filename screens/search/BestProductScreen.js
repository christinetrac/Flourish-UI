import React from "react";
import { BackButton, PrimaryButton } from "../../components/Buttons";
import { RegularText } from "../../components/CustomText";
import { Image, StyleSheet, View } from "react-native";
import { TAB_OPTIONS } from "../../utils/constants";

export const BestProductScreen = ({ navigation, route }) => {
    const query = route?.params?.query;

    const handleAddToList = () => {
        navigation.navigate(TAB_OPTIONS.list);
    }

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <View style={styles.card}>
                <Image source={require("../../assets/images/orange.png")} style={styles.image} />
            </View>
            <RegularText style={{ fontSize: 40, paddingLeft: 40, alignSelf: 'flex-start', paddingTop: 30 }}>{item.ProductName}</RegularText>
            <RegularText style={{ fontSize: 20, paddingLeft: 40, alignSelf: 'flex-start', paddingTop: 18, paddingBottom: 20 }}>Price: {item.Price}</RegularText>
            <PrimaryButton label="add to list" onPress={handleAddToList} />
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
