import React from "react";
import {StyleSheet, View, Image} from 'react-native';
import {BoldText, RegularText} from "../../components/CustomText";
import {BackButton, PrimaryButton} from "../../components/Buttons";
import {LIST_STACK} from "../../utils/constants";

export const GroceryStoreLocationConfirmationScreen = ({ navigation, route }) => {
    const address = route?.params?.address;

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
            <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
            <RegularText style={{ fontSize: 24, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 15, width: 330 }}>
                Where are you located?
            </RegularText>
            <PrimaryButton label="find the best deals" onPress={() => navigation.navigate(LIST_STACK.storeSelection)}/>
        </View>
    );
};

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
        marginBottom: 80,
        marginTop: 16
    },
});

