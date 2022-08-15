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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { db } from "../firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";

const aboutRef = ref(getDatabase(), "about");

function ServiceDescription({ navigation, route }) {
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

  const { Name, Description, Location, Phone } = route.params;

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
            accessibilityRole="header"
          >
            {Name}
          </Text>
          <SafeAreaView>
            <ScrollView style={styles.scrollViewServiceList}>
              <Text
                style={
                  mode == "light" ? styles.subtitle_light : styles.subtitle_dark
                }
              >
                Description
              </Text>

              <Text
                style={
                  mode == "light"
                    ? styles.bodyTextCoursePage_light
                    : styles.bodyTextCoursePage_dark
                }
              >
                {" "}
                {Description}
              </Text>

              <Text
                style={
                  mode == "light" ? styles.subtitle_light : styles.subtitle_dark
                }
              >
                {" "}
                Location
              </Text>
              <Text
                style={
                  mode == "light"
                    ? styles.bodyTextCoursePage_light
                    : styles.bodyTextCoursePage_dark
                }
              >
                {Location}
              </Text>

              <Text
                style={
                  mode == "light" ? styles.subtitle_light : styles.subtitle_dark
                }
              >
                {" "}
                Phone
              </Text>
              <Text
                style={
                  mode == "light"
                    ? styles.bodyTextCoursePage_light
                    : styles.bodyTextCoursePage_dark
                }
              >
                {Phone}
              </Text>
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

export default ServiceDescription;
