import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTipsters from "../pages/my-tipsters/MyTipsters";
import Feed from "../pages/feed/Feed";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarInactiveBackgroundColor: "#9fe801",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#171626",
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 4,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <FontAwesome name="feed" size={18} color={color} />;
            } else {
              return <FontAwesome name="feed" size={18} color={color} />;
            }
          },
        }}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <FontAwesome name="users" size={18} color={color} />;
            } else {
              return <FontAwesome name="users" size={18} color={color} />;
            }
          },
        }}
        name="My Tipsters"
        component={MyTipsters}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
