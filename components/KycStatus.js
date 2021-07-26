import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const KycStatus = ({ status, containerStyle }) => {
  const config = {
    PENDING: { icon: icons.waiting, text: "Pending", color: COLORS.lightGray },
    VERIFIED: { icon: icons.check, text: "Verified", color: COLORS.green },
    UNFERIFIED: {
      icon: icons.cancel,
      text: "Not Verified",
      color: COLORS.red,
    },
  };

  const statusProps = config[status] || config.UNFERIFIED;

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", ...containerStyle }}
    >
      <Text style={{ color: COLORS.white, marginRight: SIZES.base }}>
        {statusProps.text}
      </Text>
      <FontAwesomeIcon icon={statusProps.icon} color={statusProps.color} />
    </View>
  );
};

export default KycStatus;
