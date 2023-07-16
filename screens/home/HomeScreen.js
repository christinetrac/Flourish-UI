import { StyleSheet, SafeAreaView } from 'react-native';
import { RegularText } from "../../components/CustomText";

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <RegularText style={{ fontSize: 40 }} >
                Welcome back, Name
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
