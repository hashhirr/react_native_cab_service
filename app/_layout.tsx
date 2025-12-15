import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { colors } from "./theme";

export default function RootLayout() {
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
        drawerLabelStyle: { fontWeight: "700" },
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
