import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../constants";
import { tabs } from "../app.json";

const TabIcon = ({ label, icon, focused, iconStyle, featured }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: featured ? tabs.featuredIconWidth : tabs.iconWidth,
          height: featured ? tabs.featuredIconHeight : tabs.iconHeight,
          tintColor: focused ? COLORS.white : COLORS.gray,
          ...iconStyle,
        }}
      />
      <Text style={{ color: focused ? COLORS.white : COLORS.gray }}>
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;
