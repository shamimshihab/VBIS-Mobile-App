import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import TopHeader from "../Components/TopHeader";

import Footer from "../Components/Footer";
import { styles } from "../style/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { staffList } from "../Database/firebase.js";

function Staff({ navigation }) {
  // get the current theme

  const theme = useSelector((state) => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);
  return (
    <View
      style={
        mode == "light" ? styles.appContainer_light : styles.appContainer_dark
      }
    >
      {/* Top Header(VBIS logo, Settings, Tuitorial)*/}
      <View style={styles.headerContainer}>
        <TopHeader navigation={navigation} />
      </View>

      <View style={styles.middleContainer}>
        <View>
          {/* Heading */}
          <Text
            style={mode == "light" ? styles.heading_light : styles.heading_dark}
            accessibilityRole="header"
          >
            Staff Members
          </Text>
          {/* Staff Members Description */}
          {staffList.map((item) => (
            <Text
              style={
                mode == "light"
                  ? styles.bodyTextStaff_light
                  : styles.bodyTextStaff_dark
              }
              key={item[0]}
              accessible={true}
              accessibilityRole="text"
            >
              <Text style={{ fontWeight: "bold" }}>{item[0]}: </Text>
              <Text>{item[1]}</Text>
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Staff;
