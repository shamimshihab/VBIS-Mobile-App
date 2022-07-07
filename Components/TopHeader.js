import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";

function TopHeader() {
  return (
    <View>
      <View style={styles.rowContainer}>
        <View style={styles.logo}>
          <Image
            style={{ width: 120, height: 50 }}
            source={require("../assets/vbisLogo.png")}
          />
        </View>

        <View style={styles.settings}>
          <Pressable color="#f194ff" onPress={() => Alert.alert("Settings")}>
            <Text style={styles.buttonText}> Settings </Text>
          </Pressable>
        </View>

        <View style={styles.tutorial}>
          <Pressable color="#f194ff" onPress={() => Alert.alert("TUTORIAL")}>
            <Text style={styles.buttonText}> Tutorial </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default TopHeader;

const styles = StyleSheet.create({
  title: {
    flex: 0,
    marginTop: 10,
    marginLeft: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    marginLeft: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },

  logo: {
    marginTop: 50,
    marginRight: 45,
    width: 125,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tutorial: {
    marginTop: 50,
    marginRight: 20,
    width: 60,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#89B589",
  },

  settings: {
    marginTop: 50,
    marginRight: 20,
    width: 60,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#89B589",
  },

  buttonText: {
    fontSize: 10,
    fontFamily: "OpenSans",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#000000",
  },
});
