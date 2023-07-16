import { StyleSheet, TouchableOpacity } from 'react-native';
import { BoldText } from "./CustomText";

export const PrimaryButton = ({label, onPress}) => {
    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <BoldText style={styles.text}>{label}</BoldText>
        </TouchableOpacity>
    );
}

export const SecondaryButton = ({label, onPress}) => {
    return (
        <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
            <BoldText style={styles.text}>{label}</BoldText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    primaryButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 312,
        height: 52,
        backgroundColor: '#DEFF63',
        borderRadius: 10,
        shadowColor: '#445601',
        shadowOffset: {
            width: 6,
            height: 7
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        marginBottom: 20
    },
    secondaryButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 312,
        height: 52,
        backgroundColor: '#BCC59C',
        borderRadius: 10,
        shadowColor: '#445601',
        shadowOffset: {
            width: 6,
            height: 7
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        textTransform: 'uppercase'
    }
});
