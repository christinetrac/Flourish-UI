import { Text } from 'react-native';

export const RegularText = props => {
    return (
        <Text style={{ fontFamily: 'Inter_400Regular', ...props.style }}>
            {props.children}
        </Text>
    )
}

export const BoldText = props => {
    return (
        <Text style={{ fontFamily: 'Inter_700Bold', ...props.style }}>
            {props.children}
        </Text>
    )
}
