import { Text } from 'react-native';

export const RegularText = props => {
    return (
        <Text style={{ fontFamily: 'Inter_400Regular', ...props.style }}>
            {props.children}
        </Text>
    )
}
export const MediumText = props => {
    return (
        <Text style={{ fontFamily: 'Inter_500Medium', ...props.style }}>
            {props.children}
        </Text>
    )
}
export const RegularClippedText = props => {
    return (
        <Text style={{ fontFamily: 'Inter_400Regular', ...props.style }} numberOfLines={3}>
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
