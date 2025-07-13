import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
type SafeScreenProps = {
    children: ReactNode
}
export default function SafeScreen({ children }: SafeScreenProps) {
  const inset = useSafeAreaInsets();
  return (
    <View style={[style.container, { paddingTop: inset.top }]}>{children}</View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
