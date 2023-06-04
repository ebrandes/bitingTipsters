import {
  addDays,
  eachWeekOfInterval,
  subDays,
  eachDayOfInterval,
} from "date-fns";
import { View, Text } from "react-native";

const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 14),
    end: subDays(new Date(), 14),
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

//console.log(dates);

const DateSlider = () => {
  return (
    <View>
      <Text>{}</Text>
    </View>
  );
};

export default DateSlider;
