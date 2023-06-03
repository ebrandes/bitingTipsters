import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../pages/feed/Feed";
import MyTipstersFeed from "../pages/my-tipsters-feed/MyTipstersFeed";
import { COLORS } from "../constants/Colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: COLORS.HIGHLIGHT,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.PRIMARY,
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
          tabBarIcon: ({ color, focused, size = 18 }) => {
            if (focused) {
              return <FontAwesome name="feed" size={size} color={color} />;
            } else {
              return <FontAwesome name="feed" size={size} color={color} />;
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
        component={MyTipstersFeed}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
