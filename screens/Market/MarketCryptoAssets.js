import React from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
import { LineChart } from "../../components";

const MarketCryptoAssets = ({ data, onPress, containerStyle }) => {
  return (
    <View style={{ flex: 1, width: SIZES.width, ...containerStyle }}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => {
          const {
            symbol,
            avatar,
            name,
            assetValue,
            currencySign,
            chartData,
          } = item;

          return (
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1.5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => onPress(item)}
              >
                <View style={{ width: 39 }}>
                  <Image
                    source={icons[symbol.toLowerCase()]}
                    style={{ height: 32, width: 32 }}
                  />
                </View>

                <View>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.body3,
                      marginLeft: SIZES.radius,
                    }}
                  >
                    {symbol}
                  </Text>
                </View>

                <LineChart
                  height={45}
                  width={100}
                  data={chartData}
                  color="yellow"
                  containerStyle={{
                    flex: 1.3,
                    alignItems: "center",
                  }}
                />

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      textAlign: "right",
                      color: COLORS.white,
                      ...FONTS.body3,
                    }}
                  >
                    {currencySign}
                    {Number(assetValue).toLocaleString()}
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
                        ...FONTS.body3,
                        color: COLORS.gray,
                        lineHeight: 19,
                        textAlign: "right",
                      }}
                    >
                      {Number(0.2).toLocaleString()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MarketCryptoAssets;
