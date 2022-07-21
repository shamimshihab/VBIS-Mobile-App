import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function Course ({navigation, route}){
  const {ID} = route.params;
  const {Desc} = route.params;
  const {InPer} = route.params;
  const {Online} = route.params;
  const {StartTime} = route.params;
  const {EndTime} = route.params;
  const {Monday} = route.params;
  const {Tuesday} = route.params;
  const {Wednesday} = route.params;
  const {Thursday} = route.params;
  const {Friday} = route.params;

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
          <Text style={styles.heading}> {ID} </Text>
          <Text style={styles.subtitle}>Schedule</Text>
          <Text style={styles.bodyText}>
            {Online ? <Text>Offered Online</Text> : <Text>Offered in Person</Text>}
          </Text>
          {Monday ? <Text style={styles.bodyText}>
            Monday 
            {StartTime != null ? <Text style={styles.bodyText}>
              {StartTime < 12 ? <Text style={styles.bodyText}> {StartTime}AM</Text> : 
              StartTime === 12 ? <Text style={styles.bodyText}> {StartTime}PM</Text> : 
              <Text style={styles.bodyText}> {StartTime-12}PM</Text>}
            </Text> : null}
            -
            {EndTime != null ? <Text style={styles.bodyText}>
              {EndTime < 12 ? <Text style={styles.bodyText}>{EndTime}AM</Text> : 
              EndTime === 12 ? <Text style={styles.bodyText}>{EndTime}PM</Text> : 
              <Text style={styles.bodyText}>{EndTime-12}PM</Text>}
            </Text> : null}
          </Text> : null}
          {Tuesday ? <Text style={styles.bodyText}>
            Tuesday
            {StartTime != null ? <Text style={styles.bodyText}>
              {StartTime < 12 ? <Text style={styles.bodyText}> {StartTime}AM</Text> : 
              StartTime === 12 ? <Text style={styles.bodyText}> {StartTime}PM</Text> : 
              <Text style={styles.bodyText}> {StartTime-12}PM</Text>}
            </Text> : null}
            -
            {EndTime != null ? <Text style={styles.bodyText}>
              {EndTime < 12 ? <Text style={styles.bodyText}>{EndTime}AM</Text> : 
              EndTime === 12 ? <Text style={styles.bodyText}>{EndTime}PM</Text> : 
              <Text style={styles.bodyText}>{EndTime-12}PM</Text>}
            </Text> : null}
          </Text> : null}
          {Wednesday ? <Text style={styles.bodyText}>
            Wednesday
            {StartTime != null ? <Text style={styles.bodyText}>
              {StartTime < 12 ? <Text style={styles.bodyText}> {StartTime}AM</Text> : 
              StartTime === 12 ? <Text style={styles.bodyText}> {StartTime}PM</Text> : 
              <Text style={styles.bodyText}> {StartTime-12}PM</Text>}
            </Text> : null}
            -
            {EndTime != null ? <Text style={styles.bodyText}>
              {EndTime < 12 ? <Text style={styles.bodyText}>{EndTime}AM</Text> : 
              EndTime === 12 ? <Text style={styles.bodyText}>{EndTime}PM</Text> : 
              <Text style={styles.bodyText}>{EndTime-12}PM</Text>}
            </Text> : null}
          </Text> : null}
          {Thursday ? <Text style={styles.bodyText}>
            Thursday
            {StartTime != null ? <Text style={styles.bodyText}>
              {StartTime < 12 ? <Text style={styles.bodyText}> {StartTime}AM</Text> : 
              StartTime === 12 ? <Text style={styles.bodyText}> {StartTime}PM</Text> : 
              <Text style={styles.bodyText}> {StartTime-12}PM</Text>}
            </Text> : null}
            -
            {EndTime != null ? <Text style={styles.bodyText}>
              {EndTime < 12 ? <Text style={styles.bodyText}>{EndTime}AM</Text> : 
              EndTime === 12 ? <Text style={styles.bodyText}>{EndTime}PM</Text> : 
              <Text style={styles.bodyText}>{EndTime-12}PM</Text>}
            </Text> : null}
          </Text> : null}
          {Friday ? <Text style={styles.bodyText}>
            Friday
            {StartTime != null ? <Text style={styles.bodyText}>
              {StartTime < 12 ? <Text style={styles.bodyText}> {StartTime}AM</Text> : 
              StartTime === 12 ? <Text style={styles.bodyText}> {StartTime}PM</Text> : 
              <Text style={styles.bodyText}> {StartTime-12}PM</Text>}
            </Text> : null}
            -
            {EndTime != null ? <Text style={styles.bodyText}>
              {EndTime < 12 ? <Text style={styles.bodyText}>{EndTime}AM</Text> : 
              EndTime === 12 ? <Text style={styles.bodyText}>{EndTime}PM</Text> : 
              <Text style={styles.bodyText}>{EndTime-12}PM</Text>}
            </Text> : null}
          </Text> : null}
          <Text style={styles.subtitle}>Information</Text>
          <Text style={styles.bodyText}>{Desc}</Text>
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

export default Course;

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

  scrollView: {
    height: 500,
  },
  heading: {
    alignItems: "center",
    fontSize: 35,
    marginTop: 20,
    padding: 20,

    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },

  itemButton: {
    marginTop: 20,

    width: 330,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  bodyText: {
    fontSize: 20,

    textAlign: "justify",
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

  subtitle: {
    alignItems: "center",
    fontSize: 30,
    padding: 10,

    textAlign: "center",
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
});
