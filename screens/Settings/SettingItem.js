import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function SettingItem({
  noIcon,
  title,
  value,
  onPress,
  itemKey,
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
      }}
      onPress={() => onPress && onPress(itemKey)}
    >
      <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>{title}</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {value && (
          <Text
            style={{
              marginRight: SIZES.radius,
              color: COLORS.gray,
              ...FONTS.h3,
            }}
          >
            {value}
          </Text>
        )}
        {!noIcon && (
          <FontAwesomeIcon
            icon={icons.chevronRight}
            size={18}
            style={{ marginTop: 3 }}
            color={COLORS.white}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
