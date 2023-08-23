import { FlatList, StyleSheet, Text, TouchableOpacity, View,Platform, Linking} from "react-native";





export function Ussd({ data, styling }) {
    const clickHandler = (item) => {
        if(Platform.OS === "ios") {
            Linking.openURL(`telprompt:${item.code}`)
        }
    }
    return (
        <View style={styles.root}>
            <FlatList 
             data={data}
             styling={styling}
             showsVerticalScrollIndicator={false} 
             renderItem={({ item }) => (
                 <TouchableOpacity style={styles.container} onPress={() => clickHandler(item)} >
                     <Text style={styles.name}> {item.name}</Text>
                 </TouchableOpacity>
             )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: "8%"
    },
    container: {
        marginHorizontal: "2%",
        paddingVertical: "6%",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor:  "black",
    },
    name: {
        fontSize: 20,
        fontWeight: "800",
        color: "#fff"
    }
})