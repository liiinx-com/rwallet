import React from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const index = ({ assets, onPress, label = "My Assets" }) => {
  return (
    <FlatList
      keyExtractor={({ symbol }) => symbol}
      contentContainerStyle={{
        marginTop: 30,
        paddingHorizontal: SIZES.padding,
      }}
      ListHeaderComponent={
        <View style={{ marginBottom: SIZES.radius, marginTop: 20 }}>
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>{label}</Text>
        </View>
      }
      renderItem={({ item }) => {
        const { symbol, avatar, name, size, value, currencySign } = item;
        return (
          <TouchableOpacity
            style={{
              height: 65,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => onPress(item)}
          >
            <View style={{ width: 39 }}>
              <Image
                source={icons[symbol.toLowerCase()]}
                style={{ height: 32, width: 32 }}
              />
              {/* <FontAwesomeIcon
                color={COLORS.white}
                icon={icons.coin}
                style={{ marginBottom: 3 }}
                size={25}
              /> */}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                {name}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  textAlign: "right",
                  color: COLORS.white,
                  ...FONTS.body3,
                }}
              >
                {Number(size).toLocaleString()} {symbol}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    lineHeight: 19,
                    textAlign: "right",
                  }}
                >
                  {currencySign}
                  {Number(value).toLocaleString()}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      data={assets}
      ListFooterComponent={<View style={{ marginBottom: 40 }}></View>}
    />
  );
};

export default index;
