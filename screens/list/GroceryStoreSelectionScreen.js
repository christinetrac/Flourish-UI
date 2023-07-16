import React, { useState } from "react";
import { StyleSheet, View, Image } from 'react-native';
import { BoldText } from "../../components/CustomText";
import { BackButton } from "../../components/Buttons";
import { STORE_OPTIONS } from "../../utils/mockData";
import { GroceryStoreSelect } from "../../components/list/GroceryStoreSelect";

export const GroceryStoreSelectionScreen = ({ navigation }) => {
    const [storeOptions, setStoreOptions] = useState(STORE_OPTIONS);

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
            <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
            {storeOptions.map(store => (
                <GroceryStoreSelect store={store} />
            ))}
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

