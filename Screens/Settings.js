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
import { changeSize } from "../redux-store/fontActions";
import { BUTTON_FONT_CHANGE, BODY_FONT_CHANGE, SUBTITLE_FONT_CHANGE } from "../redux-store/fontConstants";

function Settings({ navigation }) {
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

  // Handle changing the theme mode
  const handleThemeChange = () => {
    dispatch(switchMode(theme.mode === "light" ? "dark" : "light"));
  };

  const handleFontSizeIncrease = () => {
    dispatch(changeSize(BUTTON_FONT_CHANGE, fontSize.buttonSize + 5 <= 25 ? buttonSize + 5 : buttonSize));
    dispatch(changeSize(BODY_FONT_CHANGE, fontSize.bodySize + 5 <= 30 ? bodySize + 5 : bodySize));
    dispatch(changeSize(SUBTITLE_FONT_CHANGE, fontSize.subtitleSize + 5 <= 35 ? subtitleSize + 5 : subtitleSize));
  };

  const handleFontSizeDecrease = () => {
    dispatch(changeSize(BUTTON_FONT_CHANGE, fontSize.buttonSize - 5 >= 16 ? buttonSize - 5 : buttonSize));
    dispatch(changeSize(BODY_FONT_CHANGE, fontSize.bodySize - 5 >= 19 ? bodySize - 5 : bodySize));
    dispatch(changeSize(SUBTITLE_FONT_CHANGE, fontSize.subtitleSize - 5 >= 29 ? subtitleSize - 5 : subtitleSize));
  };

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

  const themeChangerTextOnPress = function (mode) {
    if (mode == "light") {
      return "Switch to  dark mode";
    } else {
      return " Switch to light mode";
    }
  };

  // const fontSizeIncreaseTextOnPress = function (size) {
  //   return "INCREASE";
  // };

  // const fontSizeDecreaseTextOnPress = function (size) {
  //   return "DECREASE";
  // };

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
            style={
              [mode == "light" ? styles.heading_light : styles.heading_dark, {fontSize: subtitleSize}]
          }
          >
            {" "}
            Settings{" "}
          </Text>
          <View style={styles.themeChange}>
            <Text
              style={
                [mode == "light" ? styles.bodyText_light : styles.bodyText_dark, {fontSize: bodySize}]
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
                  [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
                }
              >
                {themeChangerTextOnPress(mode)}
              </Text>
            </Pressable>
          </View>
          <View style={styles.fontSizeChangeContainer}>
            <Pressable
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Increase"
              accessibilityHint="Increase font size"
              style={mode == "light" ? styles.font_size_setting_light : styles.font_size_setting_dark}
              onPress={handleFontSizeIncrease}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={
                  mode == "light"
                    ? require("../assets/increaseButton.png")
                    : require("../assets/increaseButton.png")
                }
              />
            </Pressable>
            <Text
              style={
                [mode == "light" ? styles.bodyText_light : styles.bodyText_dark, {fontSize: bodySize}]
              }
            >
              FONT SIZE
            </Text>
            <Pressable
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Decrease"
              accessibilityHint="Decrease font size"
              style={mode == "light" ? styles.font_size_setting_light : styles.font_size_setting_dark}
              onPress={handleFontSizeDecrease}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={
                  mode == "light"
                    ? require("../assets/decreaseButton.png")
                    : require("../assets/decreaseButton.png")
                }
              />
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
