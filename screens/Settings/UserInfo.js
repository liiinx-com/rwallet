import React from "react";
import { View, Text } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

const secureEmail = (email = "") => {
  const [username, domain] = email.split("@");
  const [domainName, ext] = domain.split(".");
  const first2Chars = username.substring(0, 2);
  const firstDomainChar = domainName.substr(0, 1);
  const lastDomainChar = domainName.substr(domainName.length - 1, 1);
  return (
    first2Chars +
    "*".repeat(username.length - 2) +
    "@" +
    firstDomainChar +
    "*".repeat(domainName.length - 2) +
    lastDomainChar +
    "." +
    "*".repeat(ext.length)
  );
};

const secureString = (str = "") => {
  const first2Chars = str.substring(0, 2);
  const lastChart = str.substr(str.length - 1, 1);
  return first2Chars + "*".repeat(str.length - 3) + lastChart;
};

export default function UserInfo({ containerStyle, email, username }) {
  return (
    <View style={{ ...containerStyle }}>
      {email && (
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          {secureEmail(email)}
        </Text>
      )}
      {username && (
        <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
          {secureString(username)}
        </Text>
      )}
    </View>
  );
}
