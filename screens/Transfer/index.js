import React from "react";
import { SafeAreaView, Text, StatusBar, View, StyleSheet } from "react-native";
import { COLORS, SIZES, icons, FONTS, screens } from "../../constants";
import { Header } from "../../components";

const index = ({ navigation }) => {
  const handleMenuPress = () => {
    navigation.navigate(screens.SETTINGS);
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
            Transfer Assets
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default index;
