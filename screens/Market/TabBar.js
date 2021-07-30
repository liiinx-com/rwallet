import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

const TabBar = ({ tabs = [], onTabChange, defaultTabValue }) => {
  const handlePress = ({ value }) => {
    onTabChange && onTabChange(value);
  };

  return (
    <View
      style={{
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.darkGray,
        minHeight: SIZES.radius,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {tabs.map(({ id, name, icon, value }) => {
          const color =
            value === defaultTabValue ? COLORS.primary : COLORS.white;
          return (
            <TouchableOpacity
              onPress={() => handlePress({ value })}
              style={{ flex: 1 }}
              key={id}
            >
              <View
                style={{
                  paddingHorizontal: 15,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  height: 45,
                }}
              >
                <FontAwesomeIcon
                  icon={icons[icon]}
                  color={color}
                  size={20}
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: color, ...FONTS.body3 }}>{name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
