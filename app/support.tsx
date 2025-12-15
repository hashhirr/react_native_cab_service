import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { GlassCard } from "./components/GlassCard";
import { MenuToggle } from "./components/MenuToggle";
import { Scaffold } from "./components/Scaffold";
import { colors, radii, spacing } from "./theme";

const faqs = [
  "How do I share an ETA link?",
  "Can I pin my favorite pickup lane?",
  "What happens when surge triggers?",
  "Is carbon offset applied automatically?",
];

export default function SupportScreen() {
  return (
    <Scaffold
      title="Support studio"
      // subtitle="Minimal, confident help space that feels built-in."
      leftSlot={<MenuToggle />}
      rightSlot={
        <View style={styles.pill}>
          <Ionicons name="chatbubbles" size={16} color={colors.background} />
          <Text style={styles.pillText}>Live</Text>
        </View>
      }
    >
      <GlassCard style={{ gap: spacing(1) }}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Concierge</Text>
          <Ionicons name="person" size={22} color={colors.accent} />
        </View>
        <Text style={styles.muted}>
          Tell us what you want to showcase; we will mock a response instantly.
        </Text>
        <View style={styles.assistRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>R</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.assistTitle}>Nova • Operator</Text>
            <Text style={styles.muted}>“I’m here for smooth portfolio shots.”</Text>
          </View>
          <Ionicons name="radio" size={18} color={colors.accent} />
        </View>
      </GlassCard>

      <GlassCard>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Quick answers</Text>
          <Ionicons name="help-buoy" size={22} color={colors.highlight} />
        </View>
        <View style={{ gap: spacing(0.75) }}>
          {faqs.map((faq) => (
            <View key={faq} style={styles.faqRow}>
              <Ionicons name="chevron-forward" size={16} color={colors.muted} />
              <Text style={styles.faqText}>{faq}</Text>
            </View>
          ))}
        </View>
      </GlassCard>

      <GlassCard style={{ gap: spacing(1) }}>
        <Text style={styles.sectionTitle}>Report a vibe</Text>
        <View style={styles.flagRow}>
          <Ionicons name="sunny" size={18} color={colors.accent} />
          <Text style={styles.flagText}>Music level</Text>
        </View>
        <View style={styles.flagRow}>
          <Ionicons name="leaf" size={18} color={colors.highlight} />
          <Text style={styles.flagText}>Air quality</Text>
        </View>
        <View style={styles.flagRow}>
          <Ionicons name="color-wand" size={18} color={colors.accentSoft} />
          <Text style={styles.flagText}>Cleanliness</Text>
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
  muted: {
    color: colors.muted,
    fontSize: 13,
  },
  assistRow: {
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
  assistTitle: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 15,
  },
  faqRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.75),
  },
  faqText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 14,
  },
  flagRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(0.75),
  },
  flagText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 14,
  },
});
