import React from "react";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
import { View, Text, StatusBar } from "react-native";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.base,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      <Text>Market</Text>
    </View>
  );
};

export default index;
