import React from "react";
import { COLORS, FONTS, screens, icons, SIZES } from "../../constants";

import { View, Text } from "react-native";
import Button from "../../components/Button";

const LoginForm = ({ onLogin, onSignup }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
      <Text
        style={{
          marginTop: SIZES.radius,
          width: "70%",
          ...FONTS.h3,
          color: COLORS.lightGray,
        }}
      >
        Discover more that 2000 coins
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          text="Sign In with Biometrics"
          colors={[COLORS.darkGray, COLORS.primary]}
          containerStyle={{ paddingVertical: 17, borderRadius: 19 }}
          onPress={onLogin}
        />

        <Button
          text="Signup"
          colors={[COLORS.black]}
          containerStyle={{
            paddingVertical: 17,
            borderRadius: 19,
            borderColor: COLORS.primary,
            borderWidth: 1,
            marginTop: SIZES.radius * 2,
          }}
          onPress={onSignup}
        />
      </View>
    </View>
  );
};

export default LoginForm;
