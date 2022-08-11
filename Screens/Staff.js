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
import { db } from "../firebase-config";
import { getDatabase, get, ref, val } from "firebase/database";
import { styles } from "../style/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const staffRef = ref(getDatabase(), "about/staff");

let staffList = [];

get(staffRef).then((snapshot) => {
  snapshot.forEach((item) => {
    const temp = item.val().split(":");
    staffList.push(temp);
  });
});

function Staff({ navigation }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);
  const [subtitleSize, setSubtitleSize] = useState(fontSize.subtitleSize);

  // Update the app Incase the theme mode changes / font size changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setButtonSize(fontSize.buttonSize);
  }, [fontSize]);

  useEffect(() => {
    setBodySize(fontSize.bodySize);
  }, [fontSize]);

  useEffect(() => {
    setSubtitleSize(fontSize.subtitleSize);
  }, [fontSize]);

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
            style={
              [mode == "light" ? styles.heading_light : styles.heading_dark, {fontSize: subtitleSize}]
            }
            accessibilityRole="header"
          >
            Staff Members
          </Text>
          {/* Staff Members Description */}
          {staffList.map((item) => (
            <Text
              style={
                [mode == "light" ? styles.bodyTextStaff_light : styles.bodyTextStaff_dark, {fontSize: bodySize}]
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
