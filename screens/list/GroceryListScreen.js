import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TAB_OPTIONS, LIST_STACK } from "../../utils/constants";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";
import { GroceryListItem } from "../../components/list/GroceryListItem";
import { ScrollBlur } from "../../components/ScrollBlur";
import { GROCERY_LIST } from "../../utils/mockData";

export const GroceryListScreen = ({ navigation }) => {
    const [groceryList, setGroceryList] = useState(GROCERY_LIST);

    const clearGroceryList = () => {
        setGroceryList([]);
    }

    return (
        <View style={groceryList.length ? styles.list : styles.container}>
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 15 }}>Grocery List</BoldText>
            {groceryList.length ? (
                <ScrollBlur>
                    <ScrollView style={{ display: 'flex', width: 318, paddingTop: 10 }} showsVerticalScrollIndicator={false}>
                        {groceryList.map((item, i) =>
                            <GroceryListItem item={item} key={i} />
                        )}
                        <TouchableOpacity onPress={clearGroceryList}>
                            <RegularText style={styles.clearListText}>Clear grocery list</RegularText>
                        </TouchableOpacity>
                    </ScrollView>
                </ScrollBlur>
            ) : (
                <View>
                    <Image source={require('../../assets/graphics/groceryCart.png')} style={styles.graphic} />
                    <RegularText style={{ fontSize: 20 }}>Your grocery list is empty!</RegularText>
                </View>
            )}
            {groceryList.length ? (
                <View style={{ display: 'flex', paddingTop: 20 }}>
                    <SecondaryButton label="add more items" onPress={() => navigation.navigate(TAB_OPTIONS.search)}/>
                    <PrimaryButton label="find the best deals" onPress={() => navigation.navigate(LIST_STACK.storeGetLocationOptions)} />
                </View>
            ) : (
                <PrimaryButton label="add more items" onPress={() => navigation.navigate(TAB_OPTIONS.search)} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 70,
        paddingBottom: 20,
    },
    list: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        paddingTop: 70,
        paddingBottom: 20,
        position: 'relative',
        alignItems: 'center',
    },
    graphic: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20
    },
    clearListText: {
        fontSize: 20,
        color: '#C10000',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 35
    }
});
