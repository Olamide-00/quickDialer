import { StyleSheet, View, Text } from "react-native";
import { Ussd } from "../components/ussd";
import { GloData } from "../Data/gloData";

export default function GLO() {
    return(
        <View>
            <Ussd data={GloData} />
        </View>
    )
}