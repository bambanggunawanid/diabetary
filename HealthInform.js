import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HealthInform() {
  return (
    <View style={styles.container}>
        <View style={styles.containerRow}>
            <View style={styles.dotPink}></View>
                <View style={styles.containerColumn}>
                <Text style={styles.textSmall}>Diabetes</Text>
                <Text style={styles.textMedium}>Tipe 2</Text>
            </View>
        </View>

        <View style={styles.containerRow}>
            <View style={styles.dotRed}></View>
                <View style={styles.containerColumn}>
                <Text style={styles.textSmall}>Tertinggi</Text>
                <Text style={styles.textMedium}>235mg/dL</Text>
            </View>
        </View>

        <View style={styles.containerRow}>
            <View style={styles.dotBlue}></View>
                <View style={styles.containerColumn}>
                <Text style={styles.textSmall}>Kalori Harian</Text>
                <Text style={styles.textMedium}>2400kkal</Text>
            </View>
        </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection:'row',
    justifyContent:"center"
  },
  containerRow: {
    flexDirection: "row",
    marginHorizontal:12
  },
  containerColumn: {
    flexDirection: "column",
  },
  textSmall: {
    fontSize: 10,
},
  textMedium: {
    fontSize: 12,
},
dotBlue: {
    width: 8,
    height: 8,
    borderRadius: 20,
    margin:4,
    backgroundColor: "skyblue"
  },
dotPink:{
    width: 8,
    height: 8,
    borderRadius: 20,
    margin:4,
    backgroundColor: "pink"
  },
  dotRed:{
    width: 8,
    height: 8,
    borderRadius: 20,
    margin:4,
    backgroundColor:"red"
  }
});
