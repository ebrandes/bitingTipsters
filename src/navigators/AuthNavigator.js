import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login/Login";
import RecoveryPassword from "../pages/recovery-password/RecoveryPassword";
import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recovery Password" component={RecoveryPassword} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
