import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MTN from "../screen/mtn";
import GLO from "../screen/glo";



const Tab = createBottomTabNavigator();


export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='MTN' component={MTN} options={{
                    headerStyle: {
                        backgroundColor: "#ffbf00",
                        height: "15%",
                        
                    },
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "900",
                        fontSize: 40,
                        position: "absolute",
                        left: "50%",
                        top: "50%"
                    },
                    headerTintColor: "#ffbf00",
                }} />
                <Tab.Screen name='GLO' component={GLO} />
            </Tab.Navigator>    
        </NavigationContainer>
    )
}