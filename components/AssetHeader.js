import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { myWalletName } from "../app.json";

const AssetHeader = ({ asset }) => {
  const {
    symbol,
    name,
    currencyCode,
    currencySign,
    value,
    assetValue,
    size,
  } = asset;
  const image = icons[symbol.toLowerCase()];

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
        <Image
          source={image}
          style={{ height: 52, width: 52, marginRight: 7 }}
        />

        <View
          style={{
            flexDirection: "column",
            marginBottom: SIZES.radius,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray,
              ...FONTS.h2,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: COLORS.lightGray,
              ...FONTS.h3,
              marginTop: 1,
            }}
          >
            {currencySign}
            {Number(assetValue).toLocaleString()}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>
          {Number(size).toLocaleString()}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.lightGray,
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          {symbol}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.lightGray,
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          {currencySign}
          {Number(value).toLocaleString()}
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

export default AssetHeader;
