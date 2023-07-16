import { StyleSheet, View } from 'react-native';
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <BottomTabNavigator style={styles.tab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF1',
  },
  tab: {
    zIndex: -1,
  }
});
