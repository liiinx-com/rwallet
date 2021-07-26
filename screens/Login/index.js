import React from "react";
import Header from "./Header";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { COLORS, FONTS, screens, icons } from "../../constants";
import LoginForm from "./LoginForm";

const index = ({ navigation }) => {
  const onLogin = () => {
    navigation.replace(screens.WALLET);
  };

  const onSignup = () => {};

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      <Header />
      <LoginForm onLogin={onLogin} onSignup={onSignup} />
    </View>
  );
};

export default index;
