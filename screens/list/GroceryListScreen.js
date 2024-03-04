import React, {useEffect, useState} from "react";
import {StyleSheet, View, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { TAB_OPTIONS, LIST_STACK } from "../../utils/constants";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";
import { GroceryListItem } from "../../components/list/GroceryListItem";
import { GroceryListDealItem } from "../../components/list/GroceryListDealItem";
import { ScrollBlur } from "../../components/ScrollBlur";
import * as SecureStore from "expo-secure-store";
import { useIsFocused } from '@react-navigation/native'

export const GroceryListScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [userId, setUserId] = useState(null);
    const [groceryList, setGroceryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGroceryList = async () => {
        SecureStore.getItemAsync('opt').then(async id => {
            await fetch(`http://192.168.1.243:3000/users/${id}`)
                .then(res => {
                    res.json().then(async data => {
                        const id = data.UserID;
                        setUserId(id);
                        await fetch(`http://192.168.1.243:3000/cart/${id}`, {
                            Accept: "application/json",
                            "Content-type": "application/json"
                        })
                            .then(res => {
                                res.json().then(list => {
                                    setGroceryList(JSON.parse(list));
                                }).catch(e => console.log(e))
                            }).catch(e => console.log(e))
                    }).catch(e => {
                        console.log(e)
                    })
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(() => {
                    setIsLoading(false);
                })
        })
    }
    useEffect(() => {
        if(isFocused){
            getGroceryList();
        }
    }, [isFocused])

    const clearGroceryList = async () => {
        await fetch(`http://192.168.1.243:3000/cart/empty/${userId}`, {
            Accept: "application/json",
            "Content-type": "application/json"
        })
        .then(() => {
            setGroceryList([]);
        })
        .catch(e => console.log(e))
    }

    return (
        <View style={groceryList.length ? styles.list : styles.container}>
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 15 }}>Grocery List</BoldText>
            {isLoading ? (
                <View style={{position: "absolute", alignSelf: "center", top: 340}}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            ) : (
                <>
                    {groceryList.length !== 0 ? (
                        <ScrollBlur>
                            <ScrollView style={{ display: 'flex', width: 318, paddingTop: 10 }} showsVerticalScrollIndicator={false}>
                                {groceryList?.map(item => (
                                    Object.keys(item.Product).length ? (
                                        <GroceryListItem item={item} key={item.UserQuery} />
                                    ) : (
                                        <GroceryListDealItem item={item} key={item.UserQuery} />
                                    )
                                ))}
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
                </>
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
