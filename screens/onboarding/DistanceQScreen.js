import { StyleSheet, SafeAreaView } from 'react-native';
import { RegularText } from "../../components/CustomText";

export const DistanceQScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <RegularText style={{ fontSize: 40 }} >
                distance q
            </RegularText>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
