import React from "react";
import { Convert, Transfer, Settings, Deposit } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"home"}
      >
        <Stack.Screen name="home" component={Tabs} />
        <Stack.Screen name="convert" component={Convert} />
        <Stack.Screen name="transfer" component={Transfer} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="deposit" component={Deposit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
