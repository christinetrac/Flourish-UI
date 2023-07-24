import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { BackButton, PrimaryButton } from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";
import { TAB_OPTIONS } from "../../utils/constants";

export const GroceryStoreSuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Congrats!</BoldText>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Image source={require("../../assets/graphics/partyHat.png")} style={styles.hat} />
                <RegularText style={{ fontSize: 20 }}>You saved $7.65 with Flourish!</RegularText>
            </View>
            <PrimaryButton label="add more items" onPress={() => navigation.navigate(TAB_OPTIONS.search)} />
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
        justifyContent: "space-between"
    },
    hat: {
        height: 160,
        width: 180,
        marginBottom: 45
    }
});
