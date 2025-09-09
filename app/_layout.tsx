import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAppLoading } from "@/hooks/useAppLoading";
import Preloader from "@/components/Preloader"
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
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
