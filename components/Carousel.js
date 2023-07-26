import {StyleSheet, TouchableOpacity, ScrollView, View, Image, ImageBackground} from 'react-native';
import { BoldText } from "./CustomText";

export const Carousel = ({items, title}) => {
    return (
        <View style={styles.container}>
            <BoldText style={{ paddingBottom: 12, fontSize: 32, textTransform: 'capitalize' }}>{title}</BoldText>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {items.map(item => (
                    <TouchableOpacity key={item} style={styles.button} onPress={() => console.log("hi")}>
                            <View style={styles.card}>
                                <ImageBackground source={item} style={styles.image}>
                                </ImageBackground>
                            </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40
    },
    button: {
        borderRadius: 14,
        width: 176,
        height: 129,
        shadowColor: '#DCDCDC',
        shadowOffset: {
            width: 12,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        marginRight: 25,
        overflow: 'hidden',
    },
    card: {
        width: 176,
        height: 116,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        zIndex: 2,
    },
    image: {
        flex: 1,
        height: 96,
        width: 'auto',
        justifyContent: "center"
    },
})
