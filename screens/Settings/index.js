import React, { useState } from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";
import { COLORS, SIZES, screens, FONTS } from "../../constants";
import { KycStatus, Header } from "../../components";
import SectionTitle from "./SectionTitle";
import UserInfo from "./UserInfo";
import SettingItem from "./SettingItem";
import SettingSwitchItem from "./SettingSwitchItem";
import Button from "../../components/Button";

const Settings = ({ navigation }) => {
  const [faceId] = useState(true);
  const [darkMode] = useState(true);
  const [autoSignout] = useState(true);

  const handleBackPress = () => {
    navigation.pop();
  };
  const handleSignout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: screens.LOGIN }],
    });
  };

  const pressHandler = (key, value) => {
    const valueHandlers = {
      biometrics: () => {},
      theme: () => {},
      launchScreen: () => {},
      currency: () => {},
      language: () => {},
      changePassword: () => {},
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
        onBackPress={handleBackPress}
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

        {/* <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          <UserInfo username="amir.zad" containerStyle={{ flex: 1 }} />
          <KycStatus vrified={true} />
        </View> */}
        <SettingItem
          title="KYC"
          value="Not Verified"
          itemKey="kyc"
          onPress={pressHandler}
        />
        <SettingItem
          title="Email"
          value="am*******@c******a.**"
          itemKey="email"
          onPress={pressHandler}
        />
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
          value="Market"
          itemKey="launchScreen"
          onPress={pressHandler}
        />
        <SettingSwitchItem
          title="Dark Mode"
          value={darkMode}
          itemKey="theme"
          onPress={pressHandler}
        />

        <SectionTitle title="Security" />
        <SettingSwitchItem
          title="Biometrics"
          itemKey="biometrics"
          value={faceId}
          onPress={pressHandler}
        />
        <SettingSwitchItem
          title="Auto Signout"
          itemKey="autosignout"
          value={autoSignout}
          onPress={pressHandler}
        />
        <SettingItem
          title="Change Password"
          itemKey="changePassword"
          onPress={pressHandler}
        />

        <Button
          text="Signout"
          colors={[COLORS.darkGray, COLORS.primary]}
          textColor={COLORS.white}
          onPress={handleSignout}
          containerStyle={{
            marginTop: 50,
            height: 40,
            borderRadius: 15,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Settings;
