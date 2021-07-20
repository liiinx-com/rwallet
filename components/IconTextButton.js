import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { tabs } from "../app.json";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const IconTextButton = ({ label, icon, onPress, containerStyle, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        flex: 1,
        height: 40,
        borderColor: COLORS.black,
        // padding: 7,
        borderRadius: SIZES.radius,
        height: 50,
        backgroundColor: disabled ? COLORS.gray : COLORS.white,
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      {icon && (
        <FontAwesomeIcon
          color={COLORS.black}
          icon={icon}
          style={{ marginBottom: 3 }}
          size={tabs.iconSize}
        />
      )}

      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.black,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
