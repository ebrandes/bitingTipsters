import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTipsters from "../pages/my-tipsters/MyTipsters";
import Feed from "../pages/feed/Feed";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="My Tipsters" component={MyTipsters} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
