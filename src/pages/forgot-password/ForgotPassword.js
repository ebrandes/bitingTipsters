import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSvg from "../../../assets/logo-betwise.svg";
import InputDefault from "../../components/InputDefault/InputDefault";
import { COLORS } from "../../constants/Colors";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState(props.email ?? "");

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 40 }}>
      <View style={{ marginVertical: 30 }}>
        <View style={{ marginTop: 30 }}>
          <LogoSvg width={150} height={80} />

          <Text
            style={{
              marginBottom: 20,
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "Inter_300Light",
            }}
          >
            Esqueceu sua senha?
          </Text>

          <View>
            <Text>
              Insira o seu email e enviaremos um link para você voltar a acessar
              a sua conta.
            </Text>
          </View>

          <InputDefault
            keyboardType="email-address"
            leftIcon={{
              size: 18,
              type: "material-icons",
              name: "alternate-email",
              color: COLORS.GRAY,
            }}
            errorMessage={true ? "Email inválido" : ""}
            placeholder="Email"
          />

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
              Enviar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
