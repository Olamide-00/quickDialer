import { StyleSheet, View, Text } from "react-native";
import { Ussd } from "../components/ussd";
import { AirtelData } from "../Data/airtelData";





export default function Airtel() {
    return(
        <View style={styles.root}>
            <Ussd data={AirtelData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})