import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
  useWindowDimensions,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { COLORS } from "../../constants/Colors";
import { Text } from "react-native";
import CardGame from "../../components/CardGame/CardGame";
import { addDays, subDays, format, setDate } from "date-fns";
import { useEffect, useRef, useState } from "react";
import Animated from "react-native-reanimated";
import { Button, FAB } from "@rneui/themed";
var ptBrLocale = require("date-fns/locale/pt-BR");

const Feed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    const index = viewableItems[0].index;
    // const copy = [...dates];
    // copy.map((c) => (c.selected = false));
    // copy[index].selected = true;
    // setDates(copy);
    setCurrentIndex(index);
  }).current;

  const slidesRef = useRef(null);

  const scrollToIndex = (index) => {
    slidesRef?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const [dates, setDates] = useState([
    {
      day: subDays(new Date(), 1),
      selected: false,
      index: 0,
    },
    {
      day: new Date(),
      selected: true,
      index: 1,
    },
    {
      day: addDays(new Date(), 1),
      selected: false,
      index: 2,
    },
  ]);

  return (
    <View>
      <ScrollView>
        <View
          onLayout={() => scrollToIndex(1)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 100,
          }}
        >
          <View
            style={{
              width,
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
            {dates.map((date, i) => (
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  borderBottomColor: COLORS.PRIMARY,
                  borderBottomWidth: date.index === currentIndex ? 3 : 0,
                }}
                onPress={() => {
                  // const copy = [...dates];
                  // copy.map((c) => (c.selected = false));
                  // copy[i].selected = !copy[i].selected;
                  // setDates(copy);
                  //scrollToIndex(i);
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
                  <Text
                    style={{
                      fontWeight:
                        date.index === currentIndex ? "bold" : "normal",
                      textTransform: "capitalize",
                      color: date.selected ? COLORS.PRIMARY : COLORS.DARK_GRAY,
                    }}
                  >
                    {format(date.day, "EEEEEE", { locale: ptBrLocale })}
                  </Text>
                  <Text
                    style={{
                      color:
                        date.index === currentIndex
                          ? COLORS.PRIMARY
                          : COLORS.DARK_GRAY,
                      fontWeight:
                        date.index === currentIndex ? "bold" : "normal",
                      fontSize: 24,
                    }}
                  >
                    {format(date.day, "d", { locale: ptBrLocale })}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <Animated.FlatList
            data={dates}
            horizontal
            pagingEnabled
            bounces={false}
            automaticallyAdjustsScrollIndicatorInsets
            showsHorizontalScrollIndicator
            renderItem={({ item }) => (
              <View style={{ flex: 1, alignSelf: "stretch", width }}>
                <CardGame disabled={true} />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
              </View>
            )}
            scrollEventThrottle={32}
            keyExtractor={(item) => item.day}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            init
          />
        </View>
      </ScrollView>
      <View
        style={{
          position: "relative",
          left: 0,
          right: 0,
          bottom: 45,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <FAB
          style={{
            position: "absolute",
            zIndex: 2,
          }}
          visible={true}
          title="Hide"
          icon={{ name: "delete", color: "white" }}
          color="red"
        />
      </View>
    </View>
  );
};

export default Feed;
