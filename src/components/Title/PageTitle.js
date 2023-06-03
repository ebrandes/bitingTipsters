import { Text, View } from "react-native";

const PageTitle = ({ children, ...props }) => {
  return (
    <View
      style={{
        padding: 10,
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: "#000",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
};

export default PageTitle;
