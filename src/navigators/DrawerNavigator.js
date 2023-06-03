import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabs from "../pages/home/Home";
import MyTipsters from "../pages/my-tipsters/MyTipsters";
import CustomDrawer from "./CustomDrawer";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        headerTintColor: COLORS.WHITE,
        headerShown: true,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto",
          fontSize: 15,
        },
        drawerActiveTintColor: COLORS.SECUNDARY,
      }}
      initialRouteName="HomeTabs"
    >
      <Drawer.Screen
        options={{
          title: "Timeline",
          drawerIcon: ({ color }) => (
            <FontAwesome name="feed" size={18} color={COLORS.PRIMARY} />
          ),
        }}
        name="HomeTabs"
        component={HomeTabs}
      />

      <Drawer.Screen
        name="My Tipsters"
        component={MyTipsters}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="users" size={18} color={COLORS.PRIMARY} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
