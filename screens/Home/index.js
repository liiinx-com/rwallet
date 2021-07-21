import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useMyWallet } from "../../hooks";
import { COLORS, FONTS, screens, icons } from "../../constants";

import { Assets, Header, BalanceInfo } from "../../components";

const Home = ({ navigation }) => {
  const { isLoading, data } = useMyWallet();
  const { assets, totalValue, currencyCode, currencySign } = data;

  const pressHandler = (asset) => {
    navigation.navigate(screens.ASSET_DETAILS, { asset });
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      {isLoading ? (
        <Text style={{ color: COLORS.white, ...FONTS.h2, marginTop: 25 }}>
          Loading
        </Text>
      ) : (
        <>
          <Header
            titleComponent={
              <BalanceInfo
                totalValue={totalValue}
                currencyCode={currencyCode}
                currencySign={currencySign}
              />
            }
            toolbarButtons={[
              {
                name: "send",
                label: "Send",
                icon: icons.arrowUp,
                disabled: true,
              },
              {
                name: "receive",
                label: "Receive",
                icon: icons.arrowDown,
                disabled: true,
              },
            ]}
          />
          <Assets assets={assets} onPress={pressHandler} />
        </>
      )}
    </View>
  );
};

export default Home;