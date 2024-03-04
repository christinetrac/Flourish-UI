import React, {useEffect, useState} from "react";
import { BackButton, PrimaryButton } from "../../components/Buttons";
import {BoldText, RegularText} from "../../components/CustomText";
import {Image, Keyboard, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import { TAB_OPTIONS } from "../../utils/constants";
import * as SecureStore from "expo-secure-store";

export const ProductScreen = ({ navigation, route }) => {
    const item = route?.params?.item;
    const query = route?.params?.query;
    const [count, onCountChange] = useState("");

    const [user, setUser] = useState(null);
    const getUser = async () => {
        SecureStore.getItemAsync('opt').then(async id => {
            await fetch(`http://54.226.95.182:3000/users/${id}`)
                .then(res => {
                    res.json().then(data => {
                        setUser(data);
                    }).catch(e => {
                        console.log(e)
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }
    useEffect(() => {
        getUser();
    }, [])

    const handleAddToList = async () => {
        const transformedString = query?.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        try {
            await fetch("http://54.226.95.182:3000/cart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "UserID": user.UserID,
                    "Product": item,
                    "Quantity": parseInt(count, 10),
                    "UserQuery": transformedString,
                    "LowestPrice": ""
                }),
            })
        } catch(e) {
            console.log(e);
        } finally {
            navigation.navigate(TAB_OPTIONS.list);
        }
    }
    //console.log(item)

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} accessible={false}>
        <ScrollView style={{flex: 1, backgroundColor: '#F6FFF1'}}>
            <View style={styles.container}>
                <BackButton onPress={() => navigation.pop()} />
                <View style={styles.card}>
                    <View style={styles.badge}>
                        <BoldText style={{fontSize:12, textTransform:"uppercase", color: "#445601"}}>
                            {item.Store === "Voila" ? "Sobeys": item.Store}
                        </BoldText>
                    </View>
                    <Image source={{uri:item?.ProductPhotoUrl}} style={styles.image} />
                </View>
                <RegularText style={{ fontSize: 32, alignSelf: 'flex-start', paddingTop: 20, paddingBottom: 20 }}>{item.ProductName}</RegularText>
                <RegularText style={{ fontSize: 24, alignSelf: 'flex-start', paddingTop: 10 }}>
                    Preferred Count
                </RegularText>
                <View style={styles.inputContainer}>
                    <View style={styles.inputLabel}>
                        <RegularText style={{ fontSize: 20 }}>
                            Item Count
                        </RegularText>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onCountChange}
                        value={count}
                        placeholder="Number"
                        keyboardType="numeric"
                        placeholderTextColor="#747474"
                    />
                </View>
                <RegularText style={{ fontSize: 24, alignSelf: 'flex-start' }}>Price: ${item?.Price?.toFixed(2)}</RegularText>
                {item?.PricePerUnit !== 0 ? (
                    <RegularText style={{ fontSize: 24, alignSelf: 'flex-start', paddingBottom: 20 }}>Price Per Unit: ${item?.PricePerUnit?.toFixed(2)}</RegularText>
                ) : (
                    <View style={{ paddingBottom: 20 }} />
                )}
                <PrimaryButton label="add to list" onPress={handleAddToList} />
            </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        paddingTop: 90,
        paddingBottom: 20,
        paddingHorizontal: 40,
        position: 'relative',
        alignItems: 'center',
    },
    card: {
        marginVertical: 20,
        width: 310,
        height: 230,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 14,
        shadowColor: '#DCDCDC',
        shadowOffset: {
            width: 12,
            height: 12
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        width: "100%",
        height: undefined,
        resizeMode: 'contain',
        justifyContent: "center",
        alignSelf: "center",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: -24,
        width: "100%",
        marginBottom: 20,
        marginTop: -5
    },
    inputLabel: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderRightWidth: 0,
        justifyContent: "center",
        paddingLeft: 18,
        width: 140
    },
    input: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        padding: 18,
        backgroundColor: "#FFF",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        color: "#747474",
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
        borderLeftWidth: 0,
        width: 165,
        zIndex: 99
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#fff",
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#445601",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        zIndex: 99,
        position: "absolute",
        top: 0,
        left: 0
    }
});
