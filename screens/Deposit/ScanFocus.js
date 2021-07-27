import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Image, Text } from "react-native";

import { COLORS, FONTS, SIZES, screens, icons, images } from "../../constants";

const ScanFocus = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={images.cameraFocus}
        resizeMethod="auto"
        style={{ width: 300, height: 300, marginTop: "-50%" }}
      />
    </View>
  );
};

export default ScanFocus;
