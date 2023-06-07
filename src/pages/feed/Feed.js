import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Text } from "react-native";
import CardGame from "../../components/CardGame/CardGame";

const Feed = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 60,
            backgroundColor: COLORS.LIGHT_GRAY,
            justifyContent: "center",
            flexDirection: "row",
            shadowColor: COLORS.BLACK,
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.DARK_GRAY }}>Sab</Text>
            <Text
              style={{
                color: COLORS.DARK_GRAY,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              22
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderBottomColor: COLORS.PRIMARY,
              borderBottomWidth: 3,
            }}
          >
            <Text style={{ color: COLORS.PRIMARY }}>Dom</Text>
            <Text
              style={{
                color: COLORS.PRIMARY,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              23
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.DARK_GRAY }}>Seg</Text>
            <Text
              style={{
                color: COLORS.DARK_GRAY,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              24
            </Text>
          </View>
        </View>

        <View>
          <CardGame />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Feed;
