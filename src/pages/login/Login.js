import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSvg from "../../../assets/logo-betwise.svg";
import { COLORS } from "../../constants/Colors";

const Login = ({ navigation }) => {
  const [loginText, setLoginText] = useState("Login");

  const doLogin = () => {
    setLoginText("Wait...");
    setTimeout(() => {
      setLoginText("Login");
      navigation.navigate("Home");
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 40 }}>
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
            style={{
              flex: 1,
              paddingVertical: 0,
              fontFamily: "Inter_300Light",
            }}
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
            style={{
              flex: 1,
              paddingVertical: 0,
              fontFamily: "Inter_300Light",
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("RecoveryPassword")}
          >
            <Text
              style={{
                fontFamily: "Inter_300Light",
                color: COLORS.PRIMARY,
                fontWeight: "bold",
              }}
            >
              Forgot ?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableHighlight
          onPress={doLogin}
          disabled={loginText === "Wait..."}
          style={{
            backgroundColor: COLORS.PRIMARY,
            padding: 15,
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.WHITE, fontFamily: "Inter_300Light" }}>
            {loginText}
          </Text>
        </TouchableHighlight>

        <Text
          style={{
            textAlign: "center",
            color: COLORS.DARK_GRAY,
            marginBottom: 20,
            fontFamily: "Inter_300Light",
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
          <Text style={{ fontFamily: "Inter_300Light" }}>New for here? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: COLORS.PRIMARY,
                fontWeight: "bold",
                fontFamily: "Inter_300Light",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
