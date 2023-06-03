import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/Colors";
import LogoSvg from "../../../assets/logo-betwise.svg";

function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center" }}>
          <LogoSvg width={200} />
        </View>

        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            borderBottomColor: COLORS.GRAY,
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 15,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={COLORS.GRAY}
            style={{ marginRight: 5, marginTop: 4 }}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={{ flex: 1, paddingVertical: 0 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: COLORS.GRAY,
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color={COLORS.GRAY}
            style={{ marginRight: 5, marginTop: 4 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{ flex: 1, paddingVertical: 0 }}
          />

          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: COLORS.PRIMARY, fontWeight: "500" }}>
              Forgot ?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: COLORS.PRIMARY,
            padding: 15,
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.WHITE }}>Login</Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            color: COLORS.DARK_GRAY,
            marginBottom: 20,
          }}
        >
          Or, login with...
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              width: 60,
              alignItems: "center",
              padding: 15,
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderColor: COLORS.GRAY,
            }}
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../../assets/google-sign-in.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>New for here? </Text>
          <TouchableOpacity>
            <Text style={{ color: COLORS.PRIMARY, fontWeight: "bold" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
