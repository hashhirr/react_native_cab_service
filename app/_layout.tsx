import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useLoadFonts } from "./hooks/useLoadFonts";
import { colors, font } from "./theme";

export default function RootLayout() {
  const { fontsLoaded, fontError } = useLoadFonts();

  if (fontError) {
    throw fontError;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.surface,
          borderRightColor: colors.border,
        },
        drawerActiveTintColor: colors.accent,
        drawerInactiveTintColor: colors.muted,
        drawerLabelStyle: {
          ...font("semibold"),
        },
        sceneContainerStyle: { backgroundColor: colors.background },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Live Map",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ride"
        options={{
          title: "Ride Planner",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          title: "Coverage",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="navigate" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="driver"
        options={{
          title: "Live Matching",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="sparkles" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="payments"
        options={{
          title: "Wallet",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="card" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="history"
        options={{
          title: "History & Receipts",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="support"
        options={{
          title: "Support",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}
