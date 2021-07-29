import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Assets } from "../../components";
import { COLORS, SIZES, icons, FONTS, screens } from "../../constants";

const AssetPicker = ({ onSelect, assets = [] }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
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
        <Assets label="Available Assets" onPress={onSelect} assets={assets} />
      </View>
    </TouchableOpacity>
  );
};

export default AssetPicker;
