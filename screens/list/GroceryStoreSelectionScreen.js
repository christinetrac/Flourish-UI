import React from "react";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { BoldText } from "../../components/CustomText";
import { BackButton } from "../../components/Buttons";
import { GroceryStoreSelect } from "../../components/list/GroceryStoreSelect";
import { LIST_STACK } from "../../utils/constants";

export const GroceryStoreSelectionScreen = ({ navigation, route }) => {
    const results = route?.params?.results;
    const lat = route?.params?.lat;
    const lng = route?.params?.lng

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#F6FFF1'}}>
        <View style={styles.container}>
            <BackButton onPress={() => navigation.pop()} />
            <BoldText style={{ fontSize: 40, alignSelf: 'flex-start', paddingLeft: 40 }}>Optimize your groceries</BoldText>
            <Image source={require('../../assets/graphics/optimize.png')} style={styles.graphic} />
                {Object.entries(results).map(([key,value]) => (
                    <GroceryStoreSelect
                        name={key}
                        key={key}
                        details={value}
                        userLat={lat}
                        userLng={lng}
                        onPress={() => navigation.navigate(
                            LIST_STACK.storeConfirmation,
                            {
                                name:key,
                                details:value,
                                userLat:lat,
                                userLng:lng
                            }
                        )}
                    />
                ))}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        paddingTop: 90,
        paddingBottom: 40,
        position: 'relative',
        alignItems: 'center',
    },
    graphic: {
        width: 260,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 16
    },
});

