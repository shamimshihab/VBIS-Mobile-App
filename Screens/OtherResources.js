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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { db } from "../firebase-config.js";
import { auth } from "../firebase-config.js";
import {
  getDatabase,
  ref,
  get,
  child,
  onValue,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "firebase/database";
import { signInAnonymously } from "firebase/auth";

import { styles } from "../style/styles";
import ServiceList from "./ServiceList";

/*
Authentication
Signs in user to an anonymous account
*/
signInAnonymously(auth)
  .then(() => {
    //TO DO
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode);
    // console.log(errorMessage);
    //TO DO: error handling
  });

// Other Ref
const otherRef = ref(getDatabase(), "otherResources");

class ResourceCategory {
  constructor(key, type) {
    this.key = key;
    this.type = type;
    this.serviceList = [];
  }

  listenForType() {
    onValue(child(otherRef, `${this.key}/type`), (snapshot) => {
      this.type = snapshot.val();
    });
  }

  listenForServices() {
    const serviceRef = child(otherRef, `${this.key}`);
    onChildAdded(serviceRef, (snapshot) => {
      if (snapshot.key != "type") {
        const tempService = new Resource(
          snapshot.key,
          snapshot.val().name,
          snapshot.val().description,
          snapshot.val().location,
          snapshot.val().phone
        );
        this.serviceList.push(tempService);
      }
    });
    onChildChanged(serviceRef, (snapshot) => {
      if (snapshot.key != "type") {
        const index = this.serviceList.findIndex((item) => {
          return item.key === snapshot.key;
        });
        this.serviceList[index].update(
          snapshot.val().name,
          snapshot.val().description,
          snapshot.val().location,
          snapshot.val().phone
        );
      }
    });
    onChildRemoved(serviceRef, (snapshot) => {
      if (snapshot.key != "type") {
        const index = this.serviceList.findIndex((item) => {
          return item.key === snapshot.key;
        });
        this.serviceList.splice(index, 1);
      }
    });
  }
}

class Resource {
  constructor(key, name, description, location, phone) {
    this.key = key;
    this.name = name;
    this.description = description;
    this.location = location;
    this.phone = phone;
  }

  update(name, description, location, phone) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.phone = phone;
  }
}

let resourceDescription = "";
let resourceCategoryList = [];

onValue(child(otherRef, "description"), (snapshot) => {
  resourceDescription = snapshot.val();
});

onChildAdded(otherRef, (snapshot) => {
  if (snapshot.key != "description") {
    const temp = new ResourceCategory(snapshot.key, snapshot.val().type);
    temp.listenForType();
    temp.listenForServices();
    resourceCategoryList.push(temp);
  }
});
onChildRemoved(otherRef, (snapshot) => {
  if (snapshot.key != "description") {
    const index = resourceCategoryList.findIndex((item) => {
      return item.key === snapshot.key;
    });
    resourceCategoryList.splice(index, 1);
  }
});

function OtherResources({ navigation }) {
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
          {/* Heading*/}
          <Text
            style={mode == "light" ? styles.heading_light : styles.heading_dark}
            accessibilityRole="header"
          >
            Other Resources
          </Text>
          <SafeAreaView>
            <ScrollView style={styles.scrollViewOtherResourcePage}>
              {/* Description About Other Respurces*/}

              <Text
                style={
                  mode == "light"
                    ? styles.otherResourcesBodyText_light
                    : styles.otherResourcesBodyText_dark
                }
                accessibilityRole="text"
              >
                {resourceDescription}
              </Text>

              {resourceCategoryList.map((item) => (
                <View
                  key={item.key}
                  accessible={true}
                  accessibilityRole="button"
                  accessibilityLabel={item.name}
                  accessibilityHint="See the details of this program"
                >
                  <Pressable
                    style={
                      mode == "light"
                        ? styles.itemButton_light
                        : styles.itemButton_dark
                    }
                    onPress={() =>
                      navigation.navigate("ServiceList", {
                        Service: item.serviceList,
                        Type: item.type,
                      })
                    }
                  >
                    <Text
                      style={
                        mode == "light"
                          ? styles.buttonText_light
                          : styles.buttonText_dark
                      }
                    >
                      {item.type}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default OtherResources;
