import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  type MapStyleElement
} from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MenuToggle } from "./components/MenuToggle";
import { colors, font, radii, shadow, spacing } from "./theme";

const categories = [
  { label: "Mini", icon: "car-sport" as const },
  { label: "Moto", icon: "bicycle" as const, active: true },
  { label: "Ride A/C", icon: "snow" as const },
  { label: "Premium", icon: "car" as const },
  { label: "City to city", icon: "airplane" as const },
];

const suggestions = [
  {
    title: "Circular Quay Station",
    subtitle: "Alfred St, Sydney NSW",
  },
  {
    title: "Bondi Beach",
    subtitle: "Queen Elizabeth Dr, Bondi NSW",
  },
  {
    title: "Surry Hills",
    subtitle: "Crown St, Surry Hills NSW",
  },
];

export default function Index() {
  const isWeb = Platform.OS === "web";
  const useGoogleMaps = Platform.OS === "android";
  const mapRegion = {
    latitude: -33.8688,
    longitude: 151.2093,
    latitudeDelta: 0.18,
    longitudeDelta: 0.18,
  };
  const mapHeight = Math.max(Dimensions.get("window").height * 0.64, 520);
const {top, bottom} = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.mapWrapper, { height: mapHeight }]}>
        {isWeb ? (
          <View style={styles.webMapFallback}>
            <View style={styles.webLabel}>
              <Ionicons name="alert-circle" size={16} color={colors.accent} />
              <Text style={styles.webLabelText}>Full map preview on device/simulator</Text>
            </View>
          </View>
        ) : (
          <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={mapRegion}
            customMapStyle={useGoogleMaps ? lightMapStyle : undefined}
            provider={useGoogleMaps ? PROVIDER_GOOGLE : undefined}
            mapType={useGoogleMaps ? "standard" : "mutedStandard"}
            userInterfaceStyle="light"
            showsUserLocation
            showsCompass={false}
            showsBuildings={false}
            showsTraffic={false}
            toolbarEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              coordinate={{ latitude: -33.8688, longitude: 151.2093 }}
              title="Pickup"
              description="Sydney CBD"
              pinColor={colors.accent}
            />
        
          </MapView>
        )}

        <View style={styles.topRow}>
          <MenuToggle />
          <View style={styles.statusPill}>
            <Ionicons name="radio" size={14} color={colors.surface} />
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>

  
      </View>

      <View style={[styles.bottomSheet,{
        bottom:bottom
      }]}>
        <View style={styles.handle} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {categories.map((cat) => (
            <Pressable
              key={cat.label}
              style={[
                styles.categoryChip,
                cat.active && {
                  backgroundColor: colors.overlay,
                  borderColor: colors.accent,
                  shadowOpacity: 0.12,
                  shadowRadius: 10,
                },
              ]}
            >
              <Ionicons name={cat.icon} size={18} color={colors.text} />
              <Text style={styles.categoryText}>{cat.label}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable style={styles.searchBar}>
          <Ionicons name="search" size={18} color={colors.text} />
          <Text style={styles.searchText}>Where to and how soon?</Text>
        </Pressable>

        {suggestions.map((item) => (
          <Pressable key={item.title} style={styles.suggestionRow}>
            <Ionicons name="time" size={18} color={colors.muted} />
            <View style={{ flex: 1 }}>
              <Text style={styles.suggestionTitle}>{item.title}</Text>
              <Text style={styles.suggestionSubtitle}>{item.subtitle}</Text>
            </View>
          </Pressable>
        ))}

        <Link href="/ride" asChild>
          <Pressable style={styles.primary}>
            <Text style={styles.primaryText}>Confirm & continue</Text>
            <Ionicons name="arrow-forward" size={18} color={colors.surface} />
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  mapWrapper: {
    position: "relative",
    width: "100%",
  },
  webMapFallback: {
    flex: 1,
    backgroundColor: "#f0eae0",
    alignItems: "center",
    justifyContent: "center",
  },
  webLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
    backgroundColor: colors.surface,
    paddingHorizontal: spacing(1),
    paddingVertical: spacing(0.75),
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  webLabelText: {
    ...font("semibold"),
    color: colors.text,
  },
  topRow: {
    position: "absolute",
    top: spacing(1.5),
    left: spacing(1.5),
    right: spacing(1.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
    backgroundColor: colors.accent,
    paddingHorizontal: spacing(1.1),
    paddingVertical: spacing(0.7),
    borderRadius: radii.md,
   
    // ...shadow,
  },
  statusText: {
    ...font("bold"),
    color: colors.surface,
  },
  locateButton: {
    position: "absolute",
    right: spacing(1.5),
    bottom: spacing(18),
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow,
  },
  pickupCard: {
    position: "absolute",
    top: "42%",
    alignSelf: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: spacing(1.5),
    paddingVertical: spacing(1.1),
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    ...shadow,
  },
  pickupLabel: {
    ...font("semibold"),
    color: colors.muted,
    fontSize: 13,
  },
  pickupValue: {
    ...font("bold"),
    color: colors.text,
    fontSize: 18,
  },
  centerPin: {
    position: "absolute",
    left: "50%",
    top: "46%",
    transform: [{ translateX: -20 }],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.accent,
    ...shadow,
  },
  centerDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.accent,
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: colors.surface,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    paddingHorizontal: spacing(2.5),
    paddingTop: spacing(1),
    bottom: spacing(2),
    marginTop: -spacing(3),
    // ...shadow,
  },
  handle: {
    alignSelf: "center",
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginBottom: spacing(1),
  },
  categoryRow: {
    gap: spacing(1),
    paddingBottom: spacing(1),
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
    paddingHorizontal: spacing(1.25),
    paddingVertical: spacing(0.75),
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  categoryText: {
    ...font("semibold"),
    color: colors.text,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(1.8),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing(1),
  },
  searchText: {
    ...font("semibold"),
    color: colors.text,
    fontSize: 16,
  },
  suggestionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingVertical: spacing(0.75),
  },
  suggestionTitle: {
    ...font("medium"),
    color: colors.text,
    fontSize: 16,
  },
  suggestionSubtitle: {
    ...font("regular"),
    color: colors.muted,
    fontSize: 13,
  },
  primary: {
    marginTop: spacing(1.5),
    backgroundColor: colors.accent,
    borderRadius: radii.xl,
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(1.8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom:5,
  },
  primaryText: {
    ...font("bold"),
    color: colors.surface,
    fontSize: 16,
  },
});

const lightMapStyle: MapStyleElement[] = [
  { elementType: "geometry", stylers: [{ color: "#fdfbf7" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#111111" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#fdfbf7" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#f9f4eb" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#fbf7f0" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#000000" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#e6e0d7" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#ffefe4" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#e0d5c6" }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#111111" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#e7f0ff" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
];
