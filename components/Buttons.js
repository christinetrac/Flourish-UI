import { StyleSheet, TouchableOpacity } from 'react-native';
import { BoldText } from "./CustomText";
import BackIcon from "../assets/icons/back.svg";

export const PrimaryButton = ({label, onPress}) => {
    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <BoldText style={styles.text}>{label}</BoldText>
        </TouchableOpacity>
    );
}
export const PrimaryButtonXS = ({label, onPress}) => {
    return (
        <TouchableOpacity style={styles.primaryButtonXS} onPress={onPress}>
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

export const BackButton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <BackIcon color='#545454' width={10} height={20} />
            <BoldText style={styles.backText}>back</BoldText>
        </TouchableOpacity>
    )
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
        marginBottom: 20,
        zIndex: -1
    },
    primaryButtonXS: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 269,
        height: 45,
        backgroundColor: '#DEFF63',
        borderRadius: 10,
        shadowColor: '#445601',
        shadowOffset: {
            width: 6,
            height: 7
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        marginBottom: 20,
        zIndex: -1
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
        marginBottom: 20,
        zIndex: -1
    },
    text: {
        fontSize: 20,
        textTransform: 'uppercase'
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 45,
        left: 25,
        zIndex: 999
    },
    backText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#545454',
        paddingLeft: 10
    }
});
