import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSvg from "../../../assets/logo-betwise.svg";
import { COLORS } from "../../constants/Colors";
import { useState } from "react";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState(props.email ?? "");

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 40 }}>
      <View style={{ marginVertical: 30 }}>
        <View style={{ marginTop: 30 }}>
          <LogoSvg width={150} height={80} />

          <View>
            <Text>
              Insira o seu email e enviaremos um link para você voltar a acessar
              a sua conta.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: COLORS.GRAY,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginVertical: 40,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={COLORS.GRAY}
              style={{ marginRight: 5, marginTop: 4 }}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              style={{
                flex: 1,
                paddingVertical: 0,
                fontFamily: "Inter_300Light",
              }}
            />
          </View>

          <TouchableHighlight
            onPress={() => {}}
            style={{
              backgroundColor: COLORS.PRIMARY,
              padding: 15,
              alignItems: "center",
              borderRadius: 10,
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
