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

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { db } from "../firebase-config.js";
import { getDatabase, ref, get, child } from "firebase/database";

const programsRef = ref(getDatabase(), "programs");

class Program {
  constructor(name, description, inperson, online) {
    this.name = name;
    this.description = description;
    this.inperson = inperson;
    this.online = online;
  }
}

let programList = [];
get(programsRef).then((snapshot) => {
  snapshot.forEach((item) => {
    const temp = new Program(
      item.val().name,
      item.val().description,
      item.val().inperson,
      item.val().online
    );
    programList.push(temp);
  });
});

function Programs({ navigation }) {
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
          onPress={() => navigation.navigate("Tutorial")}
        >
          <Text style={styles.buttonText}> Tutorial </Text>
        </Pressable>
      </View>

      <View style={styles.middleContainer}>
        <View>
          <Text style={styles.heading}> Programs </Text>

          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              {programList.map((item) => (
                <View 
                  key={item.name}
                  accessible={true}
                  accessibilityRole="button"
                  accessibilityLabel={item.name}
                  accessibilityHint="See the details of this program">
                  <Pressable
                    onPress={() =>
                      navigation.navigate("COURSE", {
                        ID: item.name,
                      })
                    }
                  >
                    <Text style={styles.bodyText}>{item.name}</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
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

export default Programs;

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

    height: 500,

    justifyContent: "space-between",
  },

  scrollView: {
    height: 500,
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
    fontWeight: "bold",
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
    height: 200,

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
