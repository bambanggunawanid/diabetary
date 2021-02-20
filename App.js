import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { addDays } from "date-fns";

// Icon
import iconHome from "./icons/bold/home.png";
import iconLogo from "./icons/bold/logo.png";
import iconNotification from "./icons/bold/notification.png";
import iconHomeOutline from "./icons/outline/home.png";
import iconHeartOutline from "./icons/outline/heart.png";
import iconConsultOutline from "./icons/outline/chat.png";
import iconProfileOutline from "./icons/outline/profile.png";

// Component
import WeekCalendar from "./WeekCalendar";

// Color
const biru900 = "#132743";
const biru800 = "#18375C";
const biru700 = "#1D4168";
const biru600 = "#254A73";
const biru500 = "#2C517B";

export default function App() {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        {/* Container Header Home */}
        <View
          style={{
            height: 56,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <View>
            <Image source={iconLogo} style={{ width: 28, height: 28 }} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", color: biru800 }}>HOME</Text>
          </View>
          <View>
            <Image
              source={iconNotification}
              style={{ width: 28, height: 28 }}
            />
          </View>
        </View>
        {/* End Container Header Home */}

        {/* Start Week Calendar */}
        <View style={{ flex: 1 }}>
          <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
        </View>
        {/* End Week Calendar */}
      </View>
      {/* Container Bottom Navbar */}
      <View
        style={{ height: 56, backgroundColor: "white", flexDirection: "row" }}
      >
        {/* Home */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <Image source={iconHome} style={{ width: 28, height: 28 }} />
          </View>
          <Text style={{ fontSize: 10, color: biru800, fontWeight: "bold" }}>
            Home
          </Text>
        </View>
        {/* Dietary */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <Image
              source={iconHeartOutline}
              style={{ width: 28, height: 28 }}
            />
          </View>
          <Text style={{ fontSize: 10, color: biru800 }}>Dietary</Text>
        </View>
        {/* Consult */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <Image
              source={iconConsultOutline}
              style={{ width: 28, height: 28 }}
            />
          </View>
          <Text style={{ fontSize: 10, color: biru800 }}>Consult</Text>
        </View>
        {/* Profile */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <Image
              source={iconProfileOutline}
              style={{ width: 28, height: 28 }}
            />
          </View>
          <Text style={{ fontSize: 10, color: biru800 }}>Profile</Text>
        </View>
      </View>
      {/* End Bottom Navbar */}
    </SafeAreaView>
  );
}
