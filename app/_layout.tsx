import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Onboarding from '@/components/customs/Onboarding';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

const ASYNC_STORAGE_ONBOARDING_KEY = '@viewedOnboarding';

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false); // Control navigation timing
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem(ASYNC_STORAGE_ONBOARDING_KEY);
        setViewedOnboarding(value !== null);
      } catch (err) {
        console.error('Error @checkOnboarding:', err);
      } finally {
        setLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  useEffect(() => {
    if (fontsLoaded && !loading) {
      SplashScreen.hideAsync().then(() => setIsInitialized(true));
    }
  }, [fontsLoaded, loading]);

  const handleCompleteOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_ONBOARDING_KEY, 'true');
      setViewedOnboarding(true);
      if (isInitialized) {
        router.push('/login'); // Navigate only after initialization
      }
    } catch (err) {
      console.error('Error completing onboarding:', err);
    }
  };

  if (loading || !fontsLoaded) {
    return <Loading />;
  }

  if (!viewedOnboarding) {
    return <Onboarding onComplete={handleCompleteOnboarding} />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar backgroundColor="#A9C0FF" style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
