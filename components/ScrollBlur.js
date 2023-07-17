import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export const ScrollBlur = ({children}) => {
    return (
        <MaskedView
            style={{ flex: 1 }}
            maskElement={
                <LinearGradient
                    style={{ flex: 1 }}
                    colors={['#FFFFFF00', '#FFFFFF', '#FFFFFF', '#FFFFFF00']}
                    locations={[0, 0.05, 0.95, 1]}
                    pointerEvents={'none'}
                />
            }
        >
            {children}
        </MaskedView>
    )
}
