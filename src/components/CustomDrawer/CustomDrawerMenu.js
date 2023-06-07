import { EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { ROUTES } from "../../constants/Routes";
import { TouchableOpacity, View, Text } from "react-native";
import { COLORS } from "../../constants/Colors";
import { useState } from "react";

const CustomDrawerMenu = (props) => {
  const [arrayOfMenus, setArrayOfMenus] = useState([
    {
      label: "Feed",
      route: ROUTES.FEED,
      icon: <FontAwesome name="feed" size={18} />,
      opened: false,
    },
    // {
    //   label: "My tipster place",
    //   route: ROUTES.MY_TIPSTERS,
    //   icon: <Feather name="users" size={16} />,
    //   opened: false,
    //   submenus: [
    //     {
    //       label: "Bet",
    //       route: "BET",
    //       icon: "",
    //     },
    //     {
    //       label: "My Bets",
    //       route: "MYBETS",
    //       icon: "",
    //     },
    //   ],
    // },
  ]);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: COLORS.WHITE,
      }}
    >
      {arrayOfMenus.map((menu, i) => (
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: "row",
            }}
            onPress={() => {
              const newMenu = [...arrayOfMenus];
              newMenu[i].opened = !menu.opened;
              setArrayOfMenus(newMenu);

              if (!menu.submenus) {
                props.navigation.navigate(menu.route);
              }
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: menu.icon ? 0 : 15,
              }}
            >
              {menu.icon}
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                {menu.label}
              </Text>

              <View
                style={{
                  alignSelf: "center",
                }}
              >
                {menu.submenus && (
                  <View>
                    {menu.opened ? (
                      <EvilIcons name="chevron-up" size={18} />
                    ) : (
                      <EvilIcons name="chevron-down" size={18} />
                    )}
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ flex: 0 }}>
            {menu.opened &&
              menu.submenus &&
              menu.submenus.map((submenu) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.LIGHT_GRAY,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    paddingLeft: 35,
                    flexDirection: "row",
                  }}
                  onPress={() => {
                    props.navigation.navigate(submenu.route);
                  }}
                >
                  {submenu.icon}
                  <Text
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    {submenu.label}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default CustomDrawerMenu;
