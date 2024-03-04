import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RegularText } from "../CustomText";
import { getDistance } from 'geolib';
import React, {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import {Ionicons} from "@expo/vector-icons";

export const GroceryStoreSelect = ({name, details, userLat, userLng, onPress}) => {
    const storeLat = details?.location?.lat;
    const storeLng = details?.location?.lng;
    const foundAllItems = details?.all_items;
    const itemsFound = details?.items_found;

    let [distance, setDistance] = useState("");
    const getUser = async () => {
        SecureStore.getItemAsync('opt').then(async id => {
            await fetch(`http://54.226.95.182:3000/users/${id}`)
                .then(res => {
                    res.json().then(user => {
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
                        }
                        else{
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

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <RegularText style={{ fontSize: 20, paddingBottom: 4 }}>{name === "Voila" ? "Sobeys": name}</RegularText>
                <RegularText style={{ fontSize: 14, color: '#6A6A6A' }}>Total: ${details.price?.toFixed(2)}</RegularText>
                <RegularText style={{ fontSize: 14, color: '#6A6A6A' }}>Items found: {itemsFound}</RegularText>
            </View>
            <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>{distance}</RegularText>
            {foundAllItems === "true" && (
                <Ionicons
                    name="star"
                    size={30}
                    color="#445601"
                    style={styles.inputIcon}
                />
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 310,
        backgroundColor: '#FFF',
        borderRadius: 14,
        shadowColor: '#DCDCDC',
        shadowOffset: {
            width: 8,
            height: 7
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    inputIcon: {
        position: "absolute",
        top: -12,
        right: -9,
        zIndex: 999,
    },
});
