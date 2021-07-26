import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

export default function SectionTitle({ title, containerStyles }) {
  return (
    <View style={{ marginTop: SIZES.padding, ...containerStyles }}>
      <Text style={{ color: COLORS.gray, ...FONTS.h2 }}>{title}</Text>
    </View>
  );
}
