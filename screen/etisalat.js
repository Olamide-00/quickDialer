import { StyleSheet, View, Text } from "react-native";
import { Ussd } from "../components/ussd";
import { EtisalatData } from "../Data/etisalatData";




export default function Etisalat() {
    return(
        <View style={styles.root}>
            <Ussd data={EtisalatData} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})