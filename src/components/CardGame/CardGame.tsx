import { Card } from "@rneui/themed";
import { Image, Text, View } from "react-native";
import { COLORS } from "../../constants/Colors";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardGame = ({ disabled }) => {
  return (
    <TouchableOpacity disabled={disabled}>
      <Card
        containerStyle={{
          borderRadius: 4,
          borderWidth: 0,
          paddingBottom: 0,
          opacity: disabled ? 0.4 : 1,
          backgroundColor: disabled ? COLORS.GRAY : COLORS.WHITE,
        }}
      >
        <Card.Title
          style={{
            fontWeight: "normal",
            fontSize: 12,
            color: COLORS.PRIMARY,
            borderBottomColor: COLORS.LIGHT_GRAY,
            borderBottomWidth: 1,
            paddingBottom: 10,
            paddingHorizontal: 20,
          }}
        >
          Brasil - Brasileirão Serie A
        </Card.Title>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderBottomColor: COLORS.GRAY,
            borderBottomWidth: 0.4,
            paddingBottom: 20,
          }}
        >
          <Image
            style={{ width: 60, height: 60, backgroundColor: COLORS.WHITE }}
            source={require("../../../assets/logo-gremio.png")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 25,
            }}
          >
            <Text style={{ fontSize: 10, color: COLORS.DARK_GRAY }}>
              Money Line - Grêmio
            </Text>
            <Text style={{ fontSize: 10, color: COLORS.DARK_GRAY }}>
              Data: 04/06 `as 16:30h
            </Text>
          </View>
          <Image
            style={{ width: 60, height: 60, backgroundColor: COLORS.WHITE }}
            source={require("../../../assets/logo-gremio.png")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "stretch",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 10,
              paddingHorizontal: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.PRIMARY,
                paddingRight: 20,
              }}
            >
              ODD mínima
            </Text>
            <Text
              style={{
                color: COLORS.PRIMARY,
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              1.77
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              alignSelf: "center",
              alignItems: "flex-end",
              marginRight: 25,
            }}
          >
            <Text
              style={{
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: COLORS.LIGHT_GRAY,
                backgroundColor: COLORS.HIGHLIGHT,
                color: COLORS.GREEN,
                textAlign: "right",
              }}
            >
              Green
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CardGame;
