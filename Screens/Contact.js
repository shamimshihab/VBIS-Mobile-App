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
import TopHeader from "../Components/TopHeader";

import { Ionicons } from "@expo/vector-icons";
import { db } from "../firebase-config.js";
import { getDatabase, ref, get, child, val } from "firebase/database";
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from "react-native-maps";
import Footer from "../Components/Footer";

const contactRef = ref(getDatabase(), "contact");

const VBISRegion = {
  latitude: 48.43251013505817,
  longitude: -123.36010116633796,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

let { address, email, hours, phone } = "";

get(contactRef).then((snapshot) => {
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
        <TopHeader navigation={navigation} />
      </View>

      <View style={styles.middleContainer}>
        <View>
          <Text style={styles.heading} accessibilityRole="header">
            Contact
          </Text>

          <Text style={styles.bodyText} accessibilityRole="text">
            <Text style={{ fontWeight: "bold" }}> Location:</Text>
            <Text> {address}</Text>
          </Text>

          <Text style={styles.bodyText} accessibilityRole="text">
            <Text style={{ fontWeight: "bold" }}> Working Hours:</Text>
            <Text> {hours} </Text>
          </Text>

          <Text style={styles.bodyText} accessibilityRole="text">
            <Text style={{ fontWeight: "bold" }}> Phone:</Text>
            <Text> {phone}</Text>
          </Text>

          <Text style={styles.bodyText} accessibilityRole="text">
            <Text style={{ fontWeight: "bold" }}> Email:</Text>
            <Text> {email}</Text>
          </Text>

          <View>
            <Pressable
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Call VBIS"
              accessibilityHint="Open Phone app to call the VBIS front desk"
              onPress={triggerCall}
              style={styles.callButton}
            >
              <Ionicons name="call" size={24} color="black" />
              <Text style={styles.bouttonText}>Call Us</Text>
            </Pressable>
          </View>
        </View>

        {/* <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={VBISRegion} 
          >
            <Marker coordinate={VBISRegion} />
          </MapView>
        </View> */}
      </View>

      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
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

  map: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 15,
    width: 300,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
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
