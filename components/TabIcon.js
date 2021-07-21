import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../constants";
import { tabs } from "../app.json";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const TabIcon = ({ label, icon, focused, iconStyle, featured }) => {
  const color = featured
    ? focused
      ? COLORS.primary
      : COLORS.secondary
    : focused
    ? COLORS.white
    : COLORS.gray;
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FontAwesomeIcon
        color={color}
        icon={icon}
        style={{ marginBottom: 3 }}
        size={featured ? tabs.featuredIconSize : tabs.iconSize}
      />

      <Text
        style={{
          color,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
