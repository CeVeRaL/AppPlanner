import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return <Stack>
    <StatusBar style='light' />
    <Stack.Screen 
      name="(tabs)" 
      options={{
        headerShown: false,
    }} />
    <Stack.Screen name="not-found" options={{}} />
  </Stack>;
}
