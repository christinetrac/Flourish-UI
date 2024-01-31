import {StyleSheet, SafeAreaView, Image, TextInput, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {RegularText} from "../../components/CustomText";
import {PrimaryButton} from "../../components/Buttons";
import {ONBOARDING_STACK} from "../../utils/constants";
import React, {useState} from "react";

export const NameQScreen = ({ navigation }) => {
    const [name, onChangeName] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} accessible={false}>
                <View>
                    <Image source={require('../../assets/graphics/house.png')} style={styles.graphic} />
                    <RegularText style={{ fontSize: 32, alignSelf: 'flex-start', paddingLeft: 40, paddingBottom: 20, width: 330 }}>
                        Some quick questions; what’s your name?
                    </RegularText>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputLabel}>
                            <RegularText style={{ fontSize: 20 }}>
                                Name
                            </RegularText>
                        </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder="John Doe"
                            placeholderTextColor="#747474"
                        />
                    </View>
                    <PrimaryButton label="next" onPress={() => navigation.navigate(ONBOARDING_STACK.distance, {name: name})} />
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
        marginBottom: 40,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: -24,
        marginBottom: 40
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
        width: 85
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
        width: 220,
        zIndex: 99
    },
});
