import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlassCard } from "./components/GlassCard";
import { MenuToggle } from "./components/MenuToggle";
import { Scaffold } from "./components/Scaffold";
import { colors, font, radii, spacing } from "./theme";

const stops = [
  { title: "Pickup", place: "Surry Hills Studio", time: "8:05 PM" },
  { title: "Drop-off", place: "Barangaroo Wharf", time: "8:32 PM" },
];

const options = [
  { title: "Studio Pool", eta: "3 min", price: "A$21.40", seats: 2 },
  { title: "Prime", eta: "4 min", price: "A$27.80", seats: 3 },
  { title: "Executive", eta: "6 min", price: "A$42.00", seats: 3 },
];

export default function RideScreen() {
  return (
    <Scaffold
      title="Curate a ride"
      subtitle={null}
      leftSlot={<MenuToggle />}
      rightSlot={
        <View style={styles.pill}>
          <Ionicons name="moon" size={14} color={colors.highlight} />
          <Text style={styles.pillText}>Night shift</Text>
        </View>
      }
    >
      <GlassCard style={{ gap: spacing(1) }} borderColor={colors.accent}>
        <Text style={styles.sectionTitle}>Route layout</Text>
        <View style={{ gap: spacing(1) }}>
          {stops.map((stop, index) => (
            <View key={stop.title} style={styles.stopRow}>
              <View style={styles.stopMarker}>
                <Ionicons
                  name={index === 0 ? "radio-button-on" : "flag"}
                  size={20}
                  color={index === 0 ? colors.accent : colors.highlight}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.stopTitle}>{stop.title}</Text>
                <Text style={styles.stopPlace}>{stop.place}</Text>
              </View>
              <Text style={styles.stopTime}>{stop.time}</Text>
            </View>
          ))}
        </View>
        <View style={styles.timeline}>
          <View style={styles.timelineFill} />
        </View>
        <View style={styles.row}>
          <Text style={styles.muted}>Distance • 12.6 km</Text>
          <Text style={styles.muted}>Air quality lane unlocked</Text>
        </View>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Vehicles in reach</Text>
          <Ionicons name="car" size={22} color={colors.accent} />
        </View>
        <View style={{ gap: spacing(1) }}>
          {options.map((option) => (
            <Pressable key={option.title} style={styles.option}>
              <View style={styles.optionIcon}>
                <Ionicons name="flash" size={16} color={colors.background} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.muted}>
                  {option.seats} seats • smooth suspension • silent cabin
                </Text>
              </View>
              <View style={{ alignItems: "flex-end", gap: 4 }}>
                <Text style={styles.optionPrice}>{option.price}</Text>
                <Text style={[styles.muted, { color: colors.accentSoft }]}>
                  {option.eta} away
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </GlassCard>

      <GlassCard style={{ gap: spacing(1.2) }}>
        <Text style={styles.sectionTitle}>Schedule window</Text>
        <View style={styles.scheduleRow}>
          <View>
            <Text style={styles.scheduleLabel}>Pickup window</Text>
            <Text style={styles.scheduleValue}>8:00 - 8:15 PM</Text>
          </View>
          <View>
            <Text style={styles.scheduleLabel}>Carbon offset</Text>
            <Text style={styles.scheduleValue}>Enabled</Text>
          </View>
        </View>
        <Pressable style={styles.primary}>
          <Text style={styles.primaryText}>Lock this itinerary</Text>
          <Ionicons name="arrow-forward" size={18} color={colors.background} />
        </Pressable>
      </GlassCard>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(1.25),
    paddingVertical: spacing(0.6),
    borderRadius: radii.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
  },
  pillText: {
    ...font("semibold"),
    color: colors.highlight,
  },
  sectionTitle: {
    ...font("bold"),
    color: colors.text,
    fontSize: 18,
  },
  stopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
  },
  stopMarker: {
    width: 34,
    alignItems: "center",
  },
  stopTitle: {
    ...font("bold"),
    color: colors.text,
    fontSize: 15,
  },
  stopPlace: {
    ...font("regular"),
    color: colors.muted,
    fontSize: 13,
  },
  stopTime: {
    ...font("semibold"),
    color: colors.highlight,
  },
  timeline: {
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.border,
    overflow: "hidden",
  },
  timelineFill: {
    width: "72%",
    height: "100%",
    backgroundColor: colors.accent,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  muted: {
    ...font("regular"),
    color: colors.muted,
    fontSize: 13,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    padding: spacing(1.1),
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.overlay,
  },
  optionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  optionTitle: {
    ...font("bold"),
    color: colors.text,
    fontSize: 15,
  },
  optionPrice: {
    ...font("bold"),
    color: colors.text,
    fontSize: 16,
  },
  scheduleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scheduleLabel: {
    ...font("regular"),
    color: colors.muted,
    fontSize: 13,
  },
  scheduleValue: {
    ...font("bold"),
    color: colors.text,
    fontSize: 16,
  },
  primary: {
    backgroundColor: colors.accent,
    borderRadius: radii.xl,
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(1.8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  primaryText: {
    ...font("semibold"),
    color: colors.background,
    fontSize: 15,
  },
});
