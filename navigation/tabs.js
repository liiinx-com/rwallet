import React from "react";
import { TabIcon } from "../components";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import {
  Wallet,
  Convert,
  Market,
  Deposit,
  Settings,
  Transfer,
} from "../screens";
import { tabs } from "../app.json";
import { COLORS, FONTS, icons, screens } from "../constants";

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
        name={screens.MARKET}
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.market} label="Market" />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.qrCode} label="Deposit" />
            );
          },
        }}
        name={screens.DEPOSIT}
        component={Deposit}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.deposit}
                label="Wallet"
                featured
              />
            );
          },
        }}
        name={screens.WALLET}
        component={Wallet}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.transfer}
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
              <TabIcon focused={focused} icon={icons.convert} label="Convert" />
            );
          },
        }}
        name="convert"
        component={Convert}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
