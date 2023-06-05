import { addDays, format, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/Colors";
import PageTitle from "../PageTitle/PageTitle";
import { Card } from "@rneui/base";

const DateSlider = () => {
  const [dates] = useState([
    subDays(new Date(), 1),
    new Date(),
    addDays(new Date(), 1),
  ]);
  const [selectedDate, setSelectedDate] = useState(dates[1]);

  useEffect(() => console.log(selectedDate), [selectedDate]);

  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      <PageTitle>IA Tips</PageTitle>

      <View style={styles.container}>
        {dates.map((date, i) => {
          const parsedDate = format(date, "EEE");
          return (
            <TouchableOpacity key={i} onPress={() => setSelectedDate(date)}>
              <View
                style={date === selectedDate ? styles.selectedRow : styles.row}
              >
                <Text style={styles.day}>{parsedDate}</Text>
                <Text style={styles.day}>{date.getDate()}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        {dates.map((_, i) => (
          <Card key={i}>
            <View style={{ paddingVertical: 0 }}>
              <Card.Title
                style={{
                  textAlign: "left",
                  marginTop: 5,
                  fontSize: 22,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                Grêmio v Inter
              </Card.Title>
              <Text style={styles.info}>Brazil - Brazilian Serie A</Text>
              <Text style={{ ...styles.info, fontWeight: "bold" }}>
                Money Line - Grêmio
              </Text>
              <Text style={styles.info}>Date: 04/06/2023</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Text style={{ fontSize: 18 }}>Min ODD</Text>
                  <Text style={styles.important}>1.7</Text>
                </View>
                <View style={{ width: "40%" }}>
                  <Text style={{ fontSize: 18 }}>Status</Text>
                  <Text
                    style={{ ...styles.important, color: COLORS.HIGHLIGHT }}
                  >
                    Green
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default DateSlider;

const day = { color: COLORS.WHITE, alignItems: "center", textAlign: "center" };
const row = {
  margin: 5,
  backgroundColor: COLORS.PRIMARY,
  fontFamily: "Roboto",
  padding: 10,
  width: 50,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  row: {
    ...row,
  },
  day: {
    ...day,
  },
  selectedRow: {
    ...row,
    width: 60,
    height: 60,
    borderColor: COLORS.HIGHLIGHT,
    borderWidth: 3,
  },
  info: {
    color: COLORS.DARK_GRAY,
  },
  important: {
    color: COLORS.BLACK,
    fontWeight: "bold",
    fontSize: 18,
  },
});
