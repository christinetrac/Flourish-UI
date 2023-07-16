import { StyleSheet, Text, SafeAreaView } from 'react-native';

export const SearchScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>SEARCH SCREEN</Text>
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
