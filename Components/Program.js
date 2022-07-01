import { StatusBar } from 'expo-status-bar';
//import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, Image } from 'react-native';
import { configureFonts, Searchbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { database, ref } from '@react-native-firebase/database';
import { getDatabase, ref, get, child, val, once, toJSON } from 'firebase/database';
import db from '../firebase-config.js';
console.log('made it thru imports');

//const programsRef = ref(db, '/programs');
//const programsRef = ref(db);
const programsRef = ref(getDatabase());
//const programsRef = firebase.database().ref('/programs');
//const writeprograms = get(child(programsRef, 'abi101/name')).val();
let prog = get(child(programsRef, 'programs/abi101/name'))
    .then((snapshot) => {
      console.log(snapshot.val())
      return snapshot.val()
    })
    .then((result) => {
      return result;
    });
console.log("found abi101");
const abi = child(programsRef, 'programs/abi101').toJSON();
console.log(abi);
console.log(abi.name);
console.log("did it work?");

console.log(prog);
/*const prog1 = get(child(programsRef, 'programs/abi101/name'))
      .then((snapshot) => { return snapshot.val() })
      .catch((error) => console.log(error));
console.log(prog1);*/

/*const prog1 = child(programsRef, 'programs/abi101/name')
      .once('value', (snapshot) => {
  return snapshot.val()
});
console.log(prog1);*/

//console.log(writeprograms);
let data1 = [];

/*child(programsRef, 'programs').once('value').then(snapshot => {
  snapshot.forEach(item => {
      const temp = item.val().name;
      data1.push(temp);
      return false;
  })
});*/
get(child(programsRef, 'programs')).then(snapshot => {
  snapshot.forEach(item => {
      const temp = item.val().name;
      data1.push(temp);
      return false;
  })
});
console.log(data1);

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
        <Text>{ data1.forEach(value => {return value}) }</Text>
        {data1.forEach((item) => {
          <Text>
            { item }
            { '/n' }
          </Text>
        })}
      </View>
    );
  }
  //{programsRef.once('value').val()}
//<Text>{ prog1 }</Text>

export default Programs;