import React from "react";
import { View, Text, Button, Switch } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function SettingSwitchItem({ title, value, onPress, itemKey }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
      }}
    >
      <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>{title}</Text>

      <Switch
        value={value}
        onValueChange={(value) => onPress(itemKey, value)}
      />
    </View>
  );
}
