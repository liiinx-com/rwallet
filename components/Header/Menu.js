import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { COLORS, icons, SIZES } from "../../constants";
import { View, Text } from "react-native";

const Menu = () => {
  return (
    <View
      style={{
        marginTop: 50,

        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <View
        style={{
          flex: 0.5,
          alignItems: "flex-start",
        }}
      >
        <FontAwesomeIcon icon={icons.bars} size={25} color={COLORS.white} />
      </View>
      <View style={{ flex: 0.5, alignItems: "flex-end" }}>
        <FontAwesomeIcon icon={icons.comments} size={25} color={COLORS.white} />
      </View>
    </View>
  );
};

export default Menu;
