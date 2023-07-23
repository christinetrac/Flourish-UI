import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { BoldText } from "../../components/CustomText";
import { BackButton } from "../../components/Buttons";
import {OPTIMIZED_GROCERIES, STORE_OPTIONS} from "../../utils/mockData";
import { GroceryStoreSelect } from "../../components/list/GroceryStoreSelect";
import { ScrollBlur } from "../../components/ScrollBlur";
import { LIST_STACK } from "../../utils/constants";

export const GroceryStoreSelectionScreen = ({ navigation }) => {
    const [storeOptions, setStoreOptions] = useState(STORE_OPTIONS);
    const [optimizedGroceries, setOptimizedGroceries] = useState(OPTIMIZED_GROCERIES);

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
            <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
            <ScrollBlur>
                <ScrollView style={{ display: 'flex', width: 320 }} showsVerticalScrollIndicator={false}>
                    {storeOptions.map(store => (
                        <GroceryStoreSelect
                            store={store}
                            key={store.name}
                            onPress={() => navigation.navigate(LIST_STACK.storeConfirmation, {store:store, optimizedGroceries:optimizedGroceries})}
                        />
                    ))}
                </ScrollView>
            </ScrollBlur>
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

