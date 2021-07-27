import React from "react";
import { View, Text } from "react-native";

import { COLORS, FONTS, SIZES, screens, icons } from "../../constants";

const Footer = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "15%",
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        padding: SIZES.padding,
        backgroundColor: COLORS.lightGray,
        borderTopRightRadius: SIZES.radius,
        borderTopLeftRadius: SIZES.radius,
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Scan Royal Asset Barcode</Text>
    </View>
  );
};

export default Footer;
