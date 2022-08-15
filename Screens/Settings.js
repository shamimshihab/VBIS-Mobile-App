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
  RadioButton,
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
//Radio Group
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
const radioButtonsData = [
  {
    id: "0", // acts as primary key, should be unique and non-empty string
    label: "Light Mode",
    selected: "true",
    color: "black",
    labelStyle: {
      marginRight: 60,
    },
  },
  {
    id: "1",
    label: "Dark Mode",
    color: "black",
  },
];
function Settings({ navigation }) {
  // get the current theme
  const theme = useSelector((state) => state.theme);
  // initialize action dispatcher
  const dispatch = useDispatch();
  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  // Handle changing the theme mode

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = function (radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    if (radioButtonsArray[0].selected === true) {
      const handleThemeChange = () => {
        dispatch(switchMode(theme.mode === "light" ? "light" : "light"));
      };

      dispatch(switchMode(theme.mode === "light" ? "light" : "light"));
      radioButtonsArray[0].labelStyle = { color: "black", marginRight: 60 };
      radioButtonsArray[1].labelStyle = { color: "black" };
      radioButtonsArray[1].color = "black";
      radioButtonsArray[0].color = "black";
    } else if (radioButtonsArray[1].selected === true) {
      dispatch(switchMode(theme.mode === "light" ? "dark" : "dark"));
      radioButtonsArray[1].color = "white";
      radioButtonsArray[0].color = "white";
      radioButtonsArray[0].labelStyle = { color: "white", marginRight: 60 };
      radioButtonsArray[1].labelStyle = { color: "white" };
    } else {
      // nothing
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
        {console.log}
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
            <View style={styles.photoThemeChange}>
              <Image
                style={{ width: 100, height: 150, marginLeft: 70 }}
                source={require("../assets/Theme_Preview_Light_Grey.png")}
              />

              <Image
                style={{ width: 100, height: 150, marginLeft: 60 }}
                source={require("../assets/Theme_Preview_Dark_Grey.png")}
              />
            </View>

            <View>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                layout="row"
              />
            </View>
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
