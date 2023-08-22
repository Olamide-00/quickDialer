import { StyleSheet, View, Text, FlatList, } from "react-native";
import { Ussd } from "../components/ussd";
import { MtnData } from "../Data/mtnData";



export default function MTN({data}) {

    return(
        <View style={styles.root}>
          <Ussd data={MtnData}/>
        </View>
    ) 
}



const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})