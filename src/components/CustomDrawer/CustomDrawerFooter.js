import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawerFooter = () => {
  return (
    <View style={{ padding: 20, borderTopColor: "#F8F8F8", borderTopWidth: 1 }}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <FontAwesome name="info-circle" size={18} color="black" />
          <Text style={{ fontSize: 15, marginLeft: 5 }}>Configuration</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <FontAwesome name="cog" size={18} color="black" />
          <Text style={{ fontSize: 15, marginLeft: 5 }}>About Us</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerFooter;
