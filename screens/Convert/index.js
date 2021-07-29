import React, { useState } from "react";
import { SafeAreaView, Text, StatusBar, View, StyleSheet } from "react-native";
import { COLORS, SIZES, icons, FONTS, screens } from "../../constants";
import {
  Header,
  Button,
  PageLoading,
  Modal,
  TransactionMessage,
} from "../../components";
import YouLabel from "./YouLabel";
import AssetPicker from "./AssetPicker";
import { useMyWallet } from "../../hooks";

const Transfer = ({ navigation }) => {
  const { isLoading, data } = useMyWallet();
  const [showAssetsModal, setShowAssetsModal] = useState(false);
  const [showTxMsgModal, setShowTxMsgModal] = useState(false);

  const { assets, totalValue, currencyCode, currencySign } = data;
  const [fromAsset, setFromAsset] = useState(null);
  const [toAsset, setToAsset] = useState(null);
  const [rateExpired, setRateExpired] = useState(true);
  if (isLoading) return <PageLoading />;

  const availableAssets = assets ? assets.filter((a) => a.size > 0) : [];

  const handleAssetSelect = ({ asset }) => {
    console.log(`asset`, asset);
    setShowAssetsModal(false);
  };

  const handleConvert = () => {
    setShowTxMsgModal(true);
  };

  const handleMenuPress = () => {
    navigation.navigate(screens.SETTINGS);
  };

  const onYouPayAssetPress = () => {
    setShowAssetsModal(true);
  };

  return (
    <SafeAreaView
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
          <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
            Convert Assets
          </Text>
        }
      />

      <View
        style={{
          paddingHorizontal: SIZES.radius,
          flexDirection: "column",
          marginTop: SIZES.padding,
          marginBottom: SIZES.padding,
        }}
      >
        <YouLabel
          text="You pay"
          icon={icons.cdn}
          assetTo="pay"
          textColor={COLORS.red}
          placeholder={"0.0"}
          onAssetPress={onYouPayAssetPress}
          leftComponent={
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Available: CAD $123.34567
            </Text>
          }
          containerStyle={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 3,
          }}
        />
        <YouLabel
          text="You get"
          assetTo="get"
          placeholder={"0.0"}
          icon={icons.tik}
          textColor={COLORS.green}
          editable={false}
          leftComponent={
            <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>
              Rate: 1.2
            </Text>
          }
          rightComponent={
            <Text style={{ color: COLORS.gray, ...FONTS.body2 }}>
              Fee: $0.23
            </Text>
          }
          containerStyle={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 4,
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Button
            onPress={handleConvert}
            containerStyle={{
              borderRadius: SIZES.radius,
              height: 60 + 20,
              width: 300,
              alignItems: "center",
            }}
            text={"Convert Now" + "\n" + "Rate expires in 5 Seconds"}
            colors={[COLORS.darkGray, COLORS.primary]}
          />
        </View>
      </View>
      <Modal
        onRequestClose={() => setShowAssetsModal(false)}
        visible={showAssetsModal}
      >
        <AssetPicker assets={availableAssets} onSelect={handleAssetSelect} />
      </Modal>
      <Modal
        onRequestClose={() => setShowTxMsgModal(false)}
        visible={showTxMsgModal}
      >
        <TransactionMessage onClose={() => setShowTxMsgModal(false)} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Transfer;
