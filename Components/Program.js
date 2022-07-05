import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { configureFonts, Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { database, ref } from '@react-native-firebase/database';
import { getDatabase, ref, get, child, val, once, toJSON, toString } from 'firebase/database';
import db from '../firebase-config.js';

//const programsRef = ref(db, '/programs');
//const programsRef = ref(db);
//const programsRef = ref(getDatabase());
const programsRef = ref(getDatabase(), 'programs');
//const programsRef = firebase.database().ref('/programs');
//const writeprograms = get(child(programsRef, 'abi101/name')).val();
let prog = get(child(programsRef, 'abi101/name'))
    .then((snapshot) => {
      console.log(snapshot.val())
      return snapshot.val()
    })
    .then((result) => {
      return result;
    });

console.log(prog);

/*const prog1 = child(programsRef, 'programs/abi101/name')
      .once('value', (snapshot) => {
  return snapshot.val()
});
console.log(prog1);*/

let data1 = [];

/*child(programsRef, 'programs').once('value').then(snapshot => {
  snapshot.forEach(item => {
      const temp = item.val().name;
      data1.push(temp);
      return false;
  })
});*/
get(programsRef).then(snapshot => {
  snapshot.forEach(item => {
    //const temp = item.val().name;
    const temp = item;
    data1.push(temp);
  })
});
console.log(data1);
const list = ['1', '2', '3', '4'];

const Programs = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('PROGRAMS')}
        />
        <Text>Program list:</Text>
        {data1.map((item) =>
          <View key={item.key} style={{ alignItems:'left' }}>
            <Pressable>
              <Text>{ item.val().name }</Text>
            </Pressable>
          </View>
        )}

      </View>
    );
  }

export default Programs;