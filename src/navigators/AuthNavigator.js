import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login/Login";

import Register from "../pages/register/Register";
import DrawerNavigator from "./DrawerNavigator";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import { ROUTES } from "../constants/Routes";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.HOME}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
