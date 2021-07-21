import React from "react";
import { View } from "react-native";
import { IconTextButton } from "..";
import { SIZES } from "../../constants";

const Toolbar = ({ buttons = [], onPress }) => {
  const marginStyles = { marginRight: SIZES.radius };

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 35,
        marginBottom: -20,
        paddingHorizontal: SIZES.radius,
      }}
    >
      {buttons.map(({ label, icon, name, disabled }, index) => (
        <IconTextButton
          key={name}
          onPress={() => onPress(name)}
          label={label}
          icon={icon}
          disabled={disabled}
          containerStyle={
            buttons.length - index === 1 ? undefined : marginStyles
          }
        />
      ))}
    </View>
  );
};

export default Toolbar;
