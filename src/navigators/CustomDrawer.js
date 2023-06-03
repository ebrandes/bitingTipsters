import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground, View, Text, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../constants/Colors";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <ImageBackground
          source={require("../../assets/bg-menu.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../../assets/user-default.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: COLORS.WHITE }}>Eduardo Brandes</Text>
        </ImageBackground>
        <View
          style={{ flex: 1, backgroundColor: COLORS.WHITE, paddingTop: 10 }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{ padding: 20, borderTopColor: "#F8F8F8", borderTopWidth: 1 }}
      >
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
    </View>
  );
};

export default CustomDrawer;
