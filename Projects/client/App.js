import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HelloWrold from './components/HelloWrold';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWrold />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
