import React, { useState } from "react";
import { StyleSheet, View, Image } from 'react-native';
import { TAB_OPTIONS } from "../../utils/constants";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";

export const GroceryListScreen = ({ navigation }) => {
    const [groceryList, setGroceryList] = useState([]);

    return (
        <View style={styles.container}>
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Grocery List</BoldText>
            <View>
                <Image source={require('../../assets/graphics/groceryCart.png')} style={styles.graphic} />
                <RegularText style={{ fontSize: 20 }}>Your grocery list is empty!</RegularText>
            </View>
            <View>
                {groceryList.length ? (
                    <>
                        <SecondaryButton label="add more items" onPress={() => navigation.navigate(TAB_OPTIONS.search)}/>
                        <PrimaryButton label="find the best deals" onPress={() => console.log("hi")} />
                    </>
                ) : (
                    <PrimaryButton label="add more items" onPress={() => navigation.navigate(TAB_OPTIONS.search)} />
                )}
            </View>
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
    graphic: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20
    },
});
