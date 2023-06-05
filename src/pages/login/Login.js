import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSvg from "../../../assets/logo-betwise.svg";
import { COLORS } from "../../constants/Colors";
import { ROUTES } from "../../constants/Routes";
import InputDefault from "../../components/InputDefault/InputDefault";

const Login = ({ navigation }) => {
  const [loginText, setLoginText] = useState("Login");

  const doLogin = () => {
    setLoginText("Wait...");
    setTimeout(() => {
      setLoginText("Login");
      navigation.navigate(ROUTES.HOME);
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 40 }}>
        <View style={{ alignItems: "center" }}>
          <LogoSvg width={200} />
        </View>

        <InputDefault
          keyboardType="email-address"
          leftIcon={{
            size: 18,
            type: "material-icons",
            name: "alternate-email",
            color: COLORS.GRAY,
          }}
          errorMessage={false ? "Email inválido" : ""}
          placeholder="Email"
        />

        <InputDefault
          secureTextEntry={true}
          placeholder="Password"
          errorMessage={false ? "Password inválido" : ""}
          leftIcon={{
            type: "ionicon",
            size: 20,
            name: "lock-closed-outline",
            color: COLORS.GRAY,
          }}
          rightIcon={
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
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
          }
        />

        <TouchableHighlight
          onPress={doLogin}
          disabled={loginText === "Wait..."}
          style={{
            backgroundColor: COLORS.PRIMARY,
            padding: 15,
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 25,
            marginTop: 30,
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
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
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
