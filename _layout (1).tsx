import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertProvider } from '@/template';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <AlertProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="tool" 
            options={{ 
              headerShown: true,
              headerTitle: 'AI Tool',
              presentation: 'modal',
            }} 
          />
        </Stack>
      </SafeAreaProvider>
    </AlertProvider>
  );
}
