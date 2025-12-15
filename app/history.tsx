import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { GlassCard } from "./components/GlassCard";
import { MenuToggle } from "./components/MenuToggle";
import { Scaffold } from "./components/Scaffold";
import { colors, radii, spacing } from "./theme";

const trips = [
  { name: "Old Town → Harbor", time: "Tonight, 8:32 PM", fare: "$18.40" },
  { name: "Studio → Terminal B", time: "Yesterday, 10:14 PM", fare: "$22.10" },
  { name: "Hotel → Arts District", time: "Last week", fare: "$12.60" },
];

export default function HistoryScreen() {
  return (
    <Scaffold
      title="Trip log"
      // subtitle="Show clean ride receipts and keep the vibe consistent."
      leftSlot={<MenuToggle />}
      rightSlot={
        <View style={styles.pill}>
          <Ionicons name="download" size={16} color={colors.background} />
          <Text style={styles.pillText}>Export</Text>
        </View>
      }
    >
      <GlassCard style={{ gap: spacing(1) }} borderColor={colors.accentSoft}>
        <Text style={styles.sectionTitle}>Weekly overview</Text>
        <View style={styles.overviewRow}>
          <View>
            <Text style={styles.label}>Trips</Text>
            <Text style={styles.value}>12</Text>
          </View>
          <View>
            <Text style={styles.label}>Ride time</Text>
            <Text style={styles.value}>4h 18m</Text>
          </View>
          <View>
            <Text style={styles.label}>Spend</Text>
            <Text style={styles.value}>$154</Text>
          </View>
        </View>
        <View style={styles.timeline}>
          <View style={styles.timelineFill} />
        </View>
        <Text style={styles.muted}>Consistent evenings with smooth pickups.</Text>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Receipts</Text>
          <Ionicons name="receipt" size={22} color={colors.accent} />
        </View>
        <View style={{ gap: spacing(1) }}>
          {trips.map((trip, index) => (
            <View key={trip.name} style={styles.tripRow}>
              <View style={styles.bulletStack}>
                <View style={styles.bullet} />
                {index !== trips.length - 1 ? <View style={styles.bulletLine} /> : null}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tripName}>{trip.name}</Text>
                <Text style={styles.muted}>{trip.time}</Text>
              </View>
              <Text style={styles.tripFare}>{trip.fare}</Text>
            </View>
          ))}
        </View>
      </GlassCard>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.accent,
    borderRadius: radii.md,
    paddingHorizontal: spacing(1.2),
    paddingVertical: spacing(0.65),
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
  },
  pillText: {
    color: colors.background,
    fontWeight: "800",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },
  overviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: colors.muted,
    fontSize: 13,
  },
  value: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
  },
  timeline: {
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.border,
    overflow: "hidden",
  },
  timelineFill: {
    width: "78%",
    height: "100%",
    backgroundColor: colors.accent,
  },
  muted: {
    color: colors.muted,
    fontSize: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tripRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing(1),
  },
  bulletStack: {
    alignItems: "center",
  },
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
    marginTop: 4,
  },
  bulletLine: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: spacing(0.5),
  },
  tripName: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
  tripFare: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
});
