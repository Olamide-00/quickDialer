import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MTN from "../screen/mtn";
import GLO from "../screen/glo";
import Etisalat from "../screen/etisalat";
import Airtel from "../screen/airtel";
import { Image } from "react-native";


const Tab = createBottomTabNavigator();


export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerTitleStyle:  {
                    fontSize: 30,
                    fontWeight: "800"
                }
            }}>
                <Tab.Screen name='MTN' component={MTN} options={{
                    tabBarActiveTintColor: "#ffbf00",
                    headerStyle: {
                        backgroundColor: "#ffbf00",
                    },
                    tabBarIcon: () => (
                        <Image source={require('../assets/mtn.png')}  style={{width: 40, height: 40}}/>
                    )
                }} />
                <Tab.Screen name='GLO' component={GLO} options={{
                    tabBarActiveTintColor: "#00b000",
                    headerStyle: {
                        backgroundColor: "#00b000",
                    },
                    tabBarIcon: () => (
                        <Image source={require('../assets/glo.png')} style={{width: 40, height: 40}} />
                    )
                }} />
                <Tab.Screen name="Airtel" component={Airtel} options={{
                    tabBarActiveTintColor: "#ff0000",
                    headerStyle: {
                        backgroundColor: "#ff0000",
                    },
                    tabBarIcon: () => (
                        <Image source={require('../assets/airtel.png')}  style={{width: 40, height: 40}}/>
                    )
                }} />
                <Tab.Screen name="9mobile" component={Etisalat} options={{
                    tabBarActiveTintColor: "#82aa40",
                    headerStyle: {
                        backgroundColor: "#82aa40"
                    },
                    tabBarIcon: () => (
                        <Image source={require('../assets/etisalat.png')}  style={{width: 40, height: 40}}/>
                    )
                }} />
            </Tab.Navigator>    
        </NavigationContainer>
    )
}