import React, {useEffect, useState} from "react";
import {StyleSheet, View, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import {BoldText, MediumText, RegularText} from "../../components/CustomText";
import {BackButton, PrimaryButton} from "../../components/Buttons";
import {LIST_STACK} from "../../utils/constants";
import * as SecureStore from "expo-secure-store";

export const GroceryStoreLocationConfirmationScreen = ({ navigation, route }) => {
    const address = route?.params?.address;
    const latitude = route?.params?.latitude;
    const longitude = route?.params?.longitude;

    const [isFetching, setIsFetching] = useState(false);

    let [user, setUser] = useState(null);
    const getUser = async () => {
        SecureStore.getItemAsync('opt').then(async id => {
            await fetch(`http://54.226.95.182:3000/users/${id}`)
                .then(res => {
                    res.json().then(data => {
                        setUser(data);
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

    const handleFindTheBestDeals = async () => {
        let finalDistance = user.Distance;
        if(user.Units === "km"){
            finalDistance *= 1000;
        }else if(user.Units === "miles"){
            finalDistance *= 1609.344;
        }

        setIsFetching(true);
        await fetch(`http://54.226.95.182:3000/optimize/${user.UserID}/${latitude}/${longitude}/${finalDistance}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                res.json().then(data => {
                    navigation.navigate(LIST_STACK.storeSelection, {results: data, lat: latitude, lng: longitude})
                    setIsFetching(false);
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        isFetching ? (
            <View style={styles.container}>
                <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
                <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
                <RegularText style={{ fontSize: 32, textAlign: 'left', width: 300, marginTop: 80 }}>
                    Finding the best deals in town... <ActivityIndicator style={{paddingBottom:2}} />
                </RegularText>
            </View>
        ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <BackButton onPress={() => navigation.pop()} />
                    <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
                    <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
                    <RegularText style={{ fontSize: 24, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 10, width: 330 }}>
                        Where are you located?
                    </RegularText>
                    <View style={{display:"flex", flexDirection: "row", alignItems:"center", paddingBottom:30}}>
                        <View>
                            <MediumText style={{ fontSize: 24, width: 220 }}>
                                {address}
                            </MediumText>
                        </View>
                        <TouchableOpacity
                            style={{paddingLeft: 45}}
                            onPress={() => navigation.navigate(LIST_STACK.storeGetLocationOptions)}
                        >
                            <BoldText style={{ fontSize: 20 }}>
                                EDIT
                            </BoldText>
                        </TouchableOpacity>
                    </View>
                    <RegularText style={{ fontSize: 24, alignSelf: 'flex-start', paddingLeft: 40, width: 330 }}>
                        Searching stores within:
                    </RegularText>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputLabel}>
                            <RegularText style={{ fontSize: 20 }}>
                                Distance
                            </RegularText>
                        </View>
                        <View style={styles.input}>
                            <RegularText style={{ fontSize: 20, color: "#747474", justifyContent: "center" }}>
                                {user?.Distance} {user?.Units}
                            </RegularText>
                        </View>
                    </View>
                    <PrimaryButton label="find the best deals" onPress={handleFindTheBestDeals}/>
                </View>
            </ScrollView>
        )
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
        marginBottom: 50,
        marginTop: 16
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: -24,
        marginBottom: 10
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
        width: 145
    },
    input: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        backgroundColor: "#FFF",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderLeftWidth: 0,
        width: 160,
        zIndex: 99,
        justifyContent: 'center'
    },
});

