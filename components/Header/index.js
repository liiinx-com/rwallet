import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../../constants";

import Toolbar from "./Toolbar";

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
      {titleComponent}
      <Toolbar onPress={onToolbarPress} buttons={toolbarButtons} />
    </View>
  );
};

export default Index;
