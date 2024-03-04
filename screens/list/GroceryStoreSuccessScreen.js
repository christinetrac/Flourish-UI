import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { BackButton, PrimaryButton } from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";
import {LIST_STACK} from "../../utils/constants";

export const GroceryStoreSuccessScreen = ({ navigation, route }) => {
    const store = route?.params?.store;
    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Congrats!</BoldText>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Image source={require("../../assets/graphics/partyHat.png")} style={styles.hat} />
                {/*<RegularText style={{ fontSize: 20 }}>You saved $29.90 with Flourish!</RegularText>*/}
                <RegularText style={{ fontSize: 20 }}>
                    Your grocery list has been updated for a trip to <BoldText style={{color: "#445601"}}>{store === "Voila" ? "Sobeys": store}</BoldText>
                </RegularText>
            </View>
            <PrimaryButton label="see updated list" onPress={() => navigation.navigate(LIST_STACK.list)} />
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
        justifyContent: "space-between",
        paddingHorizontal: 40
    },
    hat: {
        height: 160,
        width: 180,
        marginBottom: 45
    }
});
