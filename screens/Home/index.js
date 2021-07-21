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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Home;
