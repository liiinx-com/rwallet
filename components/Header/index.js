import React from "react";
import { View, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import Toolbar from "./Toolbar";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Index = ({
  titleComponent,
  toolbarButtons,
  onToolbarPress,
  containerStyle,
  onMenuPress,
  onBackPress,
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
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        {onBackPress && (
          <TouchableOpacity
            onPress={onBackPress}
            style={{
              flex: 0.15,
              alignItems: "flex-start",
            }}
          >
            <FontAwesomeIcon
              icon={icons.chevronLeft}
              color={COLORS.secondary}
              size={SIZES.h2}
            />
          </TouchableOpacity>
        )}
        <View style={{ flex: onMenuPress || onBackPress ? 0.85 : 1 }}>
          {titleComponent}
        </View>
        {onMenuPress && (
          <TouchableOpacity
            onPress={onMenuPress}
            style={{
              flex: 0.15,
              alignItems: "flex-end",
            }}
          >
            <FontAwesomeIcon
              icon={icons.bars}
              color={COLORS.white}
              size={SIZES.h2}
            />
          </TouchableOpacity>
        )}
      </View>
      <Toolbar onPress={onToolbarPress} buttons={toolbarButtons} />
    </View>
  );
};

export default Index;
