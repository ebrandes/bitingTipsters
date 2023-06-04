import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  subDays,
} from "date-fns";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import { COLORS } from "../../constants/Colors";
import { Card } from "react-native-elements";
import PageTitle from "../Title/PageTitle";

const DateSlider = () => {
  const dates = eachWeekOfInterval(
    {
      start: subDays(new Date(), 14),
      end: addDays(new Date(), 14),
    },
    {
      weekStartsOn: 1,
    }
  ).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []);

  console.log(dates);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <PageTitle>IA Tips</PageTitle>
      <PagerView
        style={{
          padding: 25,
          borderRadius: 10,
          marginTop: 0,
          backgroundColor: COLORS.PRIMARY,
        }}
      >
        {dates.map((week, i) => (
          <View key={i}>
            <View style={styles.row}>
              {week.map((day, index) => {
                const txt = format(day, "EEE");
                return (
                  <TouchableOpacity
                    key={day}
                    style={{ padding: 5 }}
                    onPress={() => {}}
                  >
                    <View>
                      <Text
                        style={{
                          color: index === 0 ? COLORS.HIGHLIGHT : COLORS.WHITE,
                        }}
                      >
                        {txt}
                      </Text>
                      <Text
                        style={{
                          ...styles.day,
                          color: index === 0 ? COLORS.HIGHLIGHT : COLORS.WHITE,
                        }}
                      >
                        {day.getDate()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </PagerView>

      <View>
        <Card>
          <View style={{ paddingVertical: 5 }}>
            <Text style={{ textAlign: "center" }}>22/05 as 16hrs</Text>
            <Text style={{ textAlign: "center", marginTop: 5 }}>
              Brazil - Brasileirão Serie A
            </Text>
            <Card.Title
              style={{ marginTop: 5, fontWeight: "bold", marginBottom: 5 }}
            >
              Grëmio v Inter
            </Card.Title>
            <Text style={{ textAlign: "center" }}>
              Asian Handicap +0.25 Grêmio
            </Text>
            <Text style={{ textAlign: "center", marginTop: 5 }}>
              Min Odd: 1.6
            </Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default DateSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    fontFamily: "Roboto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  day: {
    color: COLORS.WHITE,
    alignItems: "center",
    textAlign: "center",
  },
});
