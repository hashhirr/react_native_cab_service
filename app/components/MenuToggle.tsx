import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../theme";

export function MenuToggle() {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <Pressable
      accessibilityLabel="Open menu"
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={styles.menu}
    >
      <Ionicons name="menu" size={18} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",

  },
});
