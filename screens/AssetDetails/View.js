import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTransactions } from "../../hooks";
import { COLORS, FONTS, icons } from "../../constants";
import { Header, AssetHeader } from "../../components";
import { Transactions } from "../../components";

const AssetDetails = ({
  navigation,
  asset,
  backHandler,
  sendHandler,
  receiveHandler,
  handleSelectTransaction,
}) => {
  const { symbol } = asset;
  const { isLoading, data } = useTransactions(symbol);

  const onToolbarPress = (label) => {
    const pressHandlers = {
      send: () => {},
      receive: () => {},
      back: backHandler,
    };
    pressHandlers[label]();
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <>
        <Header
          titleComponent={<AssetHeader asset={asset} />}
          containerStyle={{
            backgroundColor: COLORS[symbol.toLowerCase()],
          }}
          onToolbarPress={onToolbarPress}
          toolbarButtons={[
            {
              name: "send",
              label: "Send",
              disabled: true,
              // icon: icons.arrowUp,
            },
            {
              name: "receive",
              label: "Receive",
              disabled: true,
              // icon: icons.arrowDown,
            },
            {
              name: "back",
              label: "Back",
              // icon: icons.arrowDown,
            },
          ]}
        />
        <Transactions transactions={data} />
      </>
    </View>
  );
};

export default AssetDetails;
