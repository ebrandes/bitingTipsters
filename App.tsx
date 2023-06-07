import React from "react";
import { Inter_300Light, useFonts } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { AuthProvider } from "./src/shared/auth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
