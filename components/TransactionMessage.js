import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button } from "../components";
import { COLORS, SIZES, icons, FONTS, screens } from "../constants";

const TransactionMessage = ({ onClose }) => {
  return (
    <TouchableOpacity
      onPress={onClose}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.darkGray,
          borderRadius: SIZES.radius,
          height: SIZES.height / 2,
          width: SIZES.width - SIZES.padding,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
          Transaction details
        </Text>
        <Button text="Close" colors={[COLORS.gray]} onPress={onClose} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionMessage;
