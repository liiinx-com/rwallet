import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { myWalletName } from "../app.json";

const BalanceInfo = ({
  image,
  totalValue,
  currencyCode,
  currencySign,
  title = myWalletName,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginTop: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.radius,
        }}
      >
        {image && (
          <Image
            source={image}
            style={{ height: 48, width: 48, marginRight: 7 }}
          ></Image>
        )}
        <Text
          style={{
            color: COLORS.lightGray,
            ...FONTS.h2,
            marginTop: image ? 5 : 0,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>
          {currencySign}
          {Number(totalValue).toLocaleString()}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.lightGray,
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          {currencyCode}
        </Text>
      </View>
    </View>
  );
};

export default BalanceInfo;
