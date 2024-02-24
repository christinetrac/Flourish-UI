import React, {useState} from "react";
import { BackButton, PrimaryButton } from "../../components/Buttons";
import {BoldText, RegularText} from "../../components/CustomText";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import { TAB_OPTIONS } from "../../utils/constants";

export const BestProductScreen = ({ navigation, route }) => {
    const query = route?.params?.query;
    const [count, onCountChange] = useState("");
    const [lowestPriceOption, setLowestPriceOption] = useState("price_item");

    const handleAddToList = () => {
        navigation.navigate(TAB_OPTIONS.list);
    }

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <RegularText style={{ fontSize: 40, paddingLeft: 40, alignSelf: 'flex-start', paddingTop: 40 }}>Best Price</RegularText>
            <RegularText style={{ fontSize: 20, paddingHorizontal: 40, alignSelf: 'flex-start', paddingTop: 10, paddingBottom: 20 }}>
                The Best Price feature finds the lowest price for the selected product.
                We will determine the <BoldText style={{color: "#445601"}}>{query}</BoldText> that best suit your needs.
            </RegularText>
            <RegularText style={{ fontSize: 24, paddingHorizontal: 40, alignSelf: 'flex-start', paddingTop: 10 }}>
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
            <RegularText style={{ fontSize: 24, paddingHorizontal: 40, alignSelf: 'flex-start', paddingTop: 10, paddingBottom: 10 }}>
                Lowest Price Preference
            </RegularText>
            <View style={styles.quality}>
                <TouchableOpacity style={lowestPriceOption === 'price_item' ? styles.qualityButtonActive : styles.qualityButton} onPress={() => setLowestPriceOption('price_item')}>
                    <BoldText style={lowestPriceOption === 'price_item' ? styles.qualityTextActive : styles.qualityText}>Item Price</BoldText>
                </TouchableOpacity>
                <TouchableOpacity style={lowestPriceOption === 'price_per_unit' ? styles.qualityButtonActive : styles.qualityButton} onPress={() => setLowestPriceOption('price_per_unit')}>
                    <BoldText style={lowestPriceOption === 'price_per_unit' ? styles.qualityTextActive : styles.qualityText}>Price Per Unit</BoldText>
                </TouchableOpacity>
            </View>
            <PrimaryButton label="add to list" onPress={handleAddToList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        paddingTop: 80,
        paddingBottom: 20,
        position: 'relative',
        alignItems: 'center',
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
    quality: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: "100%",
        marginBottom: 80
    },
    qualityButton: {
        height: 80,
        width: 140,
        borderRadius: 12,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#9D9D9D",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        padding: 12
    },
    qualityButtonActive: {
        height: 80,
        width: 140,
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#445601",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        padding: 12
    },
    qualityText :{
        fontSize: 20,
        color: "#747474",
        textAlign: "center",
    },
    qualityTextActive :{
        fontSize: 20,
        textAlign: "center",
        color: "#445601"
    },
});
