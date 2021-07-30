import React from "react";
import { View, Text, Modal as RNModal } from "react-native";
import { COLORS, SIZES, icons, FONTS, screens } from "../constants";

const Modal = ({
  visible,
  onRequestClose,
  children,
  animationType = "fade",
}) => {
  return (
    <RNModal
      transparent
      animationType={animationType}
      onRequestClose={onRequestClose}
      visible={visible}
    >
      {children}
    </RNModal>
  );
};

export default Modal;
