import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Login({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Oi</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recovery Password")}
      >
        <Text>Recovery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;
