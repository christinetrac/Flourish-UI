import { StyleSheet, Text, SafeAreaView } from 'react-native';

export const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>PROFILE SCREEN</Text>
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
