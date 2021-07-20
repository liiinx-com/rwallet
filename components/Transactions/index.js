import React from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const index = ({ transactions, onPress }) => {
  return (
    <FlatList
      keyExtractor={({ symbol }) => symbol}
      contentContainerStyle={{
        marginTop: 30,
        paddingHorizontal: SIZES.padding,
      }}
      ListHeaderComponent={
        <View style={{ marginBottom: SIZES.radius, marginTop: 20 }}>
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Transactions</Text>
        </View>
      }
      renderItem={({ item }) => {
        const {
          status,
          size,
          valueUsd,
          txFeeUsd,
          txFee,
          hash,
          confirmedAt,
          internal,
          incoming,
          symbol,
          from,
          to,
        } = item;
        const txIcon = incoming
          ? { icon: icons.arrowDown, color: COLORS.green }
          : { icon: icons.arrowUp, color: COLORS.red };

        return (
          <TouchableOpacity
            style={{
              height: 55,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => onPress(item)}
          >
            <View style={{ width: 39 }}>
              <FontAwesomeIcon
                color={txIcon.color}
                icon={txIcon.icon}
                style={{ marginBottom: 3 }}
                size={15}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{to}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{ textAlign: "right", color: COLORS.white, ...FONTS.h3 }}
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
                    ...FONTS.h3,
                    color: COLORS.lightGray,
                    lineHeight: 15,
                    textAlign: "right",
                  }}
                >
                  {"$"}
                  {Number(valueUsd).toLocaleString()}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      data={transactions}
      ListFooterComponent={<View style={{ marginBottom: 40 }}></View>}
    />
  );
};

export default index;
