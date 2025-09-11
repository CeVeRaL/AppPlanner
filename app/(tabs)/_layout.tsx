import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          headerTitle : "",
          // иконка домик подсвечивает когда активна
          tabBarIcon: ({focused, color}) => ( 
          <Ionicons 
          name={focused ? "home-sharp" : "home-outline"} 
          color={color}
          size={30} />
  )}} />
      <Tabs.Screen  
        name="about" 
        options={{
          headerTitle : "Profile",
          tabBarIcon: ({focused, color}) => ( 
            <Ionicons 
            name={focused ? "information-circle" : "information-circle"} 
            color={color}
            size={30} />
   ) }} />
      <Tabs.Screen  
        name="not-found" 
        options={{
      }} />
    </Tabs>
  )
}
