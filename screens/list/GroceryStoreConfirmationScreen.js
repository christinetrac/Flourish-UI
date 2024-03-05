import React, {useEffect, useState} from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import {BackButton, PrimaryButtonXS} from "../../components/Buttons";
import { BoldText, RegularText } from "../../components/CustomText";
import { ScrollBlur } from "../../components/ScrollBlur";
import { LIST_STACK } from "../../utils/constants";
import * as SecureStore from "expo-secure-store";
import {getDistance} from "geolib";
import MapView, {Marker} from "react-native-maps";

export const GroceryStoreConfirmationScreen = ({ navigation, route }) => {
    const name = route?.params?.name;
    const details = route?.params?.details;
    const storeLat = details?.location?.lat;
    const storeLng = details?.location?.lng;
    const userLat = route?.params?.userLat;
    const userLng = route?.params?.userLng;

    let [distance, setDistance] = useState("");
    let [id, setId] = useState(null);
    const getUser = async () => {
        SecureStore.getItemAsync('opt').then(async id => {
            await fetch(`http://54.226.95.182:3000/users/${id}`)
                .then(res => {
                    res.json().then(user => {
                        setId(user.UserID);
                        let distanceM = getDistance(
                            { latitude: userLat, longitude: userLng },
                            { latitude: storeLat, longitude: storeLng },
                            100
                        );
                        if(user.Units === "km"){
                            distanceM /= 1000;
                            setDistance(distanceM + " km");
                        }else if(user.Units === "miles"){
                            distanceM /= 1609.344;
                            setDistance(distanceM + " miles");
                        }else {
                            setDistance(distanceM + " m");
                        }
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }
    useEffect(() => {
        getUser()
    }, [])

    const handleStoreConfirmation = async () => {
        try {
            await fetch("http://54.226.95.182:3000/cart/new", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "UserID": id,
                    "cart": details.cart,
                }),
            })
        } catch(e) {
            console.log(e);
        } finally {
            navigation.navigate(LIST_STACK.listSuccess, {store: name});
        }
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: storeLat,
                    longitude: storeLng,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                }}
            >
                <Marker coordinate={{
                    latitude: storeLat,
                    longitude: storeLng,
                    }}
                />
            </MapView>
            <BackButton onPress={() => navigation.pop()} />
            <View style={styles.summaryContainer}>
                <ScrollBlur>
                    <ScrollView style={{ display: 'flex', width: 270 }} showsVerticalScrollIndicator={false}>
                        <View style={[styles.flexText, {paddingBottom: 12}]}>
                            <RegularText style={{ fontSize: 36 }}>{name === "Voila" ? "Sobeys": name}</RegularText>
                            <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>{distance}</RegularText>
                        </View>
                        {details?.cart?.map((item, i) => (
                            <View key={i} style={styles.flexText}>
                                {item.Price !== 0 ? (
                                    <RegularText style={{ fontSize: 16, color: '#6A6A6A', textTransform: 'capitalize' }}>
                                        {item.ProductName}: <BoldText style={{color: "#445601"}}>${item.Price?.toFixed(2)}</BoldText>
                                    </RegularText>
                                ) : (
                                    <RegularText style={{ fontSize: 16, color: '#6A6A6A', textTransform: 'capitalize', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
                                        {item.ProductName}: <BoldText style={{color: "#445601"}}>item not available here</BoldText>
                                    </RegularText>
                                )}
                            </View>
                        ))}
                    </ScrollView>
                </ScrollBlur>
                <BoldText style={{ fontSize: 20, paddingBottom: 8, paddingTop: 8 }}>Total:  ${details.price?.toFixed(2)}</BoldText>
                <PrimaryButtonXS label="select this store" onPress={handleStoreConfirmation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    summaryContainer: {
        height: 330,
        width: 310,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        shadowColor: '#DCDCDC',
        shadowOffset: {
            width: 10,
            height: 0
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 0,
        alignSelf: 'center'
    },
    flexText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 7
    }
});
