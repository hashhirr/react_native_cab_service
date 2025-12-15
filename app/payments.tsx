import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { GlassCard } from "./components/GlassCard";
import { MenuToggle } from "./components/MenuToggle";
import { Scaffold } from "./components/Scaffold";
import { colors, radii, spacing } from "./theme";

const cards = [
  { brand: "Midnight Visa", last4: "0912", tag: "Primary" },
  { brand: "Studio Pay", last4: "4411", tag: "Backup" },
];

const history = [
  { label: "Harbor transfer", amount: "-$18.40", time: "Tonight • 8:32 PM" },
  { label: "Airport lounge", amount: "-$9.50", time: "Yesterday • 10:14 PM" },
  { label: "Referral credit", amount: "+$12.00", time: "This week" },
];

export default function PaymentsScreen() {
  return (
    <Scaffold
      title="Wallet & fares"
      // subtitle="Keep balances, perks, and cards ready for your dribble shots."
      leftSlot={<MenuToggle />}
      rightSlot={
        <View style={styles.pill}>
          <Ionicons name="shield-checkmark" size={16} color={colors.accent} />
          <Text style={styles.pillText}>Protected</Text>
        </View>
      }
    >
      <GlassCard style={{ gap: spacing(1) }} borderColor={colors.accent}>
        <View style={styles.row}>
          <View>
            <Text style={styles.sectionTitle}>Studio balance</Text>
            <Text style={styles.balance}>$128.40</Text>
            <Text style={styles.muted}>Used for fast airport exits</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="add" size={16} color={colors.background} />
            <Text style={styles.badgeText}>Top up</Text>
          </View>
        </View>
        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.balanceLabel}>Credit reserved</Text>
            <Text style={styles.balanceValue}>$24.10</Text>
          </View>
          <View>
            <Text style={styles.balanceLabel}>Rewards</Text>
            <Text style={styles.balanceValue}>1.3k pts</Text>
          </View>
        </View>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Cards on file</Text>
          <Ionicons name="wallet" size={22} color={colors.accentSoft} />
        </View>
        <View style={{ gap: spacing(1) }}>
          {cards.map((card) => (
            <View key={card.last4} style={styles.cardRow}>
              <View style={styles.cardIcon}>
                <Ionicons name="card" size={18} color={colors.background} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{card.brand}</Text>
                <Text style={styles.muted}>•••• {card.last4}</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{card.tag}</Text>
              </View>
            </View>
          ))}
        </View>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Recent fares</Text>
          <Ionicons name="time" size={22} color={colors.accent} />
        </View>
        <View style={{ gap: spacing(1) }}>
          {history.map((item) => (
            <View key={item.label} style={styles.historyRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.historyTitle}>{item.label}</Text>
                <Text style={styles.muted}>{item.time}</Text>
              </View>
              <Text
                style={[
                  styles.historyAmount,
                  item.amount.startsWith("+") && { color: colors.success },
                ]}
              >
                {item.amount}
              </Text>
            </View>
          ))}
        </View>
      </GlassCard>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.overlay,
    borderColor: colors.border,
    borderWidth: 1,
    paddingHorizontal: spacing(1.25),
    paddingVertical: spacing(0.65),
    borderRadius: radii.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
  },
  pillText: {
    color: colors.text,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },
  balance: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "800",
    marginVertical: 6,
  },
  muted: {
    color: colors.muted,
    fontSize: 13,
  },
  badge: {
    backgroundColor: colors.accent,
    borderRadius: radii.sm,
    paddingHorizontal: spacing(1),
    paddingVertical: spacing(0.75),
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.5),
  },
  badgeText: {
    color: colors.background,
    fontWeight: "800",
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceLabel: {
    color: colors.muted,
    fontSize: 13,
  },
  balanceValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingVertical: spacing(0.5),
  },
  cardIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.sm,
    paddingHorizontal: spacing(1),
    paddingVertical: spacing(0.4),
  },
  tagText: {
    color: colors.muted,
    fontWeight: "700",
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
  },
  historyTitle: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
  historyAmount: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
});
