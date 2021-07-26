import React from "react";
import {
  Convert,
  Login,
  Transfer,
  Settings,
  Deposit,
  AssetDetails,
} from "./screens";
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
        initialRouteName={screens.LOGIN}
      >
        <Stack.Screen name={screens.LOGIN} component={Login} />
        <Stack.Screen name={screens.WALLET} component={Tabs} />
        <Stack.Screen name={screens.ASSET_DETAILS} component={AssetDetails} />
        <Stack.Screen name={screens.CONVERT} component={Convert} />
        <Stack.Screen name={screens.TRANSFER} component={Transfer} />
        <Stack.Screen name={screens.SETTINGS} component={Settings} />
        <Stack.Screen name="deposit" component={Deposit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
