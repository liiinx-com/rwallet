import React, { Children } from "react";
import { COLORS, FONTS, screens, icons, SIZES } from "../constants";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Button = ({
  text,
  containerStyle,
  colors = [],
  onPress,
  textColor = COLORS.white,
}) => {
  const WrapperComponent = ({ children }) => {
    if (colors.length > 1) {
      return (
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={colors}
          style={{ justifyContent: "center", ...containerStyle }}
        >
          {children}
        </LinearGradient>
      );
    } else {
      return (
        <View style={{ backgroundColor: colors[0], ...containerStyle }}>
          {children}
        </View>
      );
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <WrapperComponent>
        <Text
          style={{
            textAlign: "center",
            color: textColor,
            ...FONTS.h2,
          }}
        >
          {text}
        </Text>
      </WrapperComponent>
    </TouchableOpacity>
  );
};

export default Button;
