import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View } from "react-native-animatable";

export default function ScreenLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
                tabBarStyle: {
                    marginBottom: 5,
                    borderRadius: 50,
                    backgroundColor: "rgb(209 213 219)",
                    marginHorizontal: 40,
                }
            })}
        >
            <Tabs.Screen name="HomeScreen" />
        </Tabs>
    )
}

const menuIcons = (route: any, focused: any) => {
    let icon;
    if (route.name == 'HomeScreen') {
        icon = focused ? <AntDesign name="home" size={24} color="black" />
            : <Entypo name="home" size={24} color="black" />
    }
    if (route.name == 'CoffeeDetailsScreen') {
        icon = focused ? <AntDesign name="infocirlceo" size={24} color="black" />
            : <AntDesign name="infocirlce" size={24} color="black" />
    }
    let bottomClass = focused ? "bg-white" : "";
    return (
        <View className={`flex items-center rounded-full p-2 shadow justify-center ${bottomClass}`}>
            {icon}
        </View>
    )

}