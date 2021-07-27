import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, screens, icons } from "../../constants";
import { RNCamera } from "react-native-camera";
import Header from "./Header";
import Footer from "./Footer";
import ScanFocus from "./ScanFocus";

const index = ({ navigation }) => {
  const handleCancel = () => {
    navigation.navigate(screens.WALLET);
  };

  const onBarCodeRead = ({ data }) => {
    console.log(`result`, data);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.transparent,
      }}
    >
      <StatusBar barStyle="light-content" />
      <RNCamera
        style={{ flex: 1 }}
        captureAudio={false}
        onBarCodeRead={onBarCodeRead}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          message: "messss",
          title: "title is here",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }}
        ref={(ref) => {
          this.camera = ref;
        }}
      >
        <Header onCancel={handleCancel} />
        <ScanFocus />
        <Footer />
      </RNCamera>
    </View>
  );
};

export default index;
