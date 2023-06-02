import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabs from "../pages/home/Home";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="HomeTabs"
    >
      <Drawer.Screen
        options={{ title: "Timeline" }}
        name="HomeTabs"
        component={HomeTabs}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
