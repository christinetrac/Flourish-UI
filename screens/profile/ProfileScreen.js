import {StyleSheet, Image, SafeAreaView, View, Text} from 'react-native';
import {PrimaryButton} from "../../components/Buttons";
import React from "react";
import {BoldText, RegularText} from "../../components/CustomText";

export const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require('../../assets/images/profile.png')} style={styles.profile} />
                <BoldText style={{ fontSize: 40, paddingTop:16 }} >John Doe</BoldText>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputLabel}>
                        <RegularText style={{ fontSize: 20 }}>
                            Household Size
                        </RegularText>
                    </View>
                    <View style={styles.input}>
                        <RegularText style={{ fontSize: 20, color: "#747474", justifyContent: "center" }}>
                            2
                        </RegularText>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputLabel}>
                        <RegularText style={{ fontSize: 20 }}>
                            Distance
                        </RegularText>
                    </View>
                    <View style={styles.input}>
                        <RegularText style={{ fontSize: 20, color: "#747474", justifyContent: "center" }}>
                            3 km
                        </RegularText>
                    </View>
                </View>
            </View>
            <PrimaryButton label="edit profile" onPress={() => undefined} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    profile: {
        width: 130,
        height: 130,
        marginTop: 40,
        alignSelf: "center"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: -24,
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
        width: 185
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
        width: 120,
        zIndex: 99,
        justifyContent: 'center'
    },
});
