import { StyleSheet, View, Text } from "react-native";
import { Ussd } from "../components/ussd";
import { GloData } from "../Data/gloData";

export default function GLO() {
    return(
        <View style={styles.root}>
            <Ussd data={GloData} />
        </View>
    )
}


const styles= StyleSheet.create({
    root: {
        flex: 1
    }
})