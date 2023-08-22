import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";





export function Ussd({ data }) {
    return (
       <FlatList 
        data={data}
        renderItem={({ item }) => (
            <TouchableOpacity>
                <Text> {item.name}</Text>
            </TouchableOpacity>
        )}
        

       />
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})