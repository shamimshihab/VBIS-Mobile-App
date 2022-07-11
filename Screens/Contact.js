import * as React from "react";
import call from "react-native-phone-call";
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
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { db } from '../firebase-config.js';
import { getDatabase, ref, get, child, val } from 'firebase/database';

const contactRef = ref(getDatabase(), 'contact');

let { address, email, hours, phone } = '';

get(contactRef).then(snapshot => {
  address = snapshot.val().address;
  email = snapshot.val().email;
  hours = snapshot.val().hours;
  phone = snapshot.val().phone;
});

function Contact({ navigation }) {
  const triggerCall = () => {
    const args = {
      number: phone, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

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
          <Text style={styles.bouttonText}> Tutorial </Text>
        </Pressable>
      </View>

      <View style={styles.middleContainer}>
        <View>
          <Text style={styles.heading}>Contact</Text>

          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}> Location:</Text>
            <Text> {address}</Text>
          </Text>

          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}> Working Hours:</Text>
            <Text> {hours} </Text>
          </Text>

          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}> Phone:</Text>
            <Text> {phone}</Text>
          </Text>

          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}> Email:</Text>
            <Text> {email}</Text>
          </Text>

          <View>
            <Pressable onPress={triggerCall} style={styles.callButton}>
              <Ionicons name="call" size={24} color="black" />
              <Text style={styles.bouttonText}>Call Us</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <Pressable
            style={styles.bottomButton}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="back" size={22} color="black" />
            <Text style={styles.bouttonText}>Back</Text>
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

export default Contact;

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

    textAlign: "left",
    padding: 4,

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

  callButton: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 15,
    flexDirection: "row",

    width: "90%",
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
