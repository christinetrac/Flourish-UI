import { StyleSheet, View } from 'react-native';
import { RegularText } from "../CustomText";

export const GroceryListItem = ({item}) => {
    return (
        <View style={styles.container}>
            <RegularText style={{ fontSize: 40, paddingRight: 18 }}>{item.Quantity}</RegularText>
            <View>
                <RegularText style={{ fontSize: 20, paddingBottom:6, width: 230 }}>{item.Product.Store === "Voila" ? "Sobeys": item.Product.Store} {item.Product.ProductName}</RegularText>
                <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>${item.Product.Price} each</RegularText>
            </View>
        </View>
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
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    }
});
