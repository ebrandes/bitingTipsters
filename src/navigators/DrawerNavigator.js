import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../pages/feed/Feed";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Feed"
        component={Feed}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
