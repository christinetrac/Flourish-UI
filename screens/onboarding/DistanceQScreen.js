import {StyleSheet, SafeAreaView, Image, TextInput, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {RegularText} from "../../components/CustomText";
import {PrimaryButton} from "../../components/Buttons";
import {ONBOARDING_STACK} from "../../utils/constants";
import React, {useState} from "react";

export const DistanceQScreen = ({ navigation, route }) => {
    const name = route?.params?.name;

    const [num, onChangeNum] = useState("");

    const [open, setOpen] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [items, setItems] = useState([
        {label: 'm', value: 'm'},
        {label: 'km', value: 'km'},
        {label: 'miles', value: 'miles'}
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} accessible={false}>
                <View>
                    <Image source={require('../../assets/graphics/car.png')} style={styles.graphic} />
                    <RegularText style={{ fontSize: 32, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 15, width: 330 }}>
                        How far would you be willing to travel to get the best deals?
                    </RegularText>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputLabel}>
                            <RegularText style={{ fontSize: 20 }}>
                                Distance
                            </RegularText>
                        </View>
                        <TextInput
                            style={styles.inputNum}
                            onChangeText={onChangeNum}
                            value={num}
                            placeholder="Number"
                            placeholderTextColor="#747474"
                            keyboardType="numeric"
                        />
                        <DropDownPicker
                            open={open}
                            value={selectedUnit}
                            items={items}
                            setOpen={setOpen}
                            setValue={setSelectedUnit}
                            setItems={setItems}
                            style={styles.inputUnit}
                            labelStyle={styles.inputText}
                            textStyle={styles.inputText}
                            placeholder="Unit"
                            placeholderStyle={styles.inputText}
                            showArrowIcon={false}
                            dropDownContainerStyle={{
                                width: 110,
                                zIndex: 999999,
                                borderWidth: 2,
                                borderColor: "#9D9D9D",
                            }}
                        />
                    </View>
                    <PrimaryButton label="next" onPress={() => navigation.navigate(ONBOARDING_STACK.household, {
                        name: name,
                        distance: num,
                        unit: selectedUnit
                    })} />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F6FFF1',
        justifyContent: 'center',
    },
    graphic: {
        width: 258,
        height: 258,
        alignSelf: 'center',
        marginBottom: 25,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        gap: -24,
        marginBottom: 40,
        marginLeft: 22 // fix this to align center lol
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
        width: 120
    },
    inputNum: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        padding: 18,
        backgroundColor: "#FFF",
        color: "#747474",
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: 120,
        textAlign: "right"
    },
    inputUnit: {
        height: 56,
        margin: 12,
        borderWidth: 2,
        borderColor: "#9D9D9D",
        padding: 18,
        backgroundColor: "#FFF",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: 85,
    },
    inputText: {
        color: "#747474",
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
        textAlign: "center"
    }
});
