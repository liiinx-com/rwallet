import React from "react";
import { Convert, Transfer, Settings, Deposit, AssetDetails } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { screens } from "./constants";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={screens.HOME}
      >
        <Stack.Screen name={screens.HOME} component={Tabs} />
        <Stack.Screen name={screens.ASSET_DETAILS} component={AssetDetails} />
        <Stack.Screen name="convert" component={Convert} />
        <Stack.Screen name="transfer" component={Transfer} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="deposit" component={Deposit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
