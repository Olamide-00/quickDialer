import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}


const styles= StyleSheet.create({
  root: {
    flex: 1
  }
})