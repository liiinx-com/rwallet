import React, { useState } from "react";
import { COLORS, SIZES, icons, FONTS, screens } from "../../constants";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { Header, PageLoading } from "../../components";
import TabBar from "./TabBar";
import { useMarketData, MARKETS } from "../../hooks";
import MarketCryptoAssets from "./MarketCryptoAssets";

const assetCategories = [
  { id: 1, name: "Crypto", icon: "coins", value: "crypto" },
  { id: 2, name: "Real Estate", icon: "building", value: "realestate" },
  // { id: 3, name: "Restaurant", icon: "restaurant", value: "restaurant" },
];

const index = ({ navigation }) => {
  const [selectedMarket, setSelectedMarket] = useState(MARKETS.CRYPTO);
  const { data, isLoading } = useMarketData(selectedMarket);
  const containerStyle = { marginTop: SIZES.radius };

  const handleTabChange = (value) => {
    setSelectedMarket(value);
  };

  const handleMenuPress = () => {
    navigation.navigate(screens.SETTINGS);
  };

  const handleAssetPress = (asset) => {
    console.log("--->", asset);
  };

  if (isLoading) return <PageLoading />;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.base,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      <Header
        onMenuPress={handleMenuPress}
        containerStyle={{
          height: 100,
          justifyContent: "flex-end",
          backgroundColor: COLORS.black,
        }}
        titleComponent={
          <Text style={{ color: COLORS.white, ...FONTS.h1 }}>Marketplace</Text>
        }
      />
      <TabBar
        tabs={assetCategories}
        onTabChange={handleTabChange}
        defaultTabValue={selectedMarket}
      />

      {selectedMarket === MARKETS.CRYPTO && (
        <MarketCryptoAssets
          containerStyle={containerStyle}
          onPress={handleAssetPress}
          data={data}
        />
      )}
    </View>
  );
};

export default index;
