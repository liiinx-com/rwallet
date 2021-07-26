import React, { useState } from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";
import { COLORS, SIZES, screens, FONTS } from "../../constants";
import { KycStatus, Header } from "../../components";
import SectionTitle from "./SectionTitle";
import UserInfo from "./UserInfo";
import SettingItem from "./SettingItem";
import SettingSwitchItem from "./SettingSwitchItem";

const Settings = ({ navigation }) => {
  const [faceId, setFaceId] = useState(false);

  const pressHandler = (key, value) => {
    const valueHandlers = {
      faceid: () => setFaceId(value),
      theme: () => {},
      launchScreen: () => {},
      currency: () => {},
      language: () => {},
      changePassword: () => {},
      signout: () =>
        navigation.reset({
          index: 0,
          routes: [{ name: screens.LOGIN }],
        }),
    };
    valueHandlers[key]();
  };

  //TODO: All views are redundant => new component
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
        containerStyle={{
          height: 100,
          justifyContent: "flex-end",
          backgroundColor: COLORS.black,
        }}
        titleComponent={
          <Text style={{ color: COLORS.white, ...FONTS.h1 }}>Settings</Text>
        }
      />

      <ScrollView>
        <SectionTitle title="Account" />

        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          <UserInfo containerStyle={{ flex: 1 }} />
          <KycStatus vrified={true} />
        </View>
        <SettingItem
          title="Language"
          value="English"
          itemKey="language"
          onPress={pressHandler}
        />
        <SettingItem
          title="Currency"
          value="CAD"
          itemKey="currency"
          onPress={pressHandler}
        />

        <SectionTitle title="App" />
        <SettingItem
          title="Launch Screen"
          value="Wallet"
          itemKey="launchScreen"
          onPress={pressHandler}
        />
        <SettingItem
          title="Theme"
          value="Dark"
          itemKey="theme"
          onPress={pressHandler}
        />

        <SectionTitle title="Security" />
        <SettingSwitchItem
          title="FaceID"
          itemKey="faceid"
          value={faceId}
          onPress={pressHandler}
        />
        <SettingItem
          title="Change Password"
          itemKey="changePassword"
          onPress={pressHandler}
        />
        <SettingItem
          noIcon
          title="Signout"
          itemKey="signout"
          onPress={pressHandler}
        />
      </ScrollView>
    </View>
  );
};

export default Settings;
