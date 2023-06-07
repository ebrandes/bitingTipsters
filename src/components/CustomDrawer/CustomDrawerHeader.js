import { Avatar } from "@rneui/themed";
import { Text } from "react-native";
import { View } from "react-native";
import { COLORS } from "../../constants/Colors";

const CustomDrawerHeader = () => {
  return (
    <View style={{ marginHorizontal: 20, flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <Avatar
          size={45}
          rounded
          title="EB"
          titleStyle={{ color: COLORS.WHITE }}
          containerStyle={{ backgroundColor: COLORS.PRIMARY }}
        />
        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={{ fontFamily: "Inter_300Light", fontWeight: "bold" }}>
            Eduardo Brandes
          </Text>
          <Text style={{ fontSize: 12 }}>0 unidades</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "flex-end",
          borderTopColor: COLORS.LIGHT_GRAY,
          borderTopWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 5,
            fontWeight: "bold",
            color: COLORS.DARK_GRAY,
          }}
        >
          10 <Text style={{ fontWeight: "normal" }}>seguindo</Text>
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: COLORS.DARK_GRAY,
            fontSize: 12,
          }}
        >
          120 <Text style={{ fontWeight: "normal" }}>seguidores</Text>
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawerHeader;
