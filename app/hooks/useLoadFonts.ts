import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";

const fontMap = {
  "RedHatDisplay-Regular": require("../../assets/fonts/RedHatDisplay-Regular.ttf"),
  "RedHatDisplay-Medium": require("../../assets/fonts/RedHatDisplay-Medium.ttf"),
  "RedHatDisplay-SemiBold": require("../../assets/fonts/RedHatDisplay-SemiBold.ttf"),
  "RedHatDisplay-Bold": require("../../assets/fonts/RedHatDisplay-Bold.ttf"),
};

export function useLoadFonts() {
  const [fontsLoaded, fontError] = useFonts(fontMap);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch(() => {
      // ignoring splash errors keeps font loading resilient
    });
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => undefined);
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (fontError) {
      console.error(fontError);
    }
  }, [fontError]);

  return { fontsLoaded, fontError };
}
