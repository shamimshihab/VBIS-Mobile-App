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

import { styles } from "../style/styles";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
// redux hooks
import { useSelector, useDispatch } from "react-redux";
// actions
import { switchMode } from "../redux-store/actions";
// component state management
import { useEffect, useState } from "react";

function Settings({ navigation }) {
  // get the current theme
  const theme = useSelector((state) => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();
  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  // Handle changing the theme mode
  const handleThemeChange = () => {
    dispatch(switchMode(theme.mode === "light" ? "dark" : "light"));
  };

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  const themeChangerTextOnPress = function (mode) {
    if (mode == "light") {
      return "Switch to  dark mode";
    } else {
      return " Switch to light mode";
    }
  };

  return (
    <View
      style={
        mode == "light" ? styles.appContainer_light : styles.appContainer_dark
      }
    >
      <View style={styles.headerContainer}>
        <TopHeader navigation={navigation} />
      </View>
      <View style={styles.middleContainer}>
        <View>
          <Text
            style={mode == "light" ? styles.heading_light : styles.heading_dark}
          >
            {" "}
            Settings{" "}
          </Text>
          <View style={styles.themeChange}>
            <Text
              style={
                mode == "light" ? styles.bodyText_light : styles.bodyText_dark
              }
            >
              You are on {theme.mode} mode!
            </Text>
            <Pressable
              onPress={handleThemeChange}
              style={
                mode == "light"
                  ? styles.themeChangeButton_light
                  : styles.themeChangeButton_dark
              }
            >
              <Text
                style={
                  mode == "light"
                    ? styles.buttonText_light
                    : styles.buttonText_dark
                }
              >
                {themeChangerTextOnPress(mode)}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Settings;
