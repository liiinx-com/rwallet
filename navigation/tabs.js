import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { TabIcon } from "../components";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import { Home, Convert, Deposit, Settings, Transfer } from "../screens";
import { tabs } from "../app.json";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: tabs.height,
          backgroundColor: COLORS.darkGray,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.pie_chart}
                label="Wallet"
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.pie_chart}
                label="Transfer"
              />
            );
          },
        }}
        name="transfer"
        component={Transfer}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.transaction}
                label="Deposit"
                featured
              />
            );
          },
        }}
        name="deposit"
        component={Deposit}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.transaction}
                label="Convert"
              />
            );
          },
        }}
        name="convert"
        component={Convert}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.settings}
                label="Settings"
              />
            );
          },
        }}
        name="settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
