import { Text, View } from "react-native";
import { COLORS } from "../../constants/Colors";

const PageTitle = ({ children, ...props }) => {
  return (
    <View
      style={{
        padding: 20,
        width: "100%",
        display: "flex",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: "#000",
          fontWeight: "bold",
          fontFamily: "Roboto",
          paddingBottom: 5,
          borderBottomColor: COLORS.DARK_GRAY,
          borderBottomWidth: 1,
        }}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
};

export default PageTitle;
