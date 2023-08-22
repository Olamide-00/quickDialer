import { StyleSheet, View, Text } from "react-native";
import { Ussd } from "../components/ussd";
import { EtisalatData } from "../Data/etisalatData";




export default function Etisalat() {
    return(
        <View>
            <Ussd data={EtisalatData} />
        </View>
    )
}