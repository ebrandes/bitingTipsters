import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabs from "../pages/home-tabs/HomeTabs";
import MyTipsters from "../pages/my-tipsters/MyTipsters";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/Colors";
import { ROUTES } from "../constants/Routes";

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
      initialRouteName={ROUTES.FEED}
    >
      <Drawer.Screen
        options={{
          drawerActiveTintColor: COLORS.PRIMARY,
          drawerActiveBackgroundColor: COLORS.LIGHT_GRAY,
          title: "Jogos do dia",
          drawerIcon: ({ color }) => (
            <FontAwesome name="feed" size={18} color={COLORS.PRIMARY} />
          ),
        }}
        name={ROUTES.FEED}
        component={HomeTabs}
      />

      <Drawer.Screen
        name={ROUTES.MY_TIPSTERS}
        component={MyTipsters}
        options={{
          title: "My Tipsters Feed",
          drawerIcon: ({ color }) => (
            <FontAwesome name="users" size={18} color={COLORS.PRIMARY} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
