import React, { useState } from "react";
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { BoldText } from "../../components/CustomText";
import { BackButton } from "../../components/Buttons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Ionicons} from "@expo/vector-icons";
import {LIST_STACK} from "../../utils/constants";

export const GroceryStoreGetManualLocationScreen = ({ navigation }) => {

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} accessible={false}>
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Where are you located?</BoldText>
            <GooglePlacesAutocomplete
                placeholder="Enter your address"
                query={{key: ""}}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    navigation.navigate(LIST_STACK.storeLocationConfirmation, {address: data.description})
                }}
                onFail={error => console.log(error)}
                onNotFound={() => console.log('no results')}
                textInputProps={{
                    clearButtonMode: 'never'
                }}
                renderLeftButton={
                    () => (
                        <Ionicons
                            name="search"
                            size={25}
                            color="#9D9D9D"
                            style={{
                                position: "absolute",
                                top: 13,
                                left: 18,
                                zIndex: 999,
                            }}
                        />
                    )
                }
                styles={{
                    textInputContainer: {
                        backgroundColor: 'transparent',
                        marginTop: 20,
                        width: 326,
                        alignSelf: "center",
                    },
                    textInput: {
                        paddingLeft: 50,
                        paddingRight: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 20,
                        fontFamily: "Inter_400Regular",
                        backgroundColor: "#FFF",
                        borderRadius: 31,
                        borderWidth: 3,
                        borderColor: "#9D9D9D",
                        height: 52,
                        display: "flex",
                    },
                    listView: {
                        width: 316,
                        alignSelf: "center",
                        backgroundColor: "white",
                        top: 14,
                        borderRadius: 7,
                        marginBottom: 30
                    },
                    separator: {
                        height: 0
                    }
                }}
            />
        </View>
        </TouchableWithoutFeedback>
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

