import React from "react";

import { COLORS, FONTS, screens, images, SIZES } from "../../constants";
import LinearGradient from "react-native-linear-gradient";

import { View, Text, ImageBackground } from "react-native";

const Header = () => {
  return (
    <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
      <ImageBackground
        style={{ flex: 1, justifyContent: "flex-end" }}
        source={images.loginBackground}
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            height: 200,
            justifyContent: "flex-end",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text
            style={{
              width: "80%",
              color: COLORS.white,
              lineHeight: 45,
              ...FONTS.largeTitle,
            }}
          >
            Royal Wallet
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Header;
