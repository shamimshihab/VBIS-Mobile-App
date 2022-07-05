import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDatabase, ref, get, child } from 'firebase/database';
import db from '../firebase-config.js';

const aboutRef = ref(getDatabase(), 'about');

let about = null;

get(child(aboutRef, 'aboutVBIS')).then(snapshot => {
  about = snapshot.val();
});

const About = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('ABOUT_VBIS')}
        />
        <Text>{about}</Text>
      </View>
    );
}

export default About;