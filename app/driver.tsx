import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { GlassCard } from "./components/GlassCard";
import { MenuToggle } from "./components/MenuToggle";
import { Scaffold } from "./components/Scaffold";
import { colors, radii, spacing } from "./theme";

const drivers = [
  {
    name: "Nova Kim",
    rating: "4.98",
    eta: "2 min",
    car: "Polestar 3 • Midnight",
  },
  {
    name: "Eden Park",
    rating: "4.94",
    eta: "4 min",
    car: "BMW i4 • Graphite",
  },
  {
    name: "Cruz Lake",
    rating: "4.91",
    eta: "5 min",
    car: "Tesla Model Y • Pearl",
  },
];

export default function DriverScreen() {
  return (
    <Scaffold
      title="Live matching"
      subtitle={null}
      leftSlot={<MenuToggle />}
      rightSlot={
        <View style={styles.right}>
          <Ionicons name="sparkles" size={18} color={colors.accent} />
          <Text style={styles.rightText}>Priority on</Text>
        </View>
      }
    >
      <GlassCard style={{ gap: spacing(1.2) }} borderColor={colors.highlight}>
        <Text style={styles.sectionTitle}>Searching within 1.6 km</Text>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.row}>
          {["Signal", "Match", "Confirm"].map((item, index) => (
            <View key={item} style={styles.step}>
              <View
                style={[
                  styles.stepDot,
                  index < 2 && { backgroundColor: colors.accent },
                  index === 0 && { backgroundColor: colors.highlight },
                ]}
              />
              <Text style={styles.stepText}>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.subCopy}>
          Dialing pro-drivers who prefer airport drops and late studio sessions.
        </Text>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Top matches</Text>
          <Ionicons name="people" size={22} color={colors.accent} />
        </View>
        <View style={{ gap: spacing(1) }}>
          {drivers.map((driver) => (
            <View key={driver.name} style={styles.driverRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{driver.name[0]}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.driverName}>{driver.name}</Text>
                <Text style={styles.driverMeta}>{driver.car}</Text>
              </View>
              <View style={{ alignItems: "flex-end", gap: 4 }}>
                <View style={styles.rating}>
                  <Ionicons name="star" size={12} color={colors.background} />
                  <Text style={styles.ratingText}>{driver.rating}</Text>
                </View>
                <Text style={styles.eta}>{driver.eta}</Text>
              </View>
            </View>
          ))}
        </View>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Rider notes</Text>
          <Ionicons name="document-text" size={22} color={colors.accentSoft} />
        </View>
        <View style={styles.note}>
          <Ionicons name="checkmark-circle" size={18} color={colors.accent} />
          <Text style={styles.noteText}>No small talk toggle active</Text>
        </View>
        <View style={styles.note}>
          <Ionicons name="leaf" size={18} color={colors.highlight} />
          <Text style={styles.noteText}>Eco route preference: harbor winds</Text>
        </View>
      </GlassCard>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  right: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(1.25),
    paddingVertical: spacing(0.75),
    borderRadius: radii.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
  },
  rightText: {
    color: colors.text,
    fontWeight: "700",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },
  progressTrack: {
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.border,
  },
  progressFill: {
    width: "68%",
    height: "100%",
    backgroundColor: colors.accent,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  step: {
    alignItems: "center",
    gap: spacing(0.5),
  },
  stepDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  stepText: {
    color: colors.muted,
    fontSize: 12,
  },
  subCopy: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  driverRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingVertical: spacing(0.5),
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: colors.background,
    fontWeight: "800",
    fontSize: 18,
  },
  driverName: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
  driverMeta: {
    color: colors.muted,
    fontSize: 13,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.highlight,
    borderRadius: radii.sm,
    paddingHorizontal: spacing(0.75),
    paddingVertical: spacing(0.35),
  },
  ratingText: {
    color: colors.background,
    fontWeight: "800",
    fontSize: 12,
  },
  eta: {
    color: colors.accentSoft,
    fontWeight: "700",
  },
  note: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingVertical: spacing(0.5),
  },
  noteText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 14,
  },
});
