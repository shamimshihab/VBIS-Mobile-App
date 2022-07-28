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
// For Navigation
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Import Pages
import Contact from "./Screens/Contact";
import AboutVbis from "./Screens/AboutVbis";
import HomeScreen from "./Screens/HomeScreen";
import Programs from "./Screens/Programs";
import MySchedule from "./Screens/MySchedule";
import VbisSchedule from "./Screens/VbisSchedule";
import News from "./Screens/News";
import OtherResources from "./Screens/OtherResources";
import Settings from "./Screens/Settings";
import Tutorial from "./Screens/Tutorial";
import Course from "./Screens/Course.js";
import Staff from "./Screens/Staff";

//Authentication
import { auth } from "./firebase-config.js";
import { signInAnonymously } from "firebase/auth";

signInAnonymously(auth)
  .then(() => {
    //TO DO
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    //TO DO: error handling
  });

// Redux for Theme
import { Provider } from "react-redux";
import configureStore from "./redux-store/store";

// Initialize the store
const store = configureStore();
// For Navigation
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AboutVbis" component={AboutVbis} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Programs" component={Programs} />
          <Stack.Screen name="MySchedule" component={MySchedule} />
          <Stack.Screen name="VbisSchedule" component={VbisSchedule} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="OtherResources" component={OtherResources} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Tutorial" component={Tutorial} />
          <Stack.Screen name="COURSE" component={Course} />
          <Stack.Screen name="Staff" component={Staff} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
