import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAppLoading } from "@/hooks/useAppLoading";
import Preloader from "@/components/Preloader";

export default function RootLayout() {
  const isLoading = useAppLoading();

  if (isLoading) {
    return <Preloader />;
  }

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
