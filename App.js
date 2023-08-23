import {StyleSheet, View, Text } from "react-native";
import Navigation from "./navigation/Navigation";





export default function App(){
  return(
    <View style={styles.root}>
      <Navigation/>
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})