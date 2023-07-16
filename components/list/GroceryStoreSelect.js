import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RegularText } from "../CustomText";

export const GroceryStoreSelect = ({store}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log("hi")}>
            <View>
                <RegularText style={{ fontSize: 20, paddingBottom: 4 }}>{store.name}</RegularText>
                <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>Total: ${store.total}</RegularText>
            </View>
            <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>{store.distance}</RegularText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 310,
        height: 88,
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
        padding: 20,
        alignItems: 'center',
        justifyContent: "space-between"
    }
});
