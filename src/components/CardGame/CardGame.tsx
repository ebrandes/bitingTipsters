import { Badge, Card } from "@rneui/themed";
import { Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/Colors";
import React from "react";
import GremioLogo from "../../../assets/gremio.svg";
import { Image } from "react-native";

const CardGame = ({ disabled, selected }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ borderTopWidth: 0 }}>
      <Card
        containerStyle={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: selected ? COLORS.HIGHLIGHT : COLORS.TRANSPARENT,
          paddingBottom: 0,
          backgroundColor: disabled ? COLORS.LIGHT_GRAY : COLORS.WHITE,
        }}
      >
        {selected && (
          <Badge
            containerStyle={{ position: "absolute", top: 0, left: 0 }}
            badgeStyle={{ backgroundColor: COLORS.HIGHLIGHT, width: 40 }}
          />
        )}
        <Card.Title
          style={{
            fontWeight: "bold",
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
            borderBottomColor: COLORS.GRAY,
            borderBottomWidth: 0.4,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexBasis: "25%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logo-internacional.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ marginTop: 5, fontSize: 12, fontWeight: "bold" }}>
              Internacional
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexBasis: "50%",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 25,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: COLORS.DARK_GRAY,
              }}
            >
              Vitória - Grêmio
            </Text>
            <Text style={{ fontSize: 10, color: COLORS.DARK_GRAY }}>
              Data: 04/06 `as 16:30h
            </Text>
          </View>
          <View
            style={{
              flexBasis: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GremioLogo width={50} height={50} />
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Independente Del Vale
            </Text>
          </View>
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
              paddingLeft: 5,
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
              marginRight: 5,
            }}
          >
            <Text
              style={{
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: COLORS.LIGHT_GRAY,
                backgroundColor: COLORS.LIGHT_GRAY,
                color: COLORS.DARK_GRAY,
                textAlign: "right",
              }}
            >
              Pending
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CardGame;
