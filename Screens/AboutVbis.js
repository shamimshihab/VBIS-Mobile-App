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
import TopHeader from "../Componenets/TopHeader";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function AboutVbis({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <Image
            style={{ width: 140, height: 50 }}
            source={require("../assets/vbisLogo.png")}
          />
        </View>

        <Pressable
          style={styles.setting}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/settings.png")}
          />
        </Pressable>

        <Pressable
          style={styles.tutorial}
          color="#f194ff"
          onPress={() => navigation.navigate("Tuitorial")}
        >
          <Text style={styles.buttonText}> Tutorial </Text>
        </Pressable>
      </View>

      <View style={styles.middleContainer}>
        <View>
          <Text style={styles.heading}>About VBIS</Text>
          <Text style={styles.bodyText}>
            The Victoria Brain Injury Society (VBIS) is a not-for-profit
            organization that offers free-ofcharge programs and services, and
            whose mission is to support, educate, and advocate for adults with
            acquired brain injuries and their families; and to increase
            community awareness about acquired brain injuries.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <Pressable
            style={styles.bottomButton}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="back" size={22} color="black" />
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.bottomButton}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <AntDesign name="home" size={22} color="black" />
            <Text style={styles.buttonText}> Home </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default AboutVbis;

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    height: "100%",
  },

  /*Top Header Style*/

  logo: {
    marginTop: 50,
    marginRight: 20,
    marginBottom: 50,
    width: 100,
    height: 50,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  setting: {
    marginTop: 50,
    marginRight: 15,
    marginLeft: 40,
    marginBottom: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  tutorial: {
    marginTop: 50,
    marginRight: 10,
    marginBottom: 50,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  headerContainer: {
    flexDirection: "row",
    height: "15%",

    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  /*Middle*/
  middleContainer: {
    flexDirection: "column",

    height: "70%",

    justifyContent: "space-between",
  },

  heading: {
    alignItems: "center",
    fontSize: 30,
    padding: 20,

    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },

  bodyText: {
    fontSize: 20,

    textAlign: "center",
    padding: 10,

    color: "#000000",
  },

  buttonText: {
    fontSize: 15,

    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    color: "#000000",
  },

  /*Bottom */
  bottomContainer: {
    flexDirection: "row",
    height: "15%",

    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomButton: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    flexDirection: "row",

    width: 120,
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
});
