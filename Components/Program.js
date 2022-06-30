import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { configureFonts, Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { database, ref } from '@react-native-firebase/database';
import { getDatabase, ref, get, child } from 'firebase/database';
import db from '../firebase-config.js';
console.log('made it thru imports');

//const programsRef = database().ref('https://vbis-test-default-rtdb.firebaseio.com/programs');
//const programsRef = ref(db, '/programs');
//const programsRef = ref(db);
const programsRef = ref(getDatabase());
//const programsRef = firebase.database().ref('/programs');
//const writeprograms = get(child(programsRef, 'abi101/name'));
get(child(programsRef, 'programs/abi101/name')).then((snapshot) => console.log(snapshot.val()));
//console.log(writeprograms);

const Programs = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('PROGRAMS')}
        />
        <Text>Program list</Text>
        <Text>hello</Text>
      </View>
    );
  }
  //{programsRef.once('value').val()}

export default Programs;