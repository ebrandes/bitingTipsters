import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login/Login";
import RecoveryPassword from "../pages/recovery-password/RecoveryPassword";
import DrawerNavigator from "./DrawerNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recovery Password" component={RecoveryPassword} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
