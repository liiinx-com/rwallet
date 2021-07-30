import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { COLORS, SIZES, image, FONTS, screens } from "../../constants";

const YouLabel = ({
  onAssetPress,
  text,
  containerStyle,
  icon,
  editable,
  assetTo,
  textColor = COLORS.white,
  leftContainerStyle,
  rightContainerStyle,
  leftComponent,
  rightComponent,
  placeholder,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View>
        <TouchableOpacity
          onPress={onAssetPress}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={icon}
            style={{ height: 32, width: 32, marginRight: 7 }}
          />
          <Text style={{ color: COLORS.gray, ...FONTS.h2 }}>{text}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          backgroundColor: COLORS.darkGray,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.h1,
            color: textColor,
          }}
          editable={editable}
          placeholder={placeholder}
          maxLength={3}
          //   autoCompleteType=""
          keyboardType="numeric"
          textAlign="center"
          placeholderTextColor={COLORS.white}
        />
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        {leftComponent && (
          <View
            style={{
              flex: 1,
              height: 35,
              alignItems: "flex-start",
              ...leftContainerStyle,
            }}
          >
            {leftComponent}
          </View>
        )}
        {rightComponent && (
          <View
            style={{
              flex: 1,
              height: 35,
              alignItems: "flex-end",
              ...rightContainerStyle,
            }}
          >
            {rightComponent}
          </View>
        )}
      </View>
    </View>
  );
};

export default YouLabel;
