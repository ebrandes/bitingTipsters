import { DrawerContentScrollView } from "@react-navigation/drawer";
import { StatusBar, View } from "react-native";
import { COLORS } from "../../constants/Colors";
import CustomDrawerFooter from "./CustomDrawerFooter";
import CustomDrawerHeader from "./CustomDrawerHeader";
import CustomDrawerMenu from "./CustomDrawerMenu";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />

      <DrawerContentScrollView
        style={{ padding: 0 }}
        {...props}
        contentContainerStyle={{ marginTop: 20, position: "relative" }}
      >
        <CustomDrawerHeader />

        <CustomDrawerMenu {...props} />
      </DrawerContentScrollView>

      <CustomDrawerFooter />
    </View>
  );
};

export default CustomDrawer;
