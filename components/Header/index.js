import React from "react";
import { View, Text } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import Toolbar from "./Toolbar";
import Menu from "./Menu";

const Index = ({
  titleComponent,
  toolbarButtons,
  onToolbarPress,
  containerStyle,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: COLORS.darkGray,
        ...containerStyle,
      }}
    >
      {/* <Menu /> */}
      {titleComponent}
      <Toolbar onPress={onToolbarPress} buttons={toolbarButtons} />
    </View>
  );
};

export default Index;
