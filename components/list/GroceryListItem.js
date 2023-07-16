import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RegularText } from "../CustomText";

export const GroceryListItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log("hi")}>
            <RegularText style={{ fontSize: 40, paddingRight: 18 }}>{item.quantity}</RegularText>
            <View>
                <RegularText style={{ fontSize: 20 }}>{item.name}</RegularText>
                <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>{item.description}</RegularText>
            </View>
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
        alignItems: 'center'
    }
});
