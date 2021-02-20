import { format, addDays, getDate, startOfWeek, isSameDay } from "date-fns";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { onChange } from "react-native-reanimated";

const WeekCalendar = ({ date, onChange }) => {
  const [week, setWeek] = useState([]);
  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  return (
    <View style={styles.container}>
      {week.map((weekDay) => {
        const textStyles = [styles.label];
        const touchable = [styles.touchable];
        const textWhite = [styles.weekDayText];
        const sameDay = isSameDay(weekDay.date, date);
        if (sameDay) {
          textStyles.push(styles.selectedLabel);
          touchable.push(styles.selectedTouchable);
          textWhite.push(styles.selectedLabel);
        }
        return (
          <View style={styles.weekDayItem} key={weekDay.formatted}>
            <TouchableOpacity onPress={() => onChange(weekDay.date)} style={touchable}>
              <Text style={textWhite}>{weekDay.formatted}</Text>
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  weekDayText: {
    fontSize: 12,
    color: "#18375C",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    textAlign: "center",
    color: "#18375C",
  },
  selectedLabel: {
    color: "white",
  },
  touchable: {
    width:48,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  selectedTouchable: {
    backgroundColor: "#254A73",
  },
  weekDayItem: {
    justifyContent: "center",
    alignItems: "center",
  },
});

let WeekDay = {
  formatted: String,
  date: Date,
  day: Number,
};

//get week days
export const getWeekDays = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, "EEE"),
      date,
      day: getDate(date),
    });
  }
  return final;
};

export default WeekCalendar;
