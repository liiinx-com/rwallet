import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, screens, icons } from "../constants";

const PageLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: COLORS.white, ...FONTS.largeTitle, marginTop: 25 }}>
        Loading
      </Text>
    </View>
  );
};

export default PageLoading;
