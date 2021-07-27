import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { COLORS, FONTS, SIZES, screens, icons } from "../../constants";

const Header = ({ onCancel, onInfo }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: SIZES.padding * 4,
      }}
    >
      <TouchableOpacity
        onPress={onCancel}
        style={{
          width: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={icons.cancel}
          color={COLORS.white}
          size={SIZES.h2}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          Deposit Royal Asset Card
        </Text>
      </View>
      {/* <TouchableOpacity
        onPress={onInfo}
        style={{
          height: 45,
          width: 45,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <FontAwesomeIcon icon={icons.info} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;
