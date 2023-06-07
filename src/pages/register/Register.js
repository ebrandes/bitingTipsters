import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSvg from "../../../assets/logo-betwise.svg";
import InputDefault from "../../components/InputDefault/InputDefault";
import { COLORS } from "../../constants/Colors";
import { phoneMaskInput } from "../../utils/Masks";
import CheckboxDefault from "../../components/Checkbox/Checkbox";

const Register = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [phone, setPhone] = useState("");
  const phoneMask = phoneMaskInput(phone, setPhone);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <LogoSvg width={200} height={90} />
      </View>

      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontFamily: "Inter_300Light",
            paddingHorizontal: 40,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Crie sua conta grátis e comece a apostar agora mesmo
        </Text>
      </View>

      <View style={{ marginHorizontal: 40 }}>
        <InputDefault
          autoCapitalize={"words"}
          leftIcon={{
            size: 18,
            type: "antdesign",
            name: "user",
            color: COLORS.GRAY,
          }}
          placeholder="Nome Completo"
        />

        <InputDefault
          keyboardType="email-address"
          leftIcon={{
            size: 18,
            type: "material-icons",
            name: "alternate-email",
            color: COLORS.GRAY,
          }}
          placeholder="Email"
        />

        <InputDefault
          keyboardType="phone-pad"
          leftIcon={{
            size: 18,
            type: "feather",
            name: "phone",
            color: COLORS.GRAY,
          }}
          placeholder="Telefone"
          {...phoneMask}
        />

        <InputDefault
          secureTextEntry={showPassword ? false : true}
          leftIcon={{
            type: "ionicon",
            size: 20,
            name: "lock-closed-outline",
            color: COLORS.GRAY,
          }}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text
                style={{
                  fontFamily: "Inter_300Light",
                  color: COLORS.PRIMARY,
                  fontWeight: "bold",
                }}
              >
                {showPassword ? (
                  <Entypo name="eye-with-line" size={20} />
                ) : (
                  <Entypo name="eye" size={20} />
                )}
              </Text>
            </TouchableOpacity>
          }
          placeholder="Senha"
        />

        <InputDefault
          secureTextEntry={true}
          leftIcon={{
            type: "ionicon",
            size: 20,
            name: "lock-closed-outline",
            color: COLORS.GRAY,
          }}
          placeholder="Confirme sua senha"
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckboxDefault
            onChange={() => setAcceptTerms(!acceptTerms)}
            checked={acceptTerms}
            title={""}
          />
          <Text style={{ paddingHorizontal: 15 }}>
            Eu concordo com os termos de{" "}
            {
              <Text
                style={{
                  color: COLORS.PRIMARY,
                  textDecorationLine: "underline",
                  textDecorationColor: COLORS.PRIMARY,
                }}
              >
                política
              </Text>
            }{" "}
            e
            <Text
              style={{
                color: COLORS.PRIMARY,
                textDecorationLine: "underline",
                textDecorationColor: COLORS.PRIMARY,
              }}
            >
              {" "}
              privacidade
            </Text>
          </Text>
        </View>

        <TouchableHighlight
          onPress={() => {}}
          style={{
            backgroundColor: COLORS.PRIMARY,
            padding: 15,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 25,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.WHITE, fontFamily: "Inter_300Light" }}>
            Registrar-se
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Register;
