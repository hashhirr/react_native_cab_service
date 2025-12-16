import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { GlassCard } from "./components/GlassCard";
import { MenuToggle } from "./components/MenuToggle";
import { Scaffold } from "./components/Scaffold";
import { colors, font, radii, spacing } from "./theme";

const pickupSpots = [
  { title: "Creative Pier", eta: "2 min", tone: colors.accent },
  { title: "Financial Row", eta: "3 min", tone: colors.highlight },
  { title: "Night Market", eta: "5 min", tone: colors.accentSoft },
  { title: "Skybridge", eta: "7 min", tone: colors.accent },
];

export default function ExploreScreen() {
  return (
    <Scaffold
      title="City overlay"
      subtitle={null}
      leftSlot={<MenuToggle />}
      rightSlot={
        <View style={styles.livePill}>
          <Ionicons name="locate" size={16} color={colors.surface} />
          <Text style={styles.liveText}>Live map</Text>
        </View>
      }
    >
      <GlassCard style={{ gap: spacing(1.25) }} borderColor={colors.accentSoft}>
        <View style={styles.row}>
          <View>
            <Text style={styles.sectionTitle}>Tonight's coverage</Text>
            <Text style={styles.muted}>Dense around terminals & waterfront.</Text>
          </View>
          <Ionicons name="planet" size={26} color={colors.accent} />
        </View>
        <View style={styles.map}>
          <View style={[styles.node, { top: 30, left: 40 }]} />
          <View style={[styles.node, { top: 60, right: 60 }]} />
          <View style={[styles.node, { bottom: 35, left: 60 }]} />
          <View style={[styles.node, { bottom: 20, right: 30 }]} />
          <View style={styles.pathVertical} />
          <View style={styles.pathHorizontal} />
          <View style={styles.vehicle}>
            <Ionicons name="car-sport" size={18} color={colors.surface} />
          </View>
        </View>
        <View style={styles.statRow}>
          {[
            { label: "Heat index", value: "87%" },
            { label: "Surge risk", value: "Low" },
            { label: "Drop-offs", value: "Prime" },
          ].map((item) => (
            <View key={item.label} style={styles.statBlock}>
              <Text style={styles.muted}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Pickup halos</Text>
          <View style={styles.countPill}>
            <Text style={styles.countText}>{pickupSpots.length} curated</Text>
          </View>
        </View>
        <View style={{ gap: spacing(1) }}>
          {pickupSpots.map((spot) => (
            <View key={spot.title} style={styles.spotRow}>
              <View style={[styles.spotIcon, { backgroundColor: spot.tone }]}>
                <Ionicons name="radio" size={16} color={colors.surface} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.spotTitle}>{spot.title}</Text>
                <Text style={styles.muted}>Queue balanced • curbside ready</Text>
              </View>
              <Text style={styles.spotEta}>{spot.eta}</Text>
            </View>
          ))}
        </View>
      </GlassCard>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  livePill: {
    backgroundColor: colors.accent,
    borderRadius: radii.md,
    paddingHorizontal: spacing(1.4),
    paddingVertical: spacing(0.75),
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
  },
  liveText: {
    ...font("bold"),
    color: colors.background,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing(1),
  },
  sectionTitle: {
    ...font("bold"),
    color: colors.text,
    fontSize: 18,
  },
  muted: {
    ...font("regular"),
    color: colors.muted,
    fontSize: 14,
    marginTop: 2,
  },
  map: {
    height: 180,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  node: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
    opacity: 0.8,
  },
  vehicle: {
    position: "absolute",
    top: "45%",
    left: "48%",
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  pathVertical: {
    position: "absolute",
    left: "48%",
    top: 16,
    bottom: 16,
    width: 2,
    backgroundColor: colors.border,
  },
  pathHorizontal: {
    position: "absolute",
    top: "52%",
    left: 16,
    right: 16,
    height: 2,
    backgroundColor: colors.border,
  },
  statRow: {
    flexDirection: "row",
    gap: spacing(1),
  },
  statBlock: {
    flex: 1,
    backgroundColor: colors.overlay,
    borderRadius: radii.md,
    padding: spacing(1.25),
    borderWidth: 1,
    borderColor: colors.border,
  },
  value: {
    ...font("semibold"),
    color: colors.text,
    fontSize: 18,
    marginTop: 6,
  },
  countPill: {
    paddingHorizontal: spacing(1.25),
    paddingVertical: spacing(0.5),
    borderRadius: radii.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  countText: {
    ...font("semibold"),
    color: colors.muted,
    letterSpacing: 0.2,
  },
  spotRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingVertical: spacing(0.75),
  },
  spotIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  spotTitle: {
    ...font("bold"),
    color: colors.text,
    fontSize: 15,
    marginBottom: 2,
  },
  spotEta: {
    ...font("bold"),
    color: colors.highlight,
    fontSize: 14,
  },
});
