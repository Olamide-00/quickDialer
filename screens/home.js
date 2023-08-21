import { StyleSheet, View, Text,SafeAreaView } from "react-native";



export default function Home() {
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
            <View style={styles.glo}>
                <Text style={styles.gloText}>GLO</Text>
            </View>
            <View style={styles.mtn}>
                <Text style={styles.mtnText}>MTN</Text>
            </View>
            <View style={styles.airtel}>
                <Text style={styles.airtelText}> AIRTEL</Text>
            </View>
            <View style={styles.mobile}>
                <Text style={styles.mobileText}>9MOBILE</Text>
            </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    glo: {
        backgroundColor: "green",
        paddingHorizontal: 70,
        paddingVertical: 60
    },
    mtn: {
        backgroundColor: "green",
        paddingHorizontal: 70,
        paddingVertical: 60
    },
    mtnText: {},
    airtel: {
        backgroundColor: "green",
        paddingHorizontal: 70,
        paddingVertical: 60
    },
    airtelText: {},
    mobile: {
        backgroundColor: "green",
        paddingHorizontal: 70,
        paddingVertical: 60
    },
    mobileText: {},
    container:{
    
    }
})

