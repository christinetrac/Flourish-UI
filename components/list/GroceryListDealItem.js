import { StyleSheet, View } from 'react-native';
import {BoldText, RegularText} from "../CustomText";

export const GroceryListDealItem = ({item}) => {
    return (
        <View style={styles.container}>
            <RegularText style={{ fontSize: 40, paddingRight: 18 }}>{item.Quantity}</RegularText>
            <View>
                <BoldText style={{ fontSize: 20, color: '#445601' }}>{item.UserQuery}</BoldText>
                {item.LowestPrice === "PricePerUnit" ? (
                    <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>
                        lowest price per unit
                    </RegularText>
                ) : (
                    <RegularText style={{ fontSize: 20, color: '#6A6A6A' }}>
                        lowest item price
                    </RegularText>
                )}
            </View>
        </View>
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
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    }
});
