import { StyleSheet, View, Text } from "react-native";
import { Ussd } from "../components/ussd";
import { AirtelData } from "../Data/airtelData";





export default function Airtel() {
    return(
        <View>
            <Ussd data={AirtelData}/>
        </View>
    )
}