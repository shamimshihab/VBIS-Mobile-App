import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
import { db } from "../firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";

const programsRef = ref(getDatabase(), "programs");

class Program {
  constructor(
    name,
    description,
    inperson,
    online,
    start,
    end,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday
  ) {
    this.name = name;
    this.description = description;
    this.inperson = inperson;
    this.online = online;
    this.start = start;
    this.end = end;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
  }
}

let programList = [];
get(programsRef).then((snapshot) => {
  snapshot.forEach((item) => {
    const temp = new Program(
      item.val().name,
      item.val().description,
      item.val().inperson,
      item.val().online,
      item.val().start,
      item.val().end,
      item.val().monday,
      item.val().tuesday,
      item.val().wednesday,
      item.val().thursday,
      item.val().friday
    );
    programList.push(temp);
  });
});

function Programs({ navigation }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [subtitleSize, setSubtitleSize] = useState(fontSize.subtitleSize);

  // Update the app Incase the theme mode changes / font size changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setButtonSize(fontSize.buttonSize);
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
          {/* Heading*/}
          <Text
            style={
              [mode == "light" ? styles.heading_light : styles.heading_dark, {fontSize: subtitleSize}]
            }
          >
            {" "}
            Programs{" "}
          </Text>
          {/* List of Programs*/}
          <SafeAreaView>
            <ScrollView style={styles.scrollViewProgramPage}>
              {programList.map((item) => (
                <View
                  key={item.name}
                  accessible={true}
                  accessibilityRole="button"
                  accessibilityLabel={item.name}
                  accessibilityHint="See the details of this program"
                >
                  <Pressable
                    style={
                      mode == "light"
                        ? styles.itemButton_light
                        : styles.itemButton_dark
                    }
                    onPress={() =>
                      navigation.navigate("COURSE", {
                        ID: item.name,
                        Desc: item.description,
                        InPer: item.inperson,
                        Online: item.online,
                        StartTime: item.start,
                        EndTime: item.end,
                        Monday: item.monday,
                        Tuesday: item.tuesday,
                        Wednesday: item.wednesday,
                        Thursday: item.thursday,
                        Friday: item.friday,
                      })
                    }
                  >
                    <Text
                      style={
                        [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
                      }
                    >
                      {item.name}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Programs;
