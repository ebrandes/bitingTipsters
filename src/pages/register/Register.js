import { SafeAreaView } from "react-native-safe-area-context";
import LogSvg from "@assets/logo-betwise.svg";
import { Input } from "@rneui/base";

const Register = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 40, alignItems: "center" }}>
      <LogSvg width={200} />
      <Input />
    </SafeAreaView>
  );
};

export default Register;
