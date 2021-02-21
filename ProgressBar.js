import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Donut from "./Donut";

const data = [
  {
    percentage: 150,
    color: "tomato",
    max: 500,
    radius: 84,
    strokeWidth: 20,
    unit:"mg/dL",
    header:"GULA DARAH",
  },
  {
    percentage: 1500,
    color: "skyblue",
    max: 3000,
    radius: 104,
    strokeWidth: 22,
    unit:"kkal",
    header:"KALORI SAAT INI",
  },
];

export default function ProgressBar() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {data.map((p, i) => {
          return (
            <Donut
              key={i}
              percentage={p.percentage}
              color={p.color}
              radius={p.radius}
              delay={1000}
              max={p.max}
              strokeWidth={p.strokeWidth}
              unit={p.unit}
              header={p.header}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 8,
    marginTop:-8
  },
});
