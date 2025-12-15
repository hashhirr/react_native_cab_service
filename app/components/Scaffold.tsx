import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { colors, spacing } from "../theme";

type ScaffoldProps = {
  title: string;
  subtitle?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  contentStyle?: ViewStyle;
};

export function Scaffold({
  title,
  subtitle,
  leftSlot,
  rightSlot,
  children,
  footer,
  contentStyle,
}: ScaffoldProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.backdropTop} />
      <View style={styles.backdropBottom} />
      <ScrollView
        contentContainerStyle={[styles.container, contentStyle]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          {leftSlot}
          <View style={styles.headerText}>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
          {rightSlot}
        </View>
        {children}
        {footer ? <View style={styles.footer}>{footer}</View> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2),
    paddingBottom: spacing(3),
    gap: spacing(2),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing(1),
    gap: spacing(1),
    // backgroundColor:'red'
  },
  headerText: {
    gap: spacing(0.5),
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    lineHeight: 22,
  },
  footer: {
    marginTop: spacing(2),
    paddingBottom: spacing(1),
  },
  backdropTop: {
    position: "absolute",
    top: -120,
    right: -140,
    width: 320,
    height: 320,
    borderRadius: 400,
    backgroundColor: "#e7f0ff",
    opacity: 0.9,
    transform: [{ rotate: "8deg" }],
  },
  backdropBottom: {
    position: "absolute",
    bottom: -140,
    left: -120,
    width: 300,
    height: 300,
    borderRadius: 380,
    backgroundColor: "#eff6ff",
    opacity: 0.8,
    transform: [{ rotate: "-5deg" }],
  },
});
