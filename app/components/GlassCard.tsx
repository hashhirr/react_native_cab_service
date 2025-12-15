import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { colors, radii, shadow } from "../theme";

type GlassCardProps = {
  children: ReactNode;
  style?: ViewStyle;
  borderColor?: string;
};

export function GlassCard({ children, style, borderColor }: GlassCardProps) {
  return (
    <View
      style={[
        styles.card,
        borderColor ? { borderColor } : null,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.lg,
    padding: 16,
    gap: 10,
    ...shadow,
  },
});
