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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";
import { programList } from "../Database/firebase.js";

function Programs({ navigation }) {
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
          {/* Heading*/}
          <Text
            style={mode == "light" ? styles.heading_light : styles.heading_dark}
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
                        mode == "light"
                          ? styles.buttonText_light
                          : styles.buttonText_dark
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
